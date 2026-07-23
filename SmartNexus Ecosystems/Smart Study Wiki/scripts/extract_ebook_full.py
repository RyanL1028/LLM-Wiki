#!/usr/bin/env python3
"""Download ALL files from a Kerboodle e-book by parsing the OPF manifest."""
import asyncio
import json
import os
import re
import xml.etree.ElementTree as ET
from playwright.async_api import async_playwright
from urllib.parse import urlparse, unquote, urljoin

USERNAME = 'rleung1'
PASSWORD = 'N@is6107!'
INST_CODE = 'sh9'
BOOK_URL = 'https://www.kerboodle.com/api/ereader_books/1588008.html'
OUTPUT_DIR = '/Users/ryan/Documents/LLM Wiki/sources/Science Student Book 7'
CONTENT_DIR = os.path.join(OUTPUT_DIR, 'content')

# Track what we download
downloaded = {}  # url -> path
cdn_base = None   # will be discovered from network requests

async def main():
    os.makedirs(CONTENT_DIR, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(
            headless=True,
            args=['--disable-blink-features=AutomationControlled', '--no-sandbox']
        )
        context = await browser.new_context(
            viewport={'width': 1440, 'height': 900},
            user_agent='Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            locale='en-GB',
            timezone_id='Europe/London',
        )
        page = await context.new_page()
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            window.chrome = { runtime: {}, loadTimes: function() {}, csi: function() {} };
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
            Object.defineProperty(navigator, 'languages', { get: () => ['en-GB', 'en-US', 'en'] });
        """)

        # Network interception to discover CDN base URL and capture all files
        cdn_urls_seen = set()

        async def handle_response(response):
            url = response.url
            if response.status != 200:
                return
            # Track CDN URLs to discover the base
            if any(d in url for d in ['oupereader.com', 'oupprod-ebook-raw', 's3.amazonaws.com/oupprod']):
                if url not in cdn_urls_seen:
                    cdn_urls_seen.add(url)
                    parsed = urlparse(url)
                    path = unquote(parsed.path).lstrip('/')
                    # Only download if we don't already have it
                    local_path = os.path.join(CONTENT_DIR, path)
                    if not os.path.exists(local_path):
                        try:
                            body = await response.body()
                            if body and len(body) > 0:
                                os.makedirs(os.path.dirname(local_path), exist_ok=True)
                                with open(local_path, 'wb') as f:
                                    f.write(body)
                                downloaded[url] = path
                                ext = os.path.splitext(path)[1]
                                icon = 'IMG' if ext in ('.png','.jpg','.jpeg','.gif','.svg','.webp') else \
                                       'CSS' if ext == '.css' else 'XHTML' if ext in ('.xhtml','.html') else \
                                       'JS' if ext == '.js' else 'FILE'
                                print(f"  [{icon}] {path} ({len(body):,} bytes)")
                        except:
                            pass

        page.on('response', handle_response)

        # === Step 1: Login ===
        print("=" * 60)
        print("Step 1: Logging into Kerboodle...")
        await page.goto('https://www.kerboodle.com/users/login', wait_until='networkidle')
        await page.wait_for_timeout(3000)

        try:
            await page.click('#onetrust-accept-btn-handler', timeout=5000)
            print("  Accepted cookies")
            await page.wait_for_timeout(1000)
        except:
            print("  No cookie popup")

        await page.fill('#user_login', USERNAME)
        await page.fill('#user_password', PASSWORD)
        await page.fill('#user_institution_code', INST_CODE)

        await page.evaluate("""
            let buttons = document.querySelectorAll('button');
            for (let btn of buttons) {
                if (btn.textContent.trim() === 'Sign in' && btn.offsetParent !== null) {
                    btn.click();
                    break;
                }
            }
        """)
        await page.wait_for_load_state('networkidle')
        await page.wait_for_timeout(3000)

        if 'login' in page.url.lower():
            print(f"  ERROR: Login failed! URL: {page.url}")
            await browser.close()
            return

        print(f"  Logged in: {page.url}")

        # === Step 2: Get LTI params and launch e-reader ===
        print("\nStep 2: Getting LTI params and launching e-reader...")
        html = await page.evaluate("""
            async () => {
                let resp = await fetch('/api/ereader_books/1588008.html');
                return await resp.text();
            }
        """)

        form_match = re.search(r'<form[^>]*action="([^"]*)"[^>]*>(.*?)</form>', html, re.DOTALL)
        if not form_match:
            print("  ERROR: No LTI form found!")
            await browser.close()
            return

        lti_action = form_match.group(1)
        inputs = re.findall(r'<input[^>]*name="([^"]*)"[^>]*value="([^"]*)"', form_match.group(2))
        lti_data = dict(inputs)
        print(f"  Book: {lti_data.get('custom_book', 'unknown')}")
        print(f"  LTI action: {lti_action[:100]}...")

        # Submit LTI form
        try:
            await page.evaluate(f"""
                let form = document.createElement('form');
                form.method = 'POST';
                form.action = '{lti_action}';
                form.style.display = 'none';
                let params = {json.dumps(lti_data)};
                for (let key in params) {{
                    let input = document.createElement('input');
                    input.type = 'hidden';
                    input.name = key;
                    input.value = params[key];
                    form.appendChild(input);
                }}
                document.body.appendChild(form);
                form.submit();
            """)
        except:
            pass

        # Wait for redirect to oupereader.com
        try:
            await page.wait_for_url('**/oupereader.com/**', timeout=30000)
            print(f"  eReader URL: {page.url[:150]}")
        except:
            print(f"  WARNING: Did not reach oupereader. Current: {page.url[:150]}")

        # === Step 3: Wait for e-reader to fully load and discover CDN base ===
        print("\nStep 3: Waiting for e-reader to load and discover CDN base...")
        await page.wait_for_timeout(10000)

        # Discover CDN base URL from captured requests
        global cdn_base
        for url in cdn_urls_seen:
            parsed = urlparse(url)
            # Find the common prefix that leads to the EPUB directory
            if '/OEBPS/' in parsed.path or '/META-INF/' in parsed.path:
                cdn_base = f"{parsed.scheme}://{parsed.netloc}"
                print(f"  CDN base discovered: {cdn_base}")
                print(f"  Example path: {parsed.path}")
                break

        if not cdn_base:
            # Try to extract from page data
            cdn_base = await page.evaluate("""
                () => {
                    // Try to find CDN URL from epub reader or network
                    let scripts = document.querySelectorAll('script[src]');
                    for (let s of scripts) {
                        if (s.src.includes('oupereader.com')) {
                            let u = new URL(s.src);
                            return u.origin;
                        }
                    }
                    return null;
                }
            """)

        if cdn_base:
            print(f"  Using CDN base: {cdn_base}")
        else:
            print("  WARNING: Could not determine CDN base URL")
            # Use default
            cdn_base = 'https://uncompressed.oupereader.com'
            print(f"  Falling back to: {cdn_base}")

        # === Step 4: Parse OPF and download all missing files ===
        print("\nStep 4: Parsing OPF and downloading all files...")

        # First try to find the OPF path from captured URLs
        opf_url = None
        for url in cdn_urls_seen:
            if url.endswith('content.opf'):
                opf_url = url
                break

        if not opf_url:
            # Search for OPF in downloaded files
            for root, dirs, files in os.walk(CONTENT_DIR):
                for f in files:
                    if f == 'content.opf':
                        opf_url = 'file://' + os.path.join(root, f)
                        break

        if opf_url:
            print(f"  OPF URL: {opf_url[:120]}")
        else:
            print("  ERROR: Could not find content.opf!")
            await browser.close()
            return

        # Read and parse OPF to get all manifest items
        opf_content = await page.evaluate(f"""
            async () => {{
                let resp = await fetch('{opf_url}');
                return await resp.text();
            }}
        """)

        # Parse OPF XML
        ns = {'opf': 'http://www.idpf.org/2007/opf'}
        root = ET.fromstring(opf_content)
        manifest_items = root.findall('.//opf:manifest/opf:item', ns) or root.findall('.//{http://www.idpf.org/2007/opf}manifest/{http://www.idpf.org/2007/opf}item')

        if not manifest_items:
            # Try without namespace
            manifest_items = root.findall('.//{http://www.idpf.org/2007/opf}item')
        if not manifest_items:
            # Parse manually
            item_matches = re.findall(r'<item[^>]+>', opf_content)
            manifest_items = []
            for m in item_matches:
                href_m = re.search(r'href="([^"]*)"', m)
                type_m = re.search(r'media-type="([^"]*)"', m)
                if href_m:
                    manifest_items.append({'href': href_m.group(1), 'media-type': type_m.group(1) if type_m else 'application/octet-stream'})

        print(f"  Found {len(manifest_items)} manifest items")

        # Build the list of files to download
        # Determine the base path prefix from OPF URL
        opf_parsed = urlparse(opf_url)
        opf_dir = os.path.dirname(unquote(opf_parsed.path))
        # e.g., /6a41ee05-8bf3-18ea-aa13-02a0ae15342a/kerboodle/9781382076692_EPUB/OEBPS

        files_to_fetch = []
        for item in manifest_items:
            href = item.get('href') if isinstance(item, dict) else (item.get('href') or '')
            media_type = item.get('media-type') if isinstance(item, dict) else (item.get('media-type') or '')
            if not href:
                continue
            # Resolve relative paths
            full_url = urljoin(cdn_base + opf_dir + '/', href)
            # Map to local path
            parsed = urlparse(full_url)
            local_path = os.path.join(CONTENT_DIR, unquote(parsed.path).lstrip('/'))
            if not os.path.exists(local_path):
                files_to_fetch.append((full_url, local_path, media_type))

        # Filter to only important types
        wanted_types = {
            'application/xhtml+xml', 'text/html', 'image/svg+xml', 'image/jpeg',
            'image/png', 'image/gif', 'image/webp', 'text/css', 'application/javascript',
            'application/x-dtbncx+xml'
        }
        files_to_fetch = [f for f in files_to_fetch if any(f[2].startswith(t) for t in [
            'application/xhtml+xml', 'text/html', 'image/', 'text/css', 'application/javascript', 'application/x-dtbncx+xml'
        ])]

        # Also exclude inline/audio data JS files (huge and not content)
        files_to_fetch = [f for f in files_to_fetch if not any(skip in f[0].lower() for skip in [
            'glossarypopup_data', 'inlineaudio_data', 'search_indexes', 'external_bundle'
        ])]

        print(f"  Files to download: {len(files_to_fetch)}")
        xhtml_count = sum(1 for f in files_to_fetch if 'xhtml' in f[2] or 'html' in f[2])
        img_count = sum(1 for f in files_to_fetch if 'image' in f[2])
        other_count = len(files_to_fetch) - xhtml_count - img_count
        print(f"  XHTML: {xhtml_count}, Images: {img_count}, Other: {other_count}")

        # Download in batches of 10 to avoid overwhelming the browser
        batch_size = 10
        downloaded_count = 0
        failed_count = 0

        for i in range(0, len(files_to_fetch), batch_size):
            batch = files_to_fetch[i:i+batch_size]
            urls_json = json.dumps([[url, local, mtype] for url, local, mtype in batch])

            results = await page.evaluate(f"""
                async () => {{
                    let batch = {urls_json};
                    let results = [];
                    for (let [url, localPath, mtype] of batch) {{
                        try {{
                            let resp = await fetch(url, {{cache: 'no-cache'}});
                            if (resp.ok) {{
                                let buf = await resp.arrayBuffer();
                                let bytes = Array.from(new Uint8Array(buf));
                                results.push({{url, localPath, status: 'ok', bytes, size: buf.byteLength}});
                            }} else {{
                                results.push({{url, localPath, status: 'fail', code: resp.status}});
                            }}
                        }} catch(e) {{
                            results.push({{url, localPath, status: 'error', msg: e.message}});
                        }}
                    }}
                    return results;
                }}
            """)

            for result in results:
                if result['status'] == 'ok':
                    local = result['localPath']
                    os.makedirs(os.path.dirname(local), exist_ok=True)
                    with open(local, 'wb') as f:
                        f.write(bytes(result['bytes']))
                    downloaded_count += 1
                    rel = os.path.relpath(local, OUTPUT_DIR)
                    icon = 'IMG' if '/media/' in rel else 'XHTML' if rel.endswith('.xhtml') else 'CSS' if rel.endswith('.css') else 'JS' if rel.endswith('.js') else 'FILE'
                    print(f"  [{icon}] {rel} ({result['size']:,} bytes)")
                else:
                    failed_count += 1
                    if failed_count <= 5:  # Only print first 5 failures
                        print(f"  [FAIL] {result['url'][:120]} - {result.get('code', result.get('msg', 'unknown'))}")

            # Small delay between batches
            await page.wait_for_timeout(500)
            pct = min(100, (i + len(batch)) * 100 // len(files_to_fetch))
            print(f"  Progress: {downloaded_count}/{len(files_to_fetch)} downloaded ({pct}%), {failed_count} failed")

        # === Step 5: Save manifest ===
        print("\n" + "=" * 60)
        print("Step 5: Saving updated manifest...")

        # Count actual files
        total_files = 0
        total_size = 0
        xhtml_count = 0
        img_count = 0
        for root, dirs, files in os.walk(CONTENT_DIR):
            for f in files:
                fp = os.path.join(root, f)
                sz = os.path.getsize(fp)
                total_size += sz
                total_files += 1
                ext = os.path.splitext(f)[1].lower()
                if ext in ('.xhtml', '.html'):
                    xhtml_count += 1
                elif ext in ('.jpg', '.jpeg', '.png', '.svg', '.gif', '.webp'):
                    img_count += 1

        meta = {
            'title': 'Oxford International Lower Secondary Science',
            'source': BOOK_URL,
            'total_cdn_files': total_files,
            'xhtml_pages': xhtml_count,
            'images': img_count,
            'total_size_bytes': total_size,
        }
        with open(os.path.join(OUTPUT_DIR, 'manifest.json'), 'w') as f:
            json.dump(meta, f, indent=2)

        print(f"\n{'='*60}")
        print(f"DOWNLOAD COMPLETE")
        print(f"{'='*60}")
        print(f"Output: {OUTPUT_DIR}")
        print(f"Total files: {total_files}")
        print(f"  XHTML pages: {xhtml_count}")
        print(f"  Images: {img_count}")
        print(f"Total size: {total_size:,} bytes ({total_size/1024/1024:.1f} MB)")
        print(f"Newly downloaded: {downloaded_count}")
        print(f"Failed: {failed_count}")

        await browser.close()

asyncio.run(main())
