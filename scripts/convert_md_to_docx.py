#!/usr/bin/env python3
"""Convert 0921-structure-analysis.md → properly formatted DOCX with real tables & bold."""

import re
from pathlib import Path
from docx import Document
from docx.shared import Inches, Pt, Cm, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn, nsdecls
from docx.oxml import parse_xml

ROOT = Path(__file__).resolve().parent.parent
INPUT = ROOT / 'web' / 'JSON' / '0921-structure-analysis.md'
OUTPUT = ROOT / 'web' / 'JSON' / '0921-structure-analysis.docx'

doc = Document()

# ── page setup ──
for section in doc.sections:
    section.top_margin = Cm(1.5)
    section.bottom_margin = Cm(1.5)
    section.left_margin = Cm(1.8)
    section.right_margin = Cm(1.8)

# ── styles ──
style = doc.styles['Normal']
style.font.name = 'Calibri'
style.font.size = Pt(11)
style.paragraph_format.space_after = Pt(6)
style.paragraph_format.space_before = Pt(0)

for level in range(1, 4):
    h = doc.styles[f'Heading {level}']
    h.font.name = 'Calibri'
    if level == 1:
        h.font.size = Pt(20)
        h.font.bold = True
        h.font.color.rgb = RGBColor(0x1a, 0x1a, 0x1a)
    elif level == 2:
        h.font.size = Pt(15)
        h.font.bold = True
        h.font.color.rgb = RGBColor(0x2b, 0x2b, 0x2b)
    else:
        h.font.size = Pt(12.5)
        h.font.bold = True
        h.font.color.rgb = RGBColor(0x3a, 0x3a, 0x3a)
    h.paragraph_format.space_before = Pt(14 if level == 2 else 10)
    h.paragraph_format.space_after = Pt(4)


def set_cell_shading(cell, color):
    """Set cell background color."""
    shading = parse_xml(f'<w:shd {nsdecls("w")} w:fill="{color}"/>')
    cell._tc.get_or_add_tcPr().append(shading)


def add_styled_table(headers, rows, col_widths=None):
    """Add a properly styled table with header row."""
    table = doc.add_table(rows=1 + len(rows), cols=len(headers))
    table.style = 'Table Grid'
    table.alignment = WD_TABLE_ALIGNMENT.CENTER

    # Header row
    for i, h in enumerate(headers):
        cell = table.rows[0].cells[i]
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        run = p.add_run(h)
        run.bold = True
        run.font.size = Pt(10)
        run.font.name = 'Calibri'
        run.font.color.rgb = RGBColor(0xFF, 0xFF, 0xFF)
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.space_before = Pt(0)
        set_cell_shading(cell, '2B579A')

    # Data rows
    for r, row in enumerate(rows):
        for c, val in enumerate(row):
            cell = table.rows[r + 1].cells[c]
            p = cell.paragraphs[0]
            p.alignment = WD_ALIGN_PARAGRAPH.LEFT if c == 0 else WD_ALIGN_PARAGRAPH.CENTER
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.space_before = Pt(0)
            # Parse inline bold in cell
            parts = re.split(r'(\*\*.*?\*\*)', str(val))
            for part in parts:
                if part.startswith('**') and part.endswith('**'):
                    run = p.add_run(part[2:-2])
                    run.bold = True
                    run.font.size = Pt(10)
                    run.font.name = 'Calibri'
                else:
                    run = p.add_run(part)
                    run.font.size = Pt(10)
                    run.font.name = 'Calibri'
            # Alternate row shading
            if r % 2 == 1:
                set_cell_shading(cell, 'F2F6FC')

    doc.add_paragraph()  # space after table
    return table


def add_rich_paragraph(text, style_name='Normal', bold_prefix=False):
    """Add a paragraph with inline **bold**, *italic*, and `code` formatting."""
    # Skip empty
    if not text.strip():
        return

    p = doc.add_paragraph()
    p.style = doc.styles[style_name]

    # Split on inline formatting tokens
    # Pattern: **bold**, *italic*, `code`
    pattern = r'(\*\*.*?\*\*|\*[^*].*?[^*]\*|`[^`]+`)'
    parts = re.split(pattern, text)
    for part in parts:
        if not part:
            continue
        if part.startswith('**') and part.endswith('**'):
            run = p.add_run(part[2:-2])
            run.bold = True
        elif part.startswith('*') and part.endswith('*') and not part.startswith('**'):
            run = p.add_run(part[1:-1])
            run.italic = True
        elif part.startswith('`') and part.endswith('`'):
            run = p.add_run(part[1:-1])
            run.font.name = 'Courier New'
            run.font.size = Pt(10)
        else:
            # Handle escaped chars for WhatsApp compatibility
            clean = part.replace('\\*', '*')
            run = p.add_run(clean)

    return p


def process_markdown(md_text):
    """Parse markdown and build DOCX content."""
    lines = md_text.split('\n')
    i = 0

    # Buffer for table detection
    pending_table_lines = []
    in_table = False

    # Buffer for list items
    pending_list_items = []

    def flush_list():
        nonlocal pending_list_items
        if pending_list_items:
            for item in pending_list_items:
                p = doc.add_paragraph()
                p.style = doc.styles['List Bullet']
                # item is (text, indent_level)
                text = item
                pattern = r'(\*\*.*?\*\*|\*[^*].*?[^*]\*|`[^`]+`)'
                parts = re.split(pattern, text)
                for part in parts:
                    if not part:
                        continue
                    if part.startswith('**') and part.endswith('**'):
                        run = p.add_run(part[2:-2])
                        run.bold = True
                    elif part.startswith('*') and part.endswith('*') and not part.startswith('**'):
                        run = p.add_run(part[1:-1])
                        run.italic = True
                    elif part.startswith('`') and part.endswith('`'):
                        run = p.add_run(part[1:-1])
                        run.font.name = 'Courier New'
                        run.font.size = Pt(10)
                    else:
                        run = p.add_run(part)
            pending_list_items = []

    def flush_table():
        nonlocal pending_table_lines, in_table
        if pending_table_lines:
            # Parse markdown table
            header_line = pending_table_lines[0]
            sep_line = pending_table_lines[1] if len(pending_table_lines) > 1 else ''
            data_lines = pending_table_lines[2:] if len(pending_table_lines) > 2 else []

            # Parse cells from each row
            def parse_row(line):
                cells = [c.strip() for c in line.split('|')]
                # Remove empty first/last from leading/trailing |
                if cells and cells[0] == '':
                    cells = cells[1:]
                if cells and cells[-1] == '':
                    cells = cells[:-1]
                return cells

            headers = parse_row(header_line)
            # Clean ** in headers for display
            display_headers = []
            for h in headers:
                h = h.replace('**', '')
                display_headers.append(h)

            rows = [parse_row(l) for l in data_lines]

            add_styled_table(display_headers, rows)
            pending_table_lines = []
            in_table = False

    def is_table_separator(line):
        """Check if line is a markdown table separator like |---|---|"""
        return bool(re.match(r'^\|?[\s]*[-:]+[\s|]*[-:|\s]+$', line.strip()))

    def is_table_row(line):
        """Check if line looks like a table row (starts and ends with |)"""
        s = line.strip()
        return s.startswith('|') and s.endswith('|')

    while i < len(lines):
        line = lines[i]
        stripped = line.strip()

        # Check for table rows
        if is_table_row(stripped) and not in_table:
            flush_list()
            pending_table_lines = [stripped]
            in_table = True
            i += 1
            continue

        if in_table:
            if is_table_separator(stripped):
                pending_table_lines.append(stripped)
            elif is_table_row(stripped):
                pending_table_lines.append(stripped)
            else:
                flush_table()
                continue  # re-process this line
            i += 1
            continue

        # H1
        if stripped.startswith('# ') and not stripped.startswith('## '):
            flush_list()
            text = stripped[2:]
            # Clean bold markers from heading
            text = text.replace('**', '')
            doc.add_heading(text, level=1)
            i += 1
            continue

        # H2
        if stripped.startswith('## ') and not stripped.startswith('### '):
            flush_list()
            text = stripped[3:]
            text = text.replace('**', '')
            doc.add_heading(text, level=2)
            i += 1
            continue

        # H3
        if stripped.startswith('### '):
            flush_list()
            text = stripped[4:]
            text = text.replace('**', '')
            doc.add_heading(text, level=3)
            i += 1
            continue

        # Horizontal rule — add small spacer
        if stripped == '---':
            flush_list()
            p = doc.add_paragraph()
            p.paragraph_format.space_before = Pt(4)
            p.paragraph_format.space_after = Pt(4)
            # Thin line via bottom border
            pPr = p._p.get_or_add_pPr()
            pBdr = parse_xml(
                f'<w:pBdr {nsdecls("w")}>'
                f'<w:bottom w:val="single" w:sz="4" w:space="4" w:color="CCCCCC"/>'
                f'</w:pBdr>'
            )
            pPr.append(pBdr)
            i += 1
            continue

        # Bullet list items
        if re.match(r'^-\s+', stripped):
            text = re.sub(r'^-\s+', '', stripped)
            pending_list_items.append(text)
            i += 1
            continue

        # Numbered list items
        if re.match(r'^\d+\.\s+', stripped):
            flush_list()
            text = re.sub(r'^\d+\.\s+', '', stripped)
            p = doc.add_paragraph()
            p.style = doc.styles['List Number']
            pattern = r'(\*\*.*?\*\*|\*[^*].*?[^*]\*|`[^`]+`)'
            parts = re.split(pattern, text)
            for part in parts:
                if not part:
                    continue
                if part.startswith('**') and part.endswith('**'):
                    run = p.add_run(part[2:-2])
                    run.bold = True
                elif part.startswith('*') and part.endswith('*') and not part.startswith('**'):
                    run = p.add_run(part[1:-1])
                    run.italic = True
                elif part.startswith('`') and part.endswith('`'):
                    run = p.add_run(part[1:-1])
                    run.font.name = 'Courier New'
                    run.font.size = Pt(10)
                else:
                    run = p.add_run(part)
            i += 1
            continue

        # Regular paragraph (with inline formatting)
        if stripped:
            flush_list()
            add_rich_paragraph(stripped)
        else:
            # Empty line — flush list and add spacing
            if pending_list_items:
                pass  # keep collecting until a non-list line
            else:
                pass  # skip empty lines between paragraphs

        i += 1

    # Flush remaining content
    flush_list()
    flush_table()


# ── read markdown ──
with open(INPUT, 'r') as f:
    md = f.read()

# Remove the "by Ryan and ClaudeCode" line — keep it clean for WhatsApp
md = re.sub(r'^- by Ryan and ClaudeCode\s*\n', '', md, flags=re.MULTILINE)

process_markdown(md)

# ── add footer note ──
p = doc.add_paragraph()
p.alignment = WD_ALIGN_PARAGRAPH.CENTER
run = p.add_run('— Generated by Ryan & ClaudeCode —')
run.font.size = Pt(9)
run.font.color.rgb = RGBColor(0x99, 0x99, 0x99)
run.italic = True

# ── save ──
doc.save(OUTPUT)
print(f"✓ Saved to {OUTPUT}")
