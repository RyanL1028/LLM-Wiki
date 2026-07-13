#!/usr/bin/env python3
"""Add Obsidian-style [[wikilinks]] to ingested science book pages.

Scans book pages for key terms that match existing wiki concept pages
and wraps the first occurrence of each term in [[wikilinks]].
"""
import os, re, sys

BOOK_DIR = os.path.join(os.path.dirname(__file__), 'wiki', 'Science Student Book 7')
CONCEPTS_DIR = os.path.join(os.path.dirname(__file__), 'wiki', 'Concepts')

# Build concept name → page path mapping (stem, no .md)
concept_names = {}
for f in sorted(os.listdir(CONCEPTS_DIR)):
    if f.endswith('.md'):
        name = f[:-3]  # remove .md
        concept_names[name.lower()] = name

# Prioritize science-relevant concepts; exclude CS terms that match common words
SCIENCE_CONCEPTS = [
    # Chemistry
    'Atoms', 'Elements', 'Compounds', 'Molecules', 'Mixtures',
    'Chemical Reactions', 'Chemical Formulae', 'Chemical Symbols',
    'Periodic Table', 'Acids', 'Alkalis', 'Neutralization Reactions',
    'Combustion', 'Oxidation', 'Thermal Decomposition', 'Displacement Reactions',
    'Exothermic Reactions', 'Endothermic Reactions', 'Activation Energy',
    'Catalysts', 'Reactivity Series', 'Reactants', 'Products',
    'Word Equations', 'Changes of State', 'Physical Changes',
    'Equilibrium', 'Fuels', 'Fossil Fuels', 'Biofuels', 'Renewable Fuels',
    'Energy', 'Chemistry Fundamentals',
    # Physics
    'Forces', 'Forces Fundamentals Hub', 'Gravity', 'Gravitational Force',
    'Friction', 'Drag Force', 'Mass and Weight', 'Weight',
    'Balanced and Unbalanced Forces', 'Resultant Force',
    'Contact and Non-Contact Forces', 'Interaction Pairs',
    'Action-Reaction', "Newton's Laws",
    'Sound', 'Light', 'Motion', 'Speed', 'Pressure',
    'Gravitational Field Strength',
    # Biology
    'Cells', 'Photosynthesis', 'Respiration', 'Diffusion', 'Osmosis',
]

SKIP_WORDS = {
    # CS concepts that match common English words → would create false positives
    'core', 'field', 'record', 'table', 'string', 'function', 'variable',
    'constant', 'procedure', 'parameter', 'register', 'standards',
    'selection', 'sequence', 'iteration', 'counting', 'totalling',
    'array', 'database', 'integer', 'boolean', 'selection',
    'robotics', 'robot', 'sensor', 'actuator', 'operating system',
    'application software', 'system software', 'firmware', 'interpreter',
    'compiler', 'assembler', 'high-level language', 'low-level language',
    'algorithm', 'decomposition', 'pseudocode', 'flowchart',
    'encryption', 'symmetric encryption', 'asymmetric encryption',
    'malware', 'phishing', 'firewall', 'proxy server', 'ddos attack',
    'cyber security', 'internet', 'url', 'dns', 'ip address',
    'mac address', 'http', 'https', 'ftp', 'ssl-tls',
    'packet switching', 'data packet', 'nic', 'web browser',
    'world wide web', 'cookie', 'html', 'css',
    'cpu', 'alu', 'mar', 'mdr', 'ram', 'rom', 'hdd', 'ssd',
    'usb', 'optical storage', 'virtual memory', 'cloud storage',
    'von neumann architecture', 'fetch-execute cycle', 'program counter',
    'control unit', 'register', 'clock speed', 'core', 'cache memory',
    'input device', 'output device', 'ide',
    'binary', 'denary', 'hexadecimal', 'ascii', 'unicode',
    'binary addition', 'overflow error', 'logical shift', "two's complement",
    'file size calculation', 'data compression', 'lossy compression',
    'lossless compression', 'sound sampling', 'sample rate', 'colour depth',
    'bitmap image', 'file handling', 'data type', 'string manipulation',
    'nested statement', 'subroutine', 'library routine',
    'validation check', 'verification', 'trace table', 'test data',
    'dry run', 'structure diagram', 'logic gate', 'logic circuit',
    'logic expression', 'truth table', 'and gate', 'or gate', 'not gate',
    'nand gate', 'nor gate', 'xor gate', 'boolean logic',
    'sql', 'select statement', 'from clause', 'where clause',
    'order by clause', 'sum function', 'count function',
    'primary key', 'foreign key', 'normalisation',
    'automated system', 'expert system', 'artificial intelligence',
    'machine learning', 'maintainable program',
    'program development life cycle', 'quality assurance',
    'linear search', 'binary search', 'bubble sort',
    'pre-condition loop', 'post-condition loop', 'count-controlled loop',
    'simplex transmission', 'half-duplex transmission', 'full-duplex transmission',
    'serial transmission', 'parallel transmission',
    'echo check', 'checksum', 'parity check', 'automatic repeat request (arq)',
    '2d array', 'file size calculation', 'digital currency',
    'surveys', 'data collection',
    # MUN/humanitarian concepts - less relevant for science book
    'humanitarian aid', 'aid coordination', 'aid delivery', 'conflict zones',
    'conflict resolution', 'diplomacy', 'negotiation', 'treaties',
    'international law', 'international humanitarian law', 'human rights',
    'geneva conventions', 'war crimes', 'refugees', 'idps', 'asylum',
    'ngos', 'un agencies', 'un clusters', 'logistics', 'supply chains',
    'medical aid', 'medical supplies', 'pharmaceuticals', 'healthcare in conflict',
    'global health', 'needs assessment', 'livelihoods', 'restoration',
    'rights protection', 'international organizations', 'international relations',
    'guiding principles', 'local economies', 'cash transfers',
    'climate change', 'fossil fuels',
    'needs assessment in mun and humanitarian aid', 'acc', 'cir',
}

# Build final concept set: science concepts minus skip words
concepts_to_link = [
    c for c in SCIENCE_CONCEPTS
    if c.lower() not in SKIP_WORDS
]

# Add any science concepts we missed
extra_science = [
    'Sound', 'Light', 'Speed', 'Pressure', 'Diffusion', 'Osmosis',
    'Photosynthesis', 'Respiration',
]
for c in extra_science:
    if c not in concepts_to_link:
        concepts_to_link.append(c)

# Sort longest first so we match longer terms before shorter
concepts_to_link.sort(key=lambda x: -len(x))

# Build regex patterns for each concept (word-boundary-aware)
def build_pattern(name):
    escaped = re.escape(name)
    return re.compile(r'\b' + escaped + r'\b', re.IGNORECASE)

concept_patterns = [(name, build_pattern(name)) for name in concepts_to_link]


def add_wikilinks_to_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Split into frontmatter and body
    parts = content.split('---\n', 2)
    if len(parts) < 3:
        return  # no frontmatter

    frontmatter = parts[0] + '---\n' + parts[1] + '---\n'
    body = parts[2]

    # Track which terms have been linked
    linked_terms = set()
    changes = 0

    for name, pattern in concept_patterns:
        if name.lower() in linked_terms:
            continue

        # Search for term in body, outside of existing links and headers
        for m in pattern.finditer(body):
            start, end = m.start(), m.end()
            matched_text = m.group(0)

            # Skip if inside an existing wikilink or markdown link
            before = body[max(0, start-50):start]
            if '[[' in before and ']]' not in before:
                continue
            if '](' in before and ')' not in before[max(0, start-200):start]:
                continue

            # Skip if inside a markdown heading (## Title)
            line_start = body.rfind('\n', 0, start) + 1
            line = body[line_start:body.find('\n', end)]
            if line.strip().startswith('#'):
                continue

            # Skip if inside an HTML tag
            if '<' in before and '>' not in before:
                continue

            # Skip if inside an image alt text ![alt](url)
            img_start = body.rfind('![', 0, start)
            if img_start != -1:
                img_end = body.find('](', img_start)
                if img_end != -1 and img_end > start:
                    continue

            # Check that end is not in the middle of ]] or )
            after_snip = body[end:end+5]
            if after_snip.startswith(']]') or after_snip.startswith(')'):
                continue

            # Replace with wikilink (use original casing from matched text)
            wikilink = f'[[{name}]]'
            body = body[:start] + wikilink + body[end:]
            linked_terms.add(name.lower())
            changes += 1
            break  # only first occurrence per page

    if changes > 0:
        new_content = frontmatter + body
        with open(filepath, 'w') as f:
            f.write(new_content)
        return changes
    return 0


def main():
    total_changes = 0
    files_changed = 0

    for root, dirs, files in os.walk(BOOK_DIR):
        for f in files:
            if not f.endswith('.md'):
                continue
            # Skip images directory
            if 'images' in root:
                continue
            filepath = os.path.join(root, f)
            try:
                n = add_wikilinks_to_file(filepath)
                if n > 0:
                    files_changed += 1
                    total_changes += n
                    rel = os.path.relpath(filepath, BOOK_DIR)
                    print(f'  {rel}: {n} wikilinks added')
            except Exception as e:
                print(f'  ERROR {filepath}: {e}', file=sys.stderr)

    print(f'\nDone: {total_changes} wikilinks added across {files_changed} files')

if __name__ == '__main__':
    main()
