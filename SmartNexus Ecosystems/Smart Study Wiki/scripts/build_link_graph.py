#!/usr/bin/env python3
"""
Build a wikilink graph from all .md files in the wiki directory.
Outputs:
  - data/link-graph.json: { "path/file.md": ["linked/file1.md", ...], ... }
  - Updates search-index.json with backlink info
"""
import os, json, re

WIKI_DIR = os.path.join(os.path.dirname(__file__), '..', 'wiki')
DATA_DIR = os.path.join(os.path.dirname(__file__), '..', 'data')

def find_files():
    """Collect all .md files with their paths relative to wiki/"""
    files = {}
    for root, dirs, names in os.walk(WIKI_DIR):
        for name in names:
            if name.endswith('.md'):
                full = os.path.join(root, name)
                rel = os.path.relpath(full, WIKI_DIR)
                files[rel] = {'title': name.replace('.md', ''), 'path': rel}
    return files

def extract_wikilinks(content):
    """Extract all [[wikilinks]] from content, returning list of targets"""
    links = re.findall(r'\[\[([^\]|]+?)(?:\|[^\]]+?)?\]\]', content)
    return [l.strip() for l in links]

def resolve_wikilink(link_text, all_files):
    """
    Resolve a wikilink target to an actual file path.
    Matches the JS resolveWikilink logic:
    1. Exact match on file name (without .md)
    2. Case-insensitive name match
    3. Match with .md appended
    """
    target_lower = link_text.lower().rstrip('.md')

    # Score each candidate
    best = None
    best_score = 0

    for fpath in all_files:
        fname = os.path.basename(fpath).replace('.md', '')
        fname_lower = fname.lower()
        fdir_lower = os.path.dirname(fpath).lower()

        score = 0
        # Exact case-sensitive name match
        if link_text == fname:
            score = 300
        elif link_text == fname + '.md':
            score = 290
        # Case-insensitive name match
        elif target_lower == fname_lower:
            score = 200
        elif target_lower == fname_lower + '.md':
            score = 190
        # Contains match in name
        elif target_lower in fname_lower:
            score = 100
        # Match in path
        elif target_lower in fpath.lower():
            score = 50
        # Partial: the link text appears at end of path
        elif fpath.lower().endswith('/' + target_lower.lower()):
            score = 150

        if score > best_score:
            best_score = score
            best = fpath

    return best if best_score >= 50 else None

def main():
    os.makedirs(DATA_DIR, exist_ok=True)

    all_files = find_files()
    print(f"Found {len(all_files)} .md files")

    # Build outgoing link graph
    link_graph = {}  # { "file.md": ["linked1.md", "linked2.md", ...] }
    broken_links = []  # [[source, target], ...]

    for rel_path in all_files:
        full_path = os.path.join(WIKI_DIR, rel_path)
        try:
            with open(full_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except:
            continue

        raw_links = extract_wikilinks(content)
        resolved = []

        for link in raw_links:
            target = resolve_wikilink(link, all_files)
            if target and target != rel_path:  # don't self-link
                resolved.append(target)
            elif not target:
                broken_links.append([rel_path, link])

        if resolved:
            link_graph[rel_path] = list(set(resolved))  # dedupe

    # Compute incoming links (backlinks)
    backlinks = {}  # { "file.md": ["source1.md", "source2.md", ...] }
    for source, targets in link_graph.items():
        for target in targets:
            if target not in backlinks:
                backlinks[target] = []
            if source not in backlinks[target]:
                backlinks[target].append(source)

    # Build final structure
    graph_output = {
        'outgoing': link_graph,
        'backlinks': backlinks,
        'broken': broken_links,
        'totalFiles': len(all_files),
        'totalLinks': sum(len(v) for v in link_graph.values()),
        'filesWithBacklinks': len(backlinks)
    }

    out_path = os.path.join(DATA_DIR, 'link-graph.json')
    with open(out_path, 'w', encoding='utf-8') as f:
        json.dump(graph_output, f, ensure_ascii=False, indent=2)

    print(f"Link graph: {graph_output['totalLinks']} total links across {len(link_graph)} files")
    print(f"Backlinks: {graph_output['filesWithBacklinks']} files have incoming links")
    print(f"Broken links: {len(broken_links)}")
    if broken_links:
        print("  First 20 broken links:")
        for src, tgt in broken_links[:20]:
            print(f"    [{src}] → [[{tgt}]]")

    # Also output broken links for review
    broken_path = os.path.join(DATA_DIR, 'broken-links.json')
    with open(broken_path, 'w', encoding='utf-8') as f:
        json.dump(broken_links, f, ensure_ascii=False, indent=2)

    print(f"\nWritten: {out_path}")
    print(f"Written: {broken_path}")

if __name__ == '__main__':
    main()
