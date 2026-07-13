#!/usr/bin/env python3
"""Extract a Kerboodle e-book using Playwright headless browser."""
import asyncio
import json
import os
import re
import time
from playwright.async_api import async_playwright
from urllib.parse import urlparse, unquote

USERNAME = 'rleung1'
PASSWORD = 'N@is6107!'
INST_CODE = 'sh9'
BOOK_URL = 'https://www.kerboodle.com/api/ereader_books/1588008.html'
OUTPUT_DIR = '/Users/ryan/Documents/LLM Wiki/sources/Science Student Book 7'

content_files = {}  # path -> bytes
css_files = {}      # url -> css_text
page_htmls = []     # list of (page_num, html)

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

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
        # Anti-detection: hide automation signals from CloudFront
        await page.add_init_script("""
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            window.chrome = { runtime: {}, loadTimes: function() {}, csi: function() {} };
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
            Object.defineProperty(navigator, 'languages', { get: () => ['en-GB', 'en-US', 'en'] });
        """)

        # === Network interception ===
        async def handle_response(response):
            url = response.url
            if response.status != 200:
                return
            try:
                content_type = (response.headers.get('content-type', '') or '').lower()
                # Capture CDN content (EPUB files, CSS, images, fonts)
                if any(d in url for d in ['uncompressed.oupereader.com', 'oupprod-ebook-raw', 's3.amazonaws.com/oupprod']):
                    body = await response.body()
                    if body and len(body) > 0:
                        parsed = urlparse(url)
                        path = unquote(parsed.path).lstrip('/')
                        content_files[path] = body
                        kind = content_type.split(';')[0] if content_type else 'bin'
                        ext = os.path.splitext(path)[1]
                        icon = '📷' if ext in ('.png','.jpg','.jpeg','.gif','.svg','.webp') else \
                               '🎨' if ext == '.css' else '📝' if ext in ('.xhtml','.html','.xml','.opf','.ncx') else \
                               '📦' if ext in ('.js','.json') else '📄'
                        print(f"  {icon} {kind}: {path} ({len(body):,} bytes)")
                # Also capture e-reader CSS
                elif '.css' in content_type and 'oupereader.com' in url:
                    body = await response.body()
                    css_files[url] = body.decode('utf-8', errors='replace')
                    print(f"  🎨 CSS: {url} ({len(body):,} bytes)")
            except:
                pass

        page.on('response', handle_response)

        # === Step 1: Login ===
        print("=" * 60)
        print("Step 1: Logging into Kerboodle...")
        await page.goto('https://www.kerboodle.com/users/login', wait_until='networkidle')
        await page.wait_for_timeout(3000)

        # Accept cookies if the popup is present
        try:
            await page.click('#onetrust-accept-btn-handler', timeout=5000)
            print("  Accepted cookies")
            await page.wait_for_timeout(1000)
        except:
            print("  No cookie popup")

        await page.fill('#user_login', USERNAME)
        await page.fill('#user_password', PASSWORD)
        await page.fill('#user_institution_code', INST_CODE)

        # Click the "Sign in" button via JS (avoids ambiguous selector with "Sign in with Microsoft")
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
            # Check for error messages
            error = await page.text_content('.helpCard--error') or ''
            if error:
                print(f"  Error: {error}")
            await browser.close()
            return

        print(f"  Logged in: {page.url}")
        logged_in_url = page.url

        # === Step 2: Get LTI params and submit to reach e-reader ===
        print("\nStep 2: Getting LTI params and launching e-reader...")
        # The e-book page redirects to dashboard when loaded directly.
        # Instead, fetch its HTML via XHR to get the LTI form params.
        html = await page.evaluate("""
            async () => {
                let resp = await fetch('/api/ereader_books/1588008.html');
                return await resp.text();
            }
        """)

        # Extract LTI form
        form_match = re.search(r'<form[^>]*action="([^"]*)"[^>]*>(.*?)</form>', html, re.DOTALL)
        if not form_match:
            print("  ERROR: No LTI form found in e-book page!")
            await browser.close()
            return

        lti_action = form_match.group(1)
        inputs = re.findall(r'<input[^>]*name="([^"]*)"[^>]*value="([^"]*)"', form_match.group(2))
        lti_data = dict(inputs)
        print(f"  Book: {lti_data.get('custom_book', 'unknown')}")

        # Submit LTI form via JS (creates a form programmatically and submits)
        # This will navigate to oupereader.com
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
        except Exception as e:
            pass  # Navigation destroys execution context, which is expected

        # Wait for redirect to oupereader.com
        try:
            await page.wait_for_url('**/oupereader.com/**', timeout=30000)
            print(f"  eReader URL: {page.url[:120]}")
        except:
            print(f"  WARNING: Did not reach oupereader. Current: {page.url[:120]}")
            # Try alternative: maybe the e-reader loaded in an iframe
            pass

        # === Step 3: Wait for e-reader to load ===
        print("\nStep 3: Waiting for e-reader app to load...")
        # Wait for Angular to bootstrap - the book content loads via XHR
        await page.wait_for_timeout(8000)

        # Check what we have
        print(f"  Page title: {await page.title()}")
        print(f"  URL: {page.url[:120]}")

        # Log what's in the page
        body_text = await page.evaluate("() => document.body.innerText?.substring(0, 500) || ''")
        print(f"  Body text preview: {body_text[:200]}")

        # === Step 4: Navigate through pages ===
        print("\nStep 4: Navigating through book pages...")

        for i in range(15):  # Try up to 15 pages
            print(f"\n  --- Page {i+1} ---")
            await page.wait_for_timeout(2000)

            # Capture current page HTML (the rendered content)
            try:
                html = await page.evaluate("""
                    () => {
                        // Try to get the book content area
                        var reader = document.querySelector('epub-reader, .reader, #reader, .epub-container');
                        if (reader) return reader.innerHTML;
                        // Fall back to body
                        return document.body.innerHTML;
                    }
                """)
                page_htmls.append((i+1, html))
                print(f"  Captured HTML: {len(html):,} chars")
            except Exception as e:
                print(f"  Failed to capture HTML: {e}")

            # Take screenshot
            await page.screenshot(path=os.path.join(OUTPUT_DIR, f'page_{i+1:03d}.png'))

            # Try to advance to next page
            advanced = False
            # Method 1: Keyboard
            for key in ['ArrowRight', 'PageDown', 'ArrowDown']:
                try:
                    await page.keyboard.press(key)
                    await page.wait_for_timeout(1500)
                    advanced = True
                    break
                except:
                    pass

            # Method 2: Click next buttons
            if not advanced:
                selectors = [
                    '[aria-label="Next page"]', '[aria-label="Next"]',
                    '.next', '.next-page', '#next', '[data-nav="next"]',
                    'button:has-text("Next")', '[title="Next"]',
                    '.epub-next', '.reader-next',
                ]
                for sel in selectors:
                    try:
                        btn = await page.wait_for_selector(sel, timeout=500)
                        if btn:
                            await btn.click()
                            await page.wait_for_timeout(1500)
                            advanced = True
                            print(f"  Clicked: {sel}")
                            break
                    except:
                        continue

            # Method 3: Swipe/touch
            if not advanced:
                try:
                    await page.mouse.move(1000, 450)
                    await page.mouse.down()
                    await page.mouse.move(200, 450, steps=10)
                    await page.mouse.up()
                    await page.wait_for_timeout(1500)
                    advanced = True
                    print(f"  Swiped left")
                except:
                    pass

            if not advanced:
                print("  Could not advance to next page - might be end of book")
                break

        # === Step 5: Save everything ===
        print("\n" + "=" * 60)
        print("Step 5: Saving extracted content...")

        # Save CDN content files
        for path, body in content_files.items():
            local_path = os.path.join(OUTPUT_DIR, 'content', path)
            os.makedirs(os.path.dirname(local_path), exist_ok=True)
            if isinstance(body, str):
                body = body.encode('utf-8')
            with open(local_path, 'wb') as f:
                f.write(body)

        # Save CSS files
        for url, css in css_files.items():
            fname = urlparse(url).path.split('/')[-1]
            if not fname.endswith('.css'):
                fname = fname + '.css'
            local_path = os.path.join(OUTPUT_DIR, 'css', fname)
            os.makedirs(os.path.dirname(local_path), exist_ok=True)
            with open(local_path, 'w') as f:
                f.write(css)

        # Save page HTMLs
        for page_num, html in page_htmls:
            local_path = os.path.join(OUTPUT_DIR, f'page_{page_num:03d}.html')
            with open(local_path, 'w') as f:
                f.write(html)

        # Save metadata
        meta = {
            'title': 'Science Student Book 7',
            'source': BOOK_URL,
            'total_cdn_files': len(content_files),
            'total_css_files': len(css_files),
            'total_pages_captured': len(page_htmls),
        }
        with open(os.path.join(OUTPUT_DIR, 'manifest.json'), 'w') as f:
            json.dump(meta, f, indent=2)

        # Summary
        print(f"\n{'='*60}")
        print(f"EXTRACTION COMPLETE")
        print(f"{'='*60}")
        print(f"Output: {OUTPUT_DIR}")
        print(f"CDN content files: {len(content_files)}")
        print(f"CSS files: {len(css_files)}")
        print(f"Pages captured: {len(page_htmls)}")

        total_size = 0
        for root, dirs, files in os.walk(OUTPUT_DIR):
            for f in files:
                fp = os.path.join(root, f)
                sz = os.path.getsize(fp)
                total_size += sz
                label = '🖼️' if f.endswith(('.png','.jpg','.svg')) else '📝' if f.endswith(('.html','.xml','.opf')) else '🎨' if f.endswith('.css') else '📄'
                print(f"  {label} {os.path.relpath(fp, OUTPUT_DIR)} ({sz:,} bytes)")
        print(f"\nTotal: {total_size:,} bytes")

        await browser.close()

asyncio.run(main())
