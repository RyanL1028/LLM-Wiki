#!/usr/bin/env python3
"""Parse wiki/Concepts/*.md into web/data.js for the study app."""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONCEPTS_DIR = ROOT / "wiki" / "Concepts"
OUTPUT = ROOT / "web" / "data.js"

SUBJECT_MAP = {
    "igcse-computer-science": "IGCSE Computer Science",
    "computer-science": "IGCSE Computer Science",
    "chemistry": "Chemistry",
    "physics": "Physics",
    "humanitarian": "MUN & Humanitarian",
    "international": "MUN & Humanitarian",
    "law": "MUN & Humanitarian",
    "conflict": "MUN & Humanitarian",
    "diplomacy": "MUN & Humanitarian",
    "rights": "MUN & Humanitarian",
    "relations": "MUN & Humanitarian",
    "negotiation": "MUN & Humanitarian",
    "ngo": "MUN & Humanitarian",
    "un": "MUN & Humanitarian",
}

def strip_wikilinks(text):
    """Convert [[Page|alias]] or [[Page]] to just the alias/page name."""
    return re.sub(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]", r"\1", text)

def parse_md(filepath):
    with open(filepath, encoding="utf-8") as f:
        content = f.read()

    title_match = re.search(r"^# (.+)", content, re.MULTILINE)
    summary_match = re.search(r"\*\*Summary\*\*:\s*(.+)", content)
    tags_match = re.search(r"\*\*Tags\*\*:\s*(.+)", content)

    if not title_match:
        return None

    title = title_match.group(1).strip()
    summary = strip_wikilinks(summary_match.group(1).strip()) if summary_match else ""
    tags_str = tags_match.group(1).strip() if tags_match else ""
    tags = [t.strip("#") for t in tags_str.split() if t.startswith("#")]

    # Skip hub pages
    if "hub" in tags:
        return None

    # Determine subject
    subject = "General"
    for tag in tags:
        tag_lower = tag.lower()
        if tag_lower in SUBJECT_MAP:
            subject = SUBJECT_MAP[tag_lower]
            break

    return {
        "id": title.lower().replace(" ", "-").replace("'", ""),
        "title": title,
        "summary": summary,
        "tags": tags,
        "subject": subject,
    }

def main():
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    cards = []

    for md_file in sorted(CONCEPTS_DIR.glob("*.md")):
        card = parse_md(md_file)
        if card:
            cards.append(card)

    js = f"const FLASHCARD_DATA = {json.dumps(cards, indent=2, ensure_ascii=False)};\n"
    OUTPUT.write_text(js, encoding="utf-8")
    print(f"Wrote {len(cards)} cards to {OUTPUT}")

if __name__ == "__main__":
    main()
