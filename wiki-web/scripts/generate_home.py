#!/usr/bin/env python3
"""Scan wiki markdown files and generate home.json for homepage sections."""
import json, os, re
from datetime import datetime

wiki_dir = os.path.join(os.path.dirname(__file__), '..', 'wiki')

all_pages = []

for root, dirs, files in os.walk(wiki_dir):
    for f in files:
        if not f.endswith('.md'):
            continue
        path = os.path.join(root, f)
        rel = os.path.relpath(path, wiki_dir)
        try:
            with open(path, 'r') as fh:
                content = fh.read(600)
        except:
            continue

        # Extract metadata
        title = ''
        summary = ''
        created = ''
        updated = ''
        tags = []

        lines = content.split('\n')
        for line in lines[:10]:
            line = line.strip()
            if line.startswith('# ') and not title:
                title = line[2:]
            elif line.startswith('**Summary**:'):
                m = re.search(r'\*\*Summary\*\*:\s*(.+)', line)
                if m: summary = m.group(1)
            elif line.startswith('**Tags**:'):
                m = re.search(r'\*\*Tags\*\*:\s*(.+)', line)
                if m: tags = [t.strip().lstrip('#') for t in m.group(1).split() if t.strip().startswith('#')]
            elif line.startswith('**Created**:'):
                m = re.search(r'\*\*Created\*\*:\s*(\S+)', line)
                if m: created = m.group(1)
            elif line.startswith('**Last Updated**:'):
                m = re.search(r'\*\*Last Updated\*\*:\s*(\S+)', line)
                if m: updated = m.group(1)

        all_pages.append({
            'path': rel,
            'title': title or f.replace('.md', ''),
            'summary': summary,
            'created': created,
            'updated': updated or created,
            'tags': tags,
        })

# Sort by created date descending
all_pages.sort(key=lambda p: p['created'], reverse=True)

# Latest concepts (most recently created, limit 12)
latest = [p for p in all_pages if p['created']][:12]

# Featured: pick notable index pages and top-level pages
featured_paths = {'CS-Index.md', 'Chem-Index.md', 'Bio-Index.md', 'Phys-Index.md', 'MUN-Index.md', 'Sci-Index.md', '00-Home.md', '01-Models.md', '07-Concepts.md', '03-Papers.md', '06-Projects.md'}
featured = [p for p in all_pages if p['path'] in featured_paths]
# Sort featured in a sensible order
featured_order = ['00-Home.md', '07-Concepts.md', 'CS-Index.md', 'Chem-Index.md', 'Bio-Index.md', 'Phys-Index.md', 'MUN-Index.md', 'Sci-Index.md', '01-Models.md', '03-Papers.md', '06-Projects.md']
featured.sort(key=lambda p: featured_order.index(p['path']) if p['path'] in featured_order else 99)

# Browse by subject
subjects = [
    {'name': 'Computer Science', 'icon': '💻', 'link': 'wiki/CS-Index.md', 'count': sum(1 for p in all_pages if 'computer-science' in (p.get('tags') or []))},
    {'name': 'Biology', 'icon': '🧬', 'link': 'wiki/Bio-Index.md', 'count': sum(1 for p in all_pages if 'biology' in (p.get('tags') or []))},
    {'name': 'Chemistry', 'icon': '⚗️', 'link': 'wiki/Chem-Index.md', 'count': sum(1 for p in all_pages if 'chemistry' in (p.get('tags') or []))},
    {'name': 'Physics', 'icon': '⚡', 'link': 'wiki/Phys-Index.md', 'count': sum(1 for p in all_pages if 'physics' in (p.get('tags') or []))},
    {'name': 'Basic Science', 'icon': '🔬', 'link': 'wiki/Sci-Index.md', 'count': sum(1 for p in all_pages if 'oxford-science' in (p.get('tags') or []))},
    {'name': 'MUN & Humanities', 'icon': '🌐', 'link': 'wiki/MUN-Index.md', 'count': sum(1 for p in all_pages if any(t in (p.get('tags') or []) for t in ['mun', 'humanitarian', 'international', 'aid', 'conflict', 'diplomacy', 'ngo', 'refugees', 'un', 'law', 'rights', 'negotiation']))},
    {'name': 'AI & Models', 'icon': '🤖', 'link': 'wiki/01-Models.md', 'count': sum(1 for p in all_pages if 'ai' in (p.get('tags') or []) or 'models' in (p.get('tags') or []))},
]

# Total counts
total_pages = len(all_pages)

home = {
    'totalPages': total_pages,
    'latest': latest,
    'featured': featured,
    'subjects': subjects,
}

with open(os.path.join(os.path.dirname(__file__), '..', 'data', 'home.json'), 'w') as f:
    json.dump(home, f, indent=2)

print(f'Generated home.json: {total_pages} pages, {len(latest)} latest, {len(featured)} featured, {len(subjects)} subjects')
