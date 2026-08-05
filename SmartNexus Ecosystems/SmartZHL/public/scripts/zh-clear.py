#!/usr/bin/env python3
"""
zh-clear.py — Clean Chinese lesson files extracted from PDFs.

Does the following:
  1. Removes lines that are purely pinyin (alphabetic characters only)
  2. Removes non-story sections (lesson instructions after ① markers, vocab lists)
  3. Joins broken lines within paragraphs
  4. Splits paragraphs based on user-provided starting phrases
  5. Cleans up extra spaces from PDF text extraction

Usage:
  python3 scripts/zh-clear.py <file.md> --starts "start1" "start2" "start3" ...

The --starts argument lists the first few characters of each paragraph in order.
Duplicate starts (e.g. a character name that appears multiple times) are handled
by matching occurrences in order.

Example:
  python3 scripts/zh-clear.py "source-files/Primary 3/3A/第四单元/13. 一块奶酪.md" \
    --starts "蚂蚁队长" "一只小蚂" "大家一听" "就在这时" "奶酪多诱" \
             "蚂蚁队长" '"休息一' "听到命令" '"大家分' "大家依旧" \
             "蚂蚁队长" "这时，奶" "小蚂蚁们" "大家又干"
"""

import re
import sys
import argparse


def remove_pinyin(lines):
    """Remove lines that are purely pinyin (alphabetic only)."""
    result = []
    for line in lines:
        stripped = line.strip()
        if stripped and re.match(r'^[a-zA-Z0-9]+$', stripped):
            continue
        result.append(line)
    return result


def remove_non_story(lines, args=None):
    """
    Remove non-story text by filtering individual lines.
    Only removes lines that are PURELY non-story (not mixed with story text).
    For mixed lines (e.g. story + author credit), the cleanup happens after joining.
    """
    cleaned = []

    for i, line in enumerate(lines):
        stripped = line.strip()

        # Skip bare page numbers (1-3 digits, nothing else)
        if stripped and re.match(r'^\d{1,3}$', stripped):
            continue

        # Skip section markers like 'lSo ①*' or '①*' on their own
        if stripped and re.match(r'^[①②③④⑤*]+$', stripped):
            continue
        if stripped and re.match(r'^[a-zA-Z]+.*[①②③*]$', stripped):
            continue

        # Skip lines that are ONLY lesson instructions (no story text)
        if re.match(r'^(朗读课文|默读课文|说说|想一想|背诵|抄写|认读|读一读|写一写|结合|交流|分角色|有感情|选\s*做)', stripped):
            continue

        # Skip vocab list: single CJK char followed by pinyin on next line
        # DISABLED — too aggressive for PDF-extracted text where story characters
        # also appear on their own lines. Use --strip-vocab to enable.
        if args and getattr(args, 'strip_vocab', False):
            if re.match(r'^[一-鿿]$', stripped):
                if i + 1 < len(lines) and re.match(r'^[a-zA-Z0-9]+$', lines[i + 1].strip()):
                    continue

            # Skip multi-char vocab lists: line of isolated CJK chars (no grammar particles)
            if re.match(r'^[一-鿿\s]+$', stripped) and len(stripped.replace(' ', '')) <= 20:
                continue

        cleaned.append(line)

    return cleaned


def clean_story_artifacts(text):
    """
    Remove metadata artifacts embedded in story text after joining.
    These are patterns that get mixed into paragraphs during PDF extraction.
    """
    # Remove author credits: "本文作者XXX，选作课文时有改动。"
    text = re.sub(r'本文作者[^。]+。?', '', text)
    text = re.sub(r'选作课文时有改动[。]?', '', text)

    # Remove lesson numbers like "①" or "①*" embedded in text
    text = re.sub(r'[①②③④⑤]\*?', '', text)

    # Remove page numbers embedded mid-text
    text = re.sub(r'\b\d{1,3}\b', '', text)

    # Clean up double spaces and trailing spaces
    text = re.sub(r'  +', '', text)
    text = text.strip()

    return text


def join_paragraphs(lines):
    """Join consecutive non-blank lines into paragraphs, preserving blank lines."""
    result = []
    current = []
    for line in lines:
        stripped = line.strip()
        if stripped == '':
            if current:
                result.append(''.join(current))
                current = []
            result.append('')
        else:
            current.append(stripped)
    if current:
        result.append(''.join(current))
    return result


def split_by_starts(text, starts):
    """
    Split text into paragraphs by start phrases.
    Inserts \\n\\n before each start phrase, in order.
    For duplicate starts, matches the Nth occurrence where N = how many
    times this same start has appeared so far (1-indexed).
    """
    # Build a list of (position, start_text) to insert breaks at
    breaks = []
    occurrence_count = {}  # track how many times each start has been seen

    for start in starts:
        occurrence_count[start] = occurrence_count.get(start, 0) + 1
        nth = occurrence_count[start]

        # Find the nth occurrence of this start in the text
        escaped = re.escape(start)
        pos = -1
        search_from = 0
        found = 0
        while found < nth:
            m = re.search(escaped, text[search_from:])
            if not m:
                break
            pos = search_from + m.start()
            search_from = pos + len(start)
            found += 1

        if pos >= 0:
            breaks.append((pos, start))

    # Sort breaks by position (they should already be in order, but be safe)
    breaks.sort(key=lambda x: x[0])

    # Insert \\n\\n before each break point, working backwards
    for pos, _ in reversed(breaks):
        if pos > 0:
            text = text[:pos] + '\n\n' + text[pos:]

    # Split into paragraphs and clean up
    paragraphs = [p.strip() for p in text.split('\n\n') if p.strip()]
    return paragraphs


def clean_spaces(text):
    """Remove extra spaces inserted by PDF extraction between Chinese characters."""
    # Fix patterns like "注 意 啦" → "注意啦"
    # Chinese char followed by space followed by Chinese char
    text = re.sub(r'([一-鿿]) ([一-鿿])', r'\1\2', text)
    # Fix "— " → "—"
    text = re.sub(r'— ', '—', text)
    text = re.sub(r' —', '—', text)
    return text


def main():
    parser = argparse.ArgumentParser(description='Clean Chinese lesson files from PDFs')
    parser.add_argument('file', help='Path to the .md file to clean')
    parser.add_argument('--starts', nargs='*', default=[],
                        help='First characters of each paragraph (in order)')
    parser.add_argument('--no-split', action='store_true',
                        help='Skip paragraph splitting (only clean pinyin + join lines)')
    parser.add_argument('--strip-vocab', action='store_true',
                        help='Also strip single-char vocab entries (disabled by default — may remove story text)')
    args = parser.parse_args()

    with open(args.file, 'r') as f:
        lines = f.readlines()

    # Step 1: Remove non-story sections
    lines = remove_non_story(lines, args)

    # Step 2: Remove pinyin lines
    lines = remove_pinyin(lines)

    # Step 3: Join lines into paragraphs
    joined = join_paragraphs(lines)

    # Step 4: Split by paragraph starts (only for non-blank first line)
    if args.starts and not args.no_split:
        # Find the story text (skip title + blank line)
        story_start = 0
        if len(joined) >= 2 and joined[0].strip() and joined[1] == '':
            story_start = 2  # title + blank line

        # Combine all story paragraphs into one block for splitting
        story_text = '\n'.join(joined[story_start:])

        # Split into individual paragraphs
        split_paras = split_by_starts(story_text, args.starts)

        # Rebuild: title + blank + split paragraphs with blank lines
        result = joined[:story_start]  # title and initial blank
        for para in split_paras:
            para = clean_spaces(clean_story_artifacts(para))
            if result and result[-1] != '':
                result.append('')
            result.append(para)
        joined = result

    # Step 5: Clean spaces and artifacts in each paragraph
    else:
        joined = [clean_spaces(clean_story_artifacts(p)) if p.strip() else p for p in joined]

    # Write result
    with open(args.file, 'w') as f:
        f.write('\n'.join(joined) + '\n')

    print(f'✅ Cleaned: {args.file}')
    if args.starts:
        print(f'   {len(args.starts)} paragraphs split')


if __name__ == '__main__':
    main()
