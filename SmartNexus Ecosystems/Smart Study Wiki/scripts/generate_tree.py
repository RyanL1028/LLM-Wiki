#!/usr/bin/env python3
"""Walk wiki directory and generate tree.json for sidebar navigation."""
import json, os

wiki_dir = os.path.join(os.path.dirname(__file__), '..', 'wiki')
out_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'tree.json')

SKIP_DIRS = {'images'}
SKIP_EXT = {'.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp', '.json'}
SKIP_PATTERNS = ('00-', '01-', '02-', '03-', '04-', '05-', '06-', '07-')

def build_tree(root_path, rel_path=''):
    """Recursively build tree for a directory."""
    full_path = os.path.join(root_path, rel_path) if rel_path else root_path
    children = []

    try:
        entries = sorted(os.listdir(full_path))
    except OSError:
        return children

    for entry in entries:
        if entry.startswith('.') or entry in SKIP_DIRS:
            continue
        if entry.startswith(SKIP_PATTERNS):
            continue

        entry_path = os.path.join(full_path, entry)
        entry_rel = os.path.join(rel_path, entry) if rel_path else entry

        if os.path.isdir(entry_path):
            sub_children = build_tree(root_path, entry_rel)
            if sub_children:
                children.append({
                    'name': entry,
                    'path': entry_rel,
                    'type': 'dir',
                    'children': sub_children,
                })
        elif os.path.isfile(entry_path):
            ext = os.path.splitext(entry)[1].lower()
            if ext in SKIP_EXT:
                continue
            children.append({
                'name': entry,
                'path': entry_rel,
                'type': 'file',
            })

    return children


def main():
    tree = {
        'name': 'wiki',
        'path': '.',
        'type': 'dir',
        'children': build_tree(wiki_dir),
    }

    with open(out_path, 'w') as f:
        json.dump(tree, f, separators=(',', ':'))

    total_files = count_files(tree)
    print(f'Generated tree.json: {total_files} entries')

def count_files(node):
    total = 0
    for child in node.get('children', []):
        if child['type'] == 'file':
            total += 1
        elif child['type'] == 'dir':
            total += count_files(child)
    return total

if __name__ == '__main__':
    main()
