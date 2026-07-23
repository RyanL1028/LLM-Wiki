#!/usr/bin/env python3
"""Ingest Oxford Science Student Book 7 XHTML into wiki markdown pages."""
import os, re, shutil, json
from xml.etree import ElementTree as ET
from datetime import datetime

OEBPS = '/Users/ryan/Documents/LLM Wiki/sources/Science Student Book 7/content/58ba77f4-a536-0d50-a6df-45ae4ef21235/kerboodle/9781382076692_EPUB/OEBPS'
WIKI = '/Users/ryan/Documents/LLM Wiki/wiki-web/wiki'
BOOK_DIR = 'sources/Science Student Book 7'
OUT_DIR = os.path.join(WIKI, BOOK_DIR)
IMG_SRC = os.path.join(OEBPS, 'media')
IMG_DST = os.path.join(OUT_DIR, 'images')

# Sections to skip (accessibility long descriptions, empty headers)
SKIP_PATTERNS = ['-sec-1001', '-sec-900', '-sec-91']  # accessibility text alternatives
SKIP_IDS = {'coverImage', 'workid-53799-toc-1', 'workid-53799-front-matter-part-6'}  # cover, toc, copyright

# Discipline divider pages
DISCIPLINE_PAGES = {
    'workid-53799-book-part-105': 'Biology',
    'workid-53799-book-part-41': 'Chemistry',
    'workid-53799-book-part-72': 'Physics',
}

# Chapter-level pages (intro pages for each chapter)
CHAPTER_PAGES = {}
for i, name in [
    (1, 'Working Scientifically'), (2, 'Cells'), (3, 'Body Systems'),
    (4, 'Health and Lifestyle'), (5, 'Plants'), (6, 'Particles and Their Behaviour'),
    (7, 'Elements, Atoms, and Compounds'), (8, 'The Periodic Table'),
    (9, 'Acids and Alkalis'), (10, 'Forces'), (11, 'Sound'),
    (12, 'Light'), (13, 'Motion and Pressure')
]:
    CHAPTER_PAGES[f'workid-53799-book-part-{i}'] = name

NS = {'x': 'http://www.w3.org/1999/xhtml', 'epub': 'http://www.idpf.org/2007/ops'}
USED_IMAGES = set()

def parse_spine():
    """Parse content.opf to get the spine reading order, filtering out skipped items."""
    opf_path = os.path.join(OEBPS, 'content.opf')
    with open(opf_path, 'r') as f:
        content = f.read()
    idrefs = re.findall(r'idref="([^"]*)"', content)
    # Also extract the spine section specifically
    spine_match = re.search(r'<spine[^>]*>(.*?)</spine>', content, re.DOTALL)
    if spine_match:
        idrefs = re.findall(r'idref="([^"]*)"', spine_match.group(1))

    kept = []
    for idref in idrefs:
        if idref in SKIP_IDS:
            continue
        if any(p in idref for p in SKIP_PATTERNS):
            continue
        kept.append(idref)
    return kept

def parse_xhtml(filepath):
    """Parse an XHTML file and extract structured content."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove CDATA wrappers and noscript tags (we want the img tags inside)
    content = re.sub(r'<!\[CDATA\[(.*?)\]\]>', r'\1', content, flags=re.DOTALL)
    content = re.sub(r'</?noscript>', '', content)

    # Remove the background-blocker and print-preview-save styles (noise)
    content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)

    try:
        root = ET.fromstring(content)
    except:
        # Try with HTML parser if XML fails
        import html
        content = re.sub(r'xmlns(:\w+)?="[^"]*"', '', content)
        content = re.sub(r'epub:type="[^"]*"', '', content)
        content = re.sub(r'role="[^"]*"', '', content)
        try:
            root = ET.fromstring(content)
        except:
            return None

    return root

def get_text(el):
    """Recursively extract text from an element."""
    if el is None:
        return ''
    text = el.text or ''
    for child in el:
        text += get_text(child)
        text += child.tail or ''
    return text.strip()

def extract_images(el):
    """Extract img src attributes from element tree."""
    imgs = []
    tag = el.tag.split('}')[-1] if '}' in el.tag else el.tag
    if tag == 'img':
        src = el.get('src', '')
        alt = el.get('alt', '')
        if src:
            imgs.append((src, alt))
    for child in el:
        imgs.extend(extract_images(child))
    return imgs

def find_section_body(el):
    """Find the main content container in an XHTML section."""
    tag = el.tag.split('}')[-1] if '}' in el.tag else el.tag
    if tag == 'section':
        # Look for named-book-part-body or direct content
        for child in el:
            ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
            if 'named-book-part-body' in child.get('class', ''):
                return child
            if ctag in ('header', 'div', 'p', 'figure'):
                return el
        return el
    return el

def process_element(el, md_lines, indent=''):
    """Recursively process an XHTML element into markdown lines."""
    tag = el.tag.split('}')[-1] if '}' in el.tag else el.tag
    cls = el.get('class', '')
    data_type = el.get('data-content-type', '')

    # --- Headers ---
    if tag == 'header':
        for child in el:
            ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
            if ctag in ('h1', 'h2', 'h3'):
                process_element(child, md_lines)
        return

    if tag in ('h1', 'h2', 'h3', 'h4'):
        # Extract label and title spans
        label = ''
        title = ''
        for span in el.findall('.//'):
            st = span.tag.split('}')[-1] if '}' in span.tag else span.tag
            if st != 'span':
                continue
            scls = span.get('class', '')
            if 'label' in scls:
                label = get_text(span).strip()
            elif 'title' in scls:
                title = get_text(span).strip()
        if not title:
            title = get_text(el).strip()

        # Skip accessibility headers
        if 'long-description' in cls.lower() or 'long description' in title.lower():
            return

        lvl = int(tag[1])
        prefix = '#' * lvl
        if label and label != title:
            md_lines.append(f'\n{prefix} {label} {title}\n')
        else:
            md_lines.append(f'\n{prefix} {title}\n')
        return

    # --- Paragraphs ---
    if tag == 'p' or 'para' in cls:
        text = render_inline(el)
        if text.strip():
            md_lines.append(f'\n{text}\n')
        return

    # --- Figures ---
    if tag == 'figure' or 'fig' in cls:
        for child in el:
            ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
            ccls = child.get('class', '')
            if ctag == 'figcaption' or 'caption' in ccls:
                caption_text = get_text(child).strip()
                if caption_text:
                    md_lines.append(f'\n*{caption_text}*\n')
            elif ctag == 'img':
                process_image(child, md_lines)
        return

    # --- Images (direct) ---
    if tag == 'img':
        process_image(el, md_lines)
        return

    # --- Boxed text (callout boxes) ---
    if 'boxed-text' in cls or data_type:
        # Extract label text from header
        label_text = ''
        for child in el.iter():
            ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
            ccls = child.get('class', '')
            if ctag == 'span' and 'label' in ccls:
                label_text = get_text(child).strip()

        # Render boxed content, skipping the header that contains the label
        box_lines = []
        for child in el:
            ccls = child.get('class', '')
            # Skip the header/caption div that we already extracted label from
            if 'header' in ccls or 'caption' in ccls:
                continue
            process_element(child, box_lines)

        box_content = ''.join(box_lines).strip()
        if not box_content:
            return

        if label_text:
            md_lines.append(f'\n> **{label_text}**\n')
            for line in box_content.split('\n'):
                line = line.strip()
                if line:
                    md_lines.append(f'> {line}\n')
            md_lines.append('\n')
        else:
            for line in box_content.split('\n'):
                line = line.strip()
                if line:
                    md_lines.append(f'> {line}\n')
            md_lines.append('\n')
        return

    # --- Lists ---
    if tag == 'ul' or (tag == 'div' and 'bullet' in cls and 'list' in cls):
        # Find the actual ul child if inside a div wrapper
        ul_el = el
        if tag == 'div':
            for child in el:
                ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
                if ctag == 'ul' or ctag == 'ol':
                    ul_el = child
                    break
        for li in ul_el:
            ltag = li.tag.split('}')[-1] if '}' in li.tag else li.tag
            if ltag in ('li', 'list-item'):
                text = get_text(li).strip()
                if text:
                    md_lines.append(f'- {text}\n')
        md_lines.append('\n')
        return

    if tag == 'ol' or (tag == 'div' and ('number' in cls or 'alpha' in cls)):
        # Find the actual ol child if inside a div wrapper
        ol_el = el
        if tag == 'div':
            for child in el:
                ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
                if ctag == 'ol' or ctag == 'ul':
                    ol_el = child
                    break
        idx = 1
        for li in ol_el:
            ltag = li.tag.split('}')[-1] if '}' in li.tag else li.tag
            if ltag in ('li', 'list-item'):
                text = get_text(li).strip()
                if text:
                    if 'alpha' in el.get('class', '') or 'alpha' in cls:
                        letter = chr(96 + idx)
                        md_lines.append(f'{letter}) {text}\n')
                    else:
                        md_lines.append(f'{idx}. {text}\n')
                    idx += 1
        md_lines.append('\n')
        return

    # --- List items ---
    if tag in ('li', 'list-item'):
        text = get_text(el).strip()
        if text:
            md_lines.append(f'- {text}\n')
        return

    # --- Spans (inline) ---
    if tag == 'span':
        text = get_text(el).strip()
        if text:
            md_lines.append(f'{text} ')
        return

    # --- Links ---
    if tag == 'a':
        text = get_text(el).strip()
        href = el.get('href', '')
        if href and not href.startswith('#'):
            md_lines.append(f'[{text}]({href})')
        else:
            md_lines.append(text)
        return

    # --- Strong/bold ---
    if tag == 'strong' or tag == 'b':
        md_lines.append(f'**{get_text(el)}**')
        return

    # --- Emphasis ---
    if tag in ('em', 'i'):
        md_lines.append(f'*{get_text(el)}*')
        return

    # --- Divs / containers ---
    if tag == 'div':
        for child in el:
            process_element(child, md_lines, indent)
        return

    # --- Sections ---
    if tag == 'section':
        for child in el:
            process_element(child, md_lines, indent)
        return

    # --- Generic container ---
    for child in el:
        process_element(child, md_lines, indent)

def render_inline(el):
    """Render inline content of an element to markdown."""
    result = []
    if el.text:
        result.append(el.text)
    for child in el:
        ctag = child.tag.split('}')[-1] if '}' in child.tag else child.tag
        ccls = child.get('class', '')

        if ctag == 'strong' or ctag == 'b':
            result.append(f'**{get_text(child)}**')
        elif ctag in ('em', 'i'):
            result.append(f'*{get_text(child)}*')
        elif ctag == 'a':
            text = get_text(child)
            href = child.get('href', '')
            if href.startswith('#'):
                result.append(text)
            else:
                result.append(f'[{text}]({href})')
        elif ctag == 'img':
            src = child.get('src', '')
            alt = child.get('alt', '') or ''
            fname = os.path.basename(src)
            USED_IMAGES.add(fname)
            result.append(f'\n\n![{alt}](images/{fname})\n\n')
        elif ctag == 'span' and 'glossary-term' in ccls:
            result.append(f'**{get_text(child)}**')
        elif ctag == 'span' and 'visually-hidden' in ccls:
            continue  # skip blanks in fill-in exercises
        elif ctag == 'span' and 'prompt' in ccls:
            result.append('________')  # fill-in blank
        elif ctag == 'br':
            result.append('\n')
        else:
            result.append(render_inline(child))
        if child.tail:
            result.append(child.tail)
    return ''.join(result).strip()

def process_image(el, md_lines):
    """Process an img element."""
    src = el.get('src', '')
    alt = el.get('alt', '') or ''
    if src:
        fname = os.path.basename(src)
        USED_IMAGES.add(fname)
        # Check if this is an icon (small SVG) vs content image
        if 'icon' in fname.lower() or 'logo' in fname.lower() or fname.startswith('secondary_icon'):
            return  # skip UI icons
        if alt:
            md_lines.append(f'\n![{alt}](images/{fname})\n')
        else:
            md_lines.append(f'\n![Image](images/{fname})\n')

def xhtml_to_markdown(root):
    """Convert an XHTML element tree to markdown string."""
    md_lines = []
    body = find_section_body(root)
    if body is not None:
        for child in body:
            process_element(child, md_lines)
    else:
        for child in root:
            process_element(child, md_lines)

    # Collapse multiple blank lines
    md = ''.join(md_lines)
    md = re.sub(r'\n{3,}', '\n\n', md)
    md = md.strip()

    # Remove first h2 if it duplicates what will be the page title (h1)
    # The first h2 is often the same as the section label+title from XHTML
    lines = md.split('\n')
    # Find the first heading
    for i, line in enumerate(lines):
        stripped = line.strip()
        if stripped.startswith('## ') and not stripped.startswith('### '):
            # This h2 would duplicate the h1 page title — remove it
            lines[i] = ''
            break
    md = '\n'.join(lines)
    md = re.sub(r'\n{3,}', '\n\n', md)
    md = md.strip()

    return md

def get_page_title(root, idref):
    """Extract the title from an XHTML page."""
    title_el = root.find('.//{http://www.w3.org/1999/xhtml}title')
    if title_el is None:
        title_el = root.find('.//title')
    if title_el is not None and title_el.text:
        return title_el.text.strip()
    return idref.replace('workid-53799-', '').replace('-', ' ').title()

def get_page_summary(md, max_chars=200):
    """Extract first meaningful paragraph as summary."""
    paras = [p.strip() for p in md.split('\n\n') if p.strip() and not p.startswith('#') and not p.startswith('!') and not p.startswith('>')]
    for p in paras:
        clean = re.sub(r'[>*_\n\[\]()!]', '', p).strip()
        # Skip learning objectives, think back, key idea boxes
        if any(skip in clean.lower() for skip in ['after this topic', 'think back', 'key idea', 'key words', 'big question']):
            continue
        if len(clean) > 40:
            if len(clean) > max_chars:
                return clean[:max_chars].rsplit(' ', 1)[0] + '...'
            return clean
    return ''

def determine_discipline(idref):
    """Map an idref to its discipline."""
    if 'book-part-105' in idref or any(f'book-part-{x}' in idref for x in [2,3,4,5]):
        return 'Biology'
    if 'book-part-41' in idref or any(f'book-part-{x}' in idref for x in [6,7,8,9]):
        return 'Chemistry'
    if 'book-part-72' in idref or any(f'book-part-{x}' in idref for x in [10,11,12,13]):
        return 'Physics'
    if 'book-part-1' in idref:
        return 'Working Scientifically'
    return None

def create_page(path, title, md, summary='', tags=None):
    """Write a wiki markdown page with metadata header."""
    os.makedirs(os.path.dirname(path), exist_ok=True)

    if not tags:
        tags = ['science', 'oxford-science', 'student-book-7']

    date_str = datetime.now().strftime('%Y-%m-%d')
    tag_str = ' '.join(f'#{t}' for t in tags)

    header = f"""# {title}

---
**Summary**: {summary}
**Tags**: {tag_str}
**Created**: {date_str}
**Last Updated**: {date_str}
---

"""
    with open(path, 'w') as f:
        f.write(header + md)

def main():
    print("Parsing spine from content.opf...")
    spine = parse_spine()
    print(f"  {len(spine)} items in reading order (after filtering)")

    pages_created = 0

    # Track chapter context
    current_discipline = None
    current_chapter = None
    current_chapter_dir = None
    chapter_number_in_discipline = {}
    in_back_matter = False  # After all chapters, route to root

    for idref in spine:
        filepath = os.path.join(OEBPS, f'{idref}.xhtml')
        if not os.path.exists(filepath):
            print(f"  SKIP (missing): {idref}")
            continue

        print(f"  Processing: {idref}...", end=' ')

        root = parse_xhtml(filepath)
        if root is None:
            print("FAILED to parse")
            continue

        title = get_page_title(root, idref)
        md = xhtml_to_markdown(root)

        if not md or len(md) < 20:
            print(f"SKIP (no content) - title: {title}")
            continue

        summary = get_page_summary(md)

        # Determine where to put this page
        disc = determine_discipline(idref)

        # Check if this is a discipline divider
        if idref in DISCIPLINE_PAGES:
            current_discipline = DISCIPLINE_PAGES[idref]
            current_chapter = None
            current_chapter_dir = os.path.join(OUT_DIR, current_discipline)
            chapter_number_in_discipline[current_discipline] = 0

            # Create discipline intro page
            dpath = os.path.join(current_chapter_dir, f'{current_discipline}.md')
            tags = ['science', 'oxford-science', 'student-book-7', current_discipline.lower()]
            create_page(dpath, current_discipline, md, summary, tags)
            pages_created += 1
            print(f"→ {current_discipline}/{current_discipline}.md")
            continue

        # Check if this is a chapter intro
        if idref in CHAPTER_PAGES:
            current_chapter = CHAPTER_PAGES[idref]
            if current_discipline:
                ch_num = chapter_number_in_discipline.get(current_discipline, 0) + 1
                chapter_number_in_discipline[current_discipline] = ch_num
                current_chapter_dir = os.path.join(OUT_DIR, current_discipline, current_chapter)
            elif 'working' in current_chapter.lower():
                current_chapter_dir = os.path.join(OUT_DIR, current_chapter)
            else:
                current_chapter_dir = os.path.join(OUT_DIR, current_chapter)

            # Create chapter intro page
            tags = ['science', 'oxford-science', 'student-book-7']
            if current_discipline:
                tags.append(current_discipline.lower())
            cpath = os.path.join(current_chapter_dir, f'{current_chapter}.md')
            create_page(cpath, current_chapter, md, summary, tags)
            pages_created += 1
            print(f"→ chapter: {current_chapter}")
            continue

        # Regular section page
        # Check if this is back matter (revision, glossary, acknowledgements, etc.)
        BACK_MATTER_IDS = {
            'workid-53799-book-part-102', 'workid-53799-book-part-103',
            'workid-53799-book-part-104', 'workid-53799-ack-1',
            'workid-53799-autobm-part-1', 'workid-53799-autobm-part-2'
        }
        if idref in BACK_MATTER_IDS:
            in_back_matter = True
            current_discipline = None
            current_chapter = None
            current_chapter_dir = OUT_DIR

        # Check if this is a back matter section (belongs to back matter parent)
        if any(idref.startswith(bm + '-') for bm in BACK_MATTER_IDS):
            in_back_matter = True
            current_chapter_dir = OUT_DIR

        if in_back_matter:
            current_chapter_dir = OUT_DIR

        # Clean title for filename
        fname = title.replace('/', '-').replace(':', ' -').strip()
        # Truncate long filenames
        if len(fname) > 80:
            fname = fname[:80]

        if current_chapter_dir:
            page_path = os.path.join(current_chapter_dir, f'{fname}.md')
        elif current_discipline:
            page_path = os.path.join(OUT_DIR, current_discipline, f'{fname}.md')
        else:
            page_path = os.path.join(OUT_DIR, f'{fname}.md')

        tags = ['science', 'oxford-science', 'student-book-7']
        if current_discipline:
            tags.append(current_discipline.lower())

        create_page(page_path, title, md, summary, tags)
        pages_created += 1

        rel = os.path.relpath(page_path, OUT_DIR)
        print(f"→ {rel}")

    # Copy used images
    print(f"\nCopying images...")
    os.makedirs(IMG_DST, exist_ok=True)
    copied = 0
    for fname in sorted(USED_IMAGES):
        src = os.path.join(IMG_SRC, fname)
        dst = os.path.join(IMG_DST, fname)
        if os.path.exists(src) and not os.path.exists(dst):
            shutil.copy2(src, dst)
            copied += 1

    print(f"  {copied} images copied")
    print(f"\n{'='*60}")
    print(f"Ingestion complete!")
    print(f"  Wiki pages created: {pages_created}")
    print(f"  Images copied: {copied}")
    print(f"  Output: {OUT_DIR}")

if __name__ == '__main__':
    main()
