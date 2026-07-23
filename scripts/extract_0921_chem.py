#!/usr/bin/env python3
"""
Extract 0921 Chemistry past papers & mark schemes → JS (exam-data.js format).
MS-DRIVEN: mark scheme provides clean question structure, QP provides context text.
"""

import fitz
import re
import json
import os
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parent.parent
QP_DIR = ROOT / "Papers" / "Past-Paper" / "0921-Chem"
MS_DIR = ROOT / "Papers" / "PP-Mark-Schemes"
OUT_JS = ROOT / "SmartNexus Ecosystems" / "Smart Study" / "data" / "chem-exam-data.js"
OUT_ANALYSIS = ROOT / "SmartNexus Ecosystems" / "Smart Study" / "JSON" / "0921-structure-analysis.md"
OUT_LINKAGE = ROOT / "SmartNexus Ecosystems" / "Smart Study" / "JSON" / "LINKAGE.md"

# ── helpers ──────────────────────────────────────────────

def clean(text):
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def identify_topic(text):
    """Identify the most likely topic from text."""
    text_lower = text.lower()
    topic_keywords = {
        "Atomic Structure & Periodic Table": [
            "proton", "neutron", "electron shell", "electronic configuration",
            "atomic number", "mass number", "isotope", "periodic table",
            "group", "period", "noble gas", "halogen", "alkali metal", "element"
        ],
        "Bonding & Structure": [
            "ionic bond", "covalent bond", "metallic bond", "giant covalent",
            "giant ionic", "giant metallic", "simple molecular", "macromolecule",
            "dot-and-cross", "alloy", "delocalised", "intermolecular",
            "diamond", "graphite", "silicon dioxide", "silica"
        ],
        "Stoichiometry & Moles": [
            "mole", "molar mass", "relative atomic mass", "relative formula mass",
            "empirical formula", "molecular formula", "percentage yield",
            "limiting reactant", "concentration", "dm3", "mol/dm", "avogadro",
            "calculate the mass", "calculate the volume", "reacting mass"
        ],
        "Electrolysis": [
            "electrolysis", "electrolyte", "electrode", "anode", "cathode",
            "molten", "brine", "electroplating", "electroplate", "electrolytic"
        ],
        "Energy Changes": [
            "exothermic", "endothermic", "enthalpy", "activation energy",
            "bond energy", "energy profile", "energy level diagram",
            "temperature change"
        ],
        "Rates of Reaction": [
            "rate of reaction", "collision theory", "surface area",
            "concentration affects", "temperature affects", "catalyst speeds",
            "faster reaction", "slower reaction", "successful collision"
        ],
        "Acids, Bases & Salts": [
            "acid", "base", "alkali", "neutralisation", "neutralization",
            "ph", "salt", "titration", "indicator", "strong acid", "weak acid",
            "carbonate reacts", "oxide reacts", "litmus", "universal indicator",
            "soluble", "insoluble", "precipitate", "amphoteric"
        ],
        "Organic Chemistry": [
            "alkane", "alkene", "alcohol", "carboxylic acid", "ester",
            "polymer", "polymerisation", "petroleum", "fractional distillation",
            "cracking", "homologous series", "functional group", "hydrocarbon",
            "ethanol", "fermentation", "crude oil", "poly(ethene)", "poly(propene)",
            "monomer", "addition", "condensation", "nylon",
            "ethene", "propene", "methane", "ethane", "methanol", "ethanoic acid",
            "biodiesel", "biofuel", "natural gas"
        ],
        "Metals & Reactivity": [
            "metal", "reactivity series", "displacement reaction",
            "reduction", "oxidation", "redox", "ore", "extraction",
            "blast furnace", "alloy", "rust", "corrosion", "sacrificial",
            "galvanising", "iron", "copper", "zinc", "aluminium", "magnesium",
            "steel", "stainless", "malleable", "ductile"
        ],
        "Air, Water & Environment": [
            "air pollution", "water pollution", "carbon dioxide", "sulfur dioxide",
            "nitrogen oxide", "greenhouse", "global warming", "acid rain",
            "catalytic converter", "flue gas", "desulfurisation", "ozone",
            "carbon monoxide", "particulate", "photochemical smog",
            "water treatment", "desalination", "chlorination"
        ],
        "Sulfur & Compounds": [
            "sulfur", "sulfuric acid", "contact process", "sulfur dioxide",
            "sulfate", "haber process", "ammonia", "fertiliser", "ammonium",
            "npk", "phosphate"
        ],
        "Chemical Analysis & Tests": [
            "test for", "flame test", "precipitate forms", "chromatography",
            "retention factor", "locating agent", "pure substance", "impurity",
            "silver nitrate", "barium chloride", "acidified potassium manganate",
            "lime water", "glowing splint", "lit splint", "squeaky pop"
        ]
    }
    scores = defaultdict(int)
    for topic, keywords in topic_keywords.items():
        for kw in keywords:
            if kw.lower() in text_lower:
                scores[topic] += 1
    if scores:
        best = max(scores, key=scores.get)
        if scores[best] >= 2:
            return best
    return "Mixed Chemistry"

def extract_qp_metadata(doc):
    """Extract code, session, duration, marks from QP cover."""
    text = doc[0].get_text()
    code_m = re.search(r'(06\d{2}/\d{2,3})|(09\d{2}/\d{2,3})', text)
    code = code_m.group(0) if code_m else "???"
    session = "Unknown"
    for pat, label in [(r'May/June\s+(\d{4})', "May/June"),
                        (r'October/November\s+(\d{4})', "October/November"),
                        (r'February/March\s+(\d{4})', "Feb/March")]:
        m = re.search(pat, text)
        if m: session = f"{label} {m.group(1)}"
    dur_m = re.search(r'(\d+)\s*hour[s]?\s*(\d*)\s*minute[s]?', text, re.IGNORECASE)
    duration = int(dur_m.group(1))*60 + (int(dur_m.group(2)) if dur_m and dur_m.group(2) else 0) if dur_m else 75
    marks_m = re.search(r'total mark[s]?\s*(?:for|is)\s*(?:this\s*paper\s*is\s*)?(\d+)', text, re.IGNORECASE)
    total_marks = int(marks_m.group(1)) if marks_m else 80
    return {"code": code, "session": session, "duration": duration, "totalMarks": total_marks}

def parse_ms_entries(doc):
    """Parse MS and return list of {question label, answer text, marks}."""
    entries = []
    for i in range(doc.page_count):
        text = doc[i].get_text()
        text = clean(text)
        if any(s in text for s in ['GENERIC MARKING PRINCIPLE', 'Science-Specific',
                                     'Calculation specific', 'Mark schemes should be',
                                     'Generic Marking', 'This mark scheme is published']):
            continue
        blocks = re.split(r'Question\s+Answer\s+Marks', text, flags=re.IGNORECASE)
        for block in blocks:
            pattern = re.compile(
                r'(\d{1,2})\(([a-z]+)\)\(?([ivx]+)\)?\s+(.*?)(?=\s*\d{1,2}\([a-z]+\)|$)',
                re.IGNORECASE
            )
            for m in pattern.findall(block):
                q_num, letter, roman, raw = m
                label = f"{q_num}({letter})" + (f"({roman})" if roman else "")
                answer = raw.strip()
                # Count all (n) patterns where n is 1-9 as marks
                paren_marks = re.findall(r'\((\d+)\)', answer)
                paren_marks = [int(m) for m in paren_marks if 1 <= int(m) <= 9]
                marks = sum(paren_marks)
                # Remove (n) marks from answer text
                answer = re.sub(r'\s*\(\d+\)', '', answer).strip()
                # If no parenthetical marks found, check trailing number
                if not paren_marks:
                    trailing = re.search(r'\s+(\d+)\s*$', answer)
                    if trailing:
                        m = int(trailing.group(1))
                        if 1 <= m <= 6:
                            marks = m
                            answer = re.sub(r'\s+\d+\s*$', '', answer).strip()
                answer = re.sub(r'^PMT\s*', '', answer).strip().replace('PMT', ' ')
                if answer and len(answer) > 1:
                    entries.append({"label": label, "answer": answer, "marks": marks})
    return entries

def extract_qp_full_text(doc):
    """Get all QP text (skip cover) as a single string."""
    parts = []
    for i in range(1, doc.page_count):
        t = clean(doc[i].get_text())
        parts.append(t)
    return '\n'.join(parts)

def build_question_structure(ms_entries, qp_text):
    """
    Build clean {questions: [{num, topic, parts: [{label, marks, type, question, answer}]}]}
    using MS as structural guide and QP text for question context.
    """
    # Group MS entries by question number
    q_groups = defaultdict(list)
    for entry in ms_entries:
        qn = int(re.match(r'(\d+)', entry['label']).group(1))
        q_groups[qn].append(entry)

    questions = []
    for q_num in sorted(q_groups.keys()):
        parts_entries = q_groups[q_num]

        # Try to find question stem from QP text
        q_texts = []
        # Look for text near this question number in QP
        qp_lines = qp_text.split('\n')
        for i, line in enumerate(qp_lines):
            stripped = line.strip()
            if stripped == str(q_num) and i > 0:
                # Check if this looks like a question number marker
                after = '\n'.join(qp_lines[i:min(i+4, len(qp_lines))])
                q_texts.append(after)

        # Determine topic from QP text near this question + MS answers
        ms_answer_text = ' '.join(p['answer'] for p in parts_entries)
        topic_text = ' '.join(q_texts[:2]) + ' ' + ms_answer_text if q_texts else ms_answer_text
        topic = identify_topic(topic_text)

        parts = []
        for entry in parts_entries:
            # Determine type
            ans_lower = entry['answer'].lower()
            ptype = "short"
            if entry['marks'] >= 3:
                ptype = "long"
            elif entry['marks'] == 2 and len(entry['answer']) > 60:
                ptype = "long"
            elif any(w in ans_lower for w in ['calculate', 'work out', 'determine']):
                ptype = "calculation"
            elif any(w in ans_lower for w in ['tick', 'box', 'circle']):
                ptype = "mcq"
            elif any(w in ans_lower for w in ['draw', 'label', 'complete the', 'sketch']):
                ptype = "diagram"

            # Extract question text snippet from QP
            q_text = ""
            # Search QP text for the label
            label_search = entry['label'].replace('(', r'\(').replace(')', r'\)')
            label_pattern = re.compile(re.escape(entry['label']), re.IGNORECASE)
            match = label_pattern.search(qp_text)
            if match:
                start = max(0, match.start() - 50)
                end = min(len(qp_text), match.end() + 300)
                q_text = qp_text[start:end].strip()[:350]

            parts.append({
                "label": entry['label'],
                "marks": entry['marks'],
                "type": ptype,
                "question": q_text,
                "answer": entry['answer']
            })

        questions.append({
            "num": q_num,
            "topic": topic,
            "parts": parts
        })

    return questions

def build_pairing_map():
    """Build map of QP stem → (QP path, MS path)."""
    pairs = []
    for f in os.listdir(QP_DIR):
        if not f.startswith('QP-') or not f.endswith('.pdf'):
            continue
        stem = f.replace('QP-', '').replace('.pdf', '')
        ms_path = MS_DIR / f"MS-{stem}.pdf"
        if ms_path.exists():
            pairs.append((QP_DIR / f, ms_path, stem))
    return pairs

# ── main ─────────────────────────────────────────────────

def main():
    print("=" * 60)
    print("Extracting 0921 Chemistry papers (MS-driven)...")
    print("=" * 60)

    pairs = build_pairing_map()
    print(f"\nPaired QPs + MSs: {len(pairs)}")

    papers = {}
    all_topics = Counter()
    papers_meta = []
    pairing_list = []

    for idx, (qp_path, ms_path, stem) in enumerate(pairs):
        print(f"  [{idx+1}/{len(pairs)}] {stem} ...", end=" ")

        try:
            doc_qp = fitz.open(str(qp_path))
            doc_ms = fitz.open(str(ms_path))

            meta = extract_qp_metadata(doc_qp)
            ms_entries = parse_ms_entries(doc_ms)
            qp_text = extract_qp_full_text(doc_qp)

            doc_qp.close()
            doc_ms.close()

            if not ms_entries:
                print(f"✗ (0 MS entries)")
                continue

            questions = build_question_structure(ms_entries, qp_text)

            # Count topics
            for q in questions:
                all_topics[q['topic']] += 1

            # Build paper entry
            paper_id = f"0921_{stem.lower()}"
            # Determine topic description from question topics
            q_topics = list(set(q['topic'] for q in questions))
            desc = ', '.join(q_topics[:6]) if q_topics else "IGCSE Chemistry"

            papers[paper_id] = {
                "id": paper_id,
                "subject": "Chemistry",
                "code": meta['code'],
                "paper": "Paper 3 Theory (Core)" if "33" in meta['code'] or "32" in meta['code'] or "03" in meta['code'] else "Theory",
                "name": "Theory (Core)",
                "description": desc,
                "type": "past",
                "session": meta['session'],
                "duration": meta['duration'],
                "totalMarks": meta['totalMarks'],
                "questions": questions
            }

            total_parts = sum(len(q['parts']) for q in questions)
            papers_meta.append({
                "stem": stem, "code": meta['code'], "session": meta['session'],
                "questions": len(questions), "parts": total_parts
            })
            pairing_list.append((stem, meta['code'], meta['session']))

            print(f"✓ ({len(questions)} questions, {total_parts} parts)")

        except Exception as e:
            print(f"✗ ERROR: {e}")

    # ── Generate JS output ──
    print(f"\n── Writing {OUT_JS} ──")

    js = ['// Cambridge IGCSE Chemistry (0921/0620/0971) Past Papers',
          '// MS-driven extraction: structure from mark schemes, context from question papers',
          '',
          'const CHEM_EXAM_PAPERS = {',
          '']

    for paper_id in sorted(papers.keys()):
        p = papers[paper_id]
        js.append(f"  '{paper_id}': {{")
        js.append(f"    id: '{p['id']}',")
        js.append(f"    subject: '{p['subject']}',")
        js.append(f"    code: '{p['code']}',")
        js.append(f"    paper: '{p['paper']}',")
        js.append(f"    name: '{p['name']}',")
        js.append(f"    description: '{p['description']}',")
        js.append(f"    type: 'past',")
        js.append(f"    session: '{p['session']}',")
        js.append(f"    duration: {p['duration']},")
        js.append(f"    totalMarks: {p['totalMarks']},")
        js.append(f"    questions: [")

        for q in p['questions']:
            js.append(f"      {{ num: {q['num']}, topic: '{q['topic']}', parts: [")
            for part in q['parts']:
                q_text = part['question'].replace("'", "\\'").replace("\n", " ")[:400]
                answer = part['answer'].replace("'", "\\'").replace("\n", " ")
                js.append(f"        {{ label: '{part['label']}', marks: {part['marks']}, type: '{part['type']}', question: '{q_text}', answer: '{answer}' }},")
            js.append(f"      ]}},")

        js.append(f"    ]")
        js.append(f"  }},")
        js.append("")

    js.append("};")

    OUT_JS.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_JS, 'w') as f:
        f.write('\n'.join(js))
    print(f"  Wrote {len(papers)} papers")

    # ── Structure analysis ──
    print(f"\n── Writing {OUT_ANALYSIS} ──")
    md = [f"# 0921 Chemistry — Structure Analysis\n",
          f"**Generated**: 2026-07-14 (MS-driven re-extraction)\n",
          f"**Papers**: {len(papers)}\n\n"]

    md.append("## Paper Structure\n")
    code_counts = Counter(pm['code'] for pm in papers_meta)
    md.append("| Code | Count |\n|------|-------|\n")
    for code, count in code_counts.most_common():
        md.append(f"| {code} | {count} |\n")

    md.append("\n## Topic Frequency\n\n")
    for topic, count in all_topics.most_common(20):
        md.append(f"| {topic} | {count} |\n")

    md.append("\n## Paper Coverage\n\n")
    for pm in sorted(papers_meta, key=lambda x: x['session']):
        md.append(f"- **{pm['stem']}** ({pm['code']}, {pm['session']}): {pm['questions']} questions, {pm['parts']} parts\n")

    OUT_ANALYSIS.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_ANALYSIS, 'w') as f:
        f.write(''.join(md))
    print(f"  Wrote analysis")

    # ── Update LINKAGE.md ──
    print(f"\n── Updating {OUT_LINKAGE} ──")
    # Read existing LINKAGE.md to preserve old sections
    existing = ""
    if OUT_LINKAGE.exists():
        with open(OUT_LINKAGE) as f:
            existing = f.read()
    # Remove old 0921 section if present
    existing = re.sub(r'\n---\n\n## 0921 Chemistry Papers.*', '', existing, flags=re.DOTALL)

    with open(OUT_LINKAGE, 'w') as f:
        f.write(existing.strip() + '\n')
        f.write('\n---\n\n## 0921 Chemistry Papers\n\n')
        f.write(f"**MS-driven extraction (2026-07-14)**\n\n")
        f.write(f"**Paired papers**: {len(pairing_list)}\n\n")
        f.write("| # | Paper | Code | Session | Questions | Parts |\n")
        f.write("|---|---|---|---|---|---|\n")
        for i, (stem, code, session) in enumerate(pairing_list, 1):
            pm = next(pm for pm in papers_meta if pm['stem'] == stem)
            f.write(f"| {i} | {stem} | {code} | {session} | {pm['questions']} | {pm['parts']} |\n")
    print(f"  Updated")

    print(f"\n{'='*60}")
    print(f"Done! {len(papers)} papers extracted (MS-driven)")
    print(f"  {OUT_JS}")
    print(f"  {OUT_ANALYSIS}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
