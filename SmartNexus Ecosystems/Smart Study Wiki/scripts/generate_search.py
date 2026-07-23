#!/usr/bin/env python3
"""Generate search-index.json with all page metadata for client-side search."""
import json, os, re

wiki_dir = os.path.join(os.path.dirname(__file__), '..', 'wiki')
out_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'search-index.json')

pages = []

for root, dirs, files in os.walk(wiki_dir):
    dirs[:] = [d for d in dirs if d != 'images']
    for f in files:
        if not f.endswith('.md'):
            continue
        # Skip private section index files (00- through 07-)
        if f.startswith(('00-','01-','02-','03-','04-','05-','06-','07-')):
            continue
        path = os.path.join(root, f)
        rel = os.path.relpath(path, wiki_dir)
        try:
            with open(path, 'r') as fh:
                content = fh.read(800)
        except:
            continue

        title = ''
        summary = ''
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

        pages.append({
            'title': title or f.replace('.md', ''),
            'summary': summary[:120] if summary else '',
            'tags': tags,
            'path': rel,
        })

with open(out_path, 'w') as f:
    json.dump(pages, f, separators=(',', ':'))

print(f'Generated search-index.json: {len(pages)} pages')
