#!/usr/bin/env python3
"""
Step 2: Build Chemistry Content Database from paired 0921 QPs + MSs.
MS-driven approach: use mark scheme entries as primary source,
supplement with QP question text where available.
"""

import fitz
import re
import json
import os
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path(__file__).resolve().parent.parent
QP_DIR = ROOT / "Past-Paper" / "0921-Chem"
MS_DIR = ROOT / "PP-Mark-Schemes"
OUT_DB = ROOT / "web" / "data" / "chem-content-db.js"
OUT_TOPIC_MD = ROOT / "web" / "JSON" / "0921-topic-analysis.md"

# ── helpers ──────────────────────────────────────────────

def clean(text):
    text = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f]', '', text)
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def build_pairing_map():
    """Build map of QP stem → (QP path, MS path)."""
    pairs = []
    qp_files = [f for f in os.listdir(QP_DIR) if f.startswith('QP-') and f.endswith('.pdf')]
    for qp_name in qp_files:
        qp_stem = qp_name.replace('QP-', '').replace('.pdf', '')
        ms_path = MS_DIR / f"MS-{qp_stem}.pdf"
        if ms_path.exists():
            pairs.append((QP_DIR / qp_name, ms_path, qp_stem))
    return pairs

def extract_qp_metadata(doc):
    """Extract code, session, duration, marks from QP cover."""
    text = doc[0].get_text()
    code_m = re.search(r'(06\d{2}/\d{2,3})|(09\d{2}/\d{2,3})', text)
    code = code_m.group(0) if code_m else "???"
    session = "Unknown"
    for pattern, label in [(r'May/June\s+(\d{4})', "May/June"),
                            (r'October/November\s+(\d{4})', "October/November"),
                            (r'February/March\s+(\d{4})', "Feb/March")]:
        m = re.search(pattern, text)
        if m: session = f"{label} {m.group(1)}"
    dur_m = re.search(r'(\d+)\s*hour[s]?\s*(\d*)\s*minute[s]?', text, re.IGNORECASE)
    duration = int(dur_m.group(1))*60 + (int(dur_m.group(2)) if dur_m and dur_m.group(2) else 0) if dur_m else 75
    marks_m = re.search(r'total mark[s]?\s*(?:for|is)\s*(?:this\s*paper\s*is\s*)?(\d+)', text, re.IGNORECASE)
    total_marks = int(marks_m.group(1)) if marks_m else 80
    return {"code": code, "session": session, "duration": duration, "totalMarks": total_marks}

def extract_ms_answers(doc):
    """Extract answer table from MS. Returns list of {question, answer, marks}."""
    answers = []
    for i in range(doc.page_count):
        text = doc[i].get_text()
        text = clean(text)

        # Skip boilerplate
        if any(s in text for s in ['GENERIC MARKING PRINCIPLE', 'Science-Specific Marking',
                                     'Calculation specific', 'Mark schemes should be read',
                                     'Generic Marking Principles', 'This mark scheme is published']):
            continue

        # Find question references: "1(a)(i) answer-text marks"
        # Split on "Question Answer Marks" headers
        blocks = re.split(r'Question\s+Answer\s+Marks', text, flags=re.IGNORECASE)

        for block in blocks:
            # Find all Q-ref + answer pairs
            # Pattern: number(letter)(roman) then everything until next Q-ref or end
            pattern = re.compile(
                r'(\d{1,2})\(([a-z]+)\)\(?([ivx]+)\)?\s+'
                r'(.*?)'
                r'(?=\s*\d{1,2}\([a-z]+\)|$)',
                re.IGNORECASE
            )
            matches = pattern.findall(block)
            for m in matches:
                q_num, letter, roman, raw = m
                q_label = f"{q_num}({letter})" + (f"({roman})" if roman else "")

                # Extract marks from end
                answer_text = raw.strip()
                marks = 0
                mk_match = re.search(r'(?:\((\d+)\)|(\d+))\s*$', answer_text)
                if mk_match:
                    marks = int(mk_match.group(1) or mk_match.group(2))
                    answer_text = re.sub(r'\s*(?:\(\d+\)|\d+)\s*$', '', answer_text).strip()

                answer_text = re.sub(r'^PMT\s*', '', answer_text).strip()
                answer_text = answer_text.replace('PMT', ' ').strip()

                if answer_text and len(answer_text) > 1:
                    answers.append({
                        "question": q_label,
                        "answer": answer_text,
                        "marks": marks
                    })
    return answers

def extract_qp_text_by_question(doc):
    """Extract question text blocks from QP, indexed by question number.
    Returns dict of q_num → text, plus a 'full' key with all text."""
    q_blocks = {}
    all_text = ""
    for i in range(1, doc.page_count):
        text = doc[i].get_text()
        text = clean(text)
        all_text += text + "\n"

    q_blocks['_full'] = all_text

    # Try to split by question number markers
    # Pattern: newline, number, newline, uppercase letter (start of content)
    splits = re.split(r'\n(\d{1,2})\s*\n', all_text)
    if len(splits) >= 3:
        for idx in range(1, len(splits), 2):
            try:
                q_num = int(splits[idx])
                q_text = splits[idx + 1].strip() if idx + 1 < len(splits) else ""
                q_blocks[q_num] = q_text
            except (ValueError, IndexError):
                continue

    # If we got fewer than 3 blocks, fallback: put all text in q_blocks
    if len(q_blocks) <= 2:
        for qn in range(1, 16):
            q_blocks[qn] = all_text  # All questions get full text as context

    return q_blocks

def identify_topic(text):
    """Identify the most likely topic from text."""
    text_lower = text.lower()

    topic_keywords = {
        "Atomic Structure & Periodic Table": [
            "proton", "neutron", "electron shell", "electronic configuration",
            "atomic number", "mass number", "isotope", "periodic table",
            "group i", "group vii", "noble gas", "halogen", "alkali metal",
            "group", "period", "element"
        ],
        "Bonding & Structure": [
            "ionic bond", "covalent bond", "metallic bond", "giant covalent",
            "giant ionic", "giant metallic", "simple molecular", "macromolecule",
            "dot-and-cross", "alloy", "delocalised", "intermolecular",
            "diamond", "graphite", "silicon dioxide", "silica", "nanotube"
        ],
        "Stoichiometry & Moles": [
            "mole", "molar mass", "relative atomic mass", "relative formula mass",
            "empirical formula", "molecular formula", "percentage yield",
            "limiting reactant", "concentration", "dm3", "mol/dm", "avogadro",
            "calculate the mass", "calculate the volume", "calculate the number",
            "balanced equation", "reacting mass"
        ],
        "Electrolysis": [
            "electrolysis", "electrolyte", "electrode", "anode", "cathode",
            "molten", "brine", "electroplating", "electroplate", "electrolytic",
            "graphite electrode", "inert electrode"
        ],
        "Energy Changes": [
            "exothermic", "endothermic", "enthalpy", "activation energy",
            "bond energy", "energy profile", "energy level diagram",
            "catalyst lowers", "heat change", "temperature change"
        ],
        "Rates of Reaction": [
            "rate of reaction", "collision theory", "surface area",
            "concentration affects", "temperature affects", "catalyst speeds",
            "faster reaction", "slower reaction", "rate increases", "rate decreases",
            "successful collision"
        ],
        "Acids, Bases & Salts": [
            "acid", "base", "alkali", "neutralisation", "neutralization",
            "pH", "salt", "titration", "indicator", "strong acid", "weak acid",
            "carbonate reacts", "oxide reacts", "litmus", "universal indicator",
            "soluble", "insoluble", "precipitate", "amphoteric"
        ],
        "Organic Chemistry": [
            "alkane", "alkene", "alcohol", "carboxylic acid", "ester",
            "polymer", "polymerisation", "petroleum", "fractional distillation",
            "cracking", "homologous series", "functional group", "hydrocarbon",
            "ethanol", "fermentation", "crude oil", "poly(ethene)", "poly(propene)",
            "monomer", "addition", "condensation", "nylon", "pet",
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
            "water treatment", "desalination", "chlorination", "sewage"
        ],
        "Sulfur & Compounds": [
            "sulfur", "sulfuric acid", "contact process", "sulfur dioxide",
            "sulfate", "haber process", "ammonia", "fertiliser", "ammonium",
            "npk", "phosphate", "ostwald"
        ],
        "Chemical Analysis & Tests": [
            "test for", "flame test", "precipitate forms", "litmus",
            "chromatography", "retention factor", "locating agent",
            "pure substance", "impurity", "silver nitrate", "barium chloride",
            "acidified potassium manganate", "lime water", "glowing splint",
            "lit splint", "squeaky pop", "anhydrous", "cobalt chloride"
        ]
    }

    scores = defaultdict(int)
    for topic, keywords in topic_keywords.items():
        for kw in keywords:
            if kw.lower() in text_lower:
                scores[topic] += 1

    if scores:
        best = max(scores, key=scores.get)
        if scores[best] >= 1:
            return best
    return "Mixed Chemistry"

def determine_type(answer_text, marks):
    """Determine question type from answer text and marks."""
    combined = answer_text.lower()
    if marks == 1 and len(answer_text) < 30:
        return "short"
    if any(w in combined for w in ["calculate", "work out", "determine"]):
        return "calculation"
    if any(w in combined for w in ["tick", "box", "circle", "choose"]):
        return "mcq"
    if any(w in combined for w in ["describe", "explain", "suggest", "discuss", "any"]):
        return "long"
    if any(w in combined for w in ["draw", "label", "complete the", "sketch"]):
        return "diagram"
    if marks >= 3:
        return "long"
    if marks == 2 and len(answer_text) > 50:
        return "long"
    return "short"

def main():
    print("=" * 60)
    print("Building Chemistry Content Database (MS-driven)...")
    print("=" * 60)

    pairs = build_pairing_map()
    print(f"\nPaired QPs + MSs: {len(pairs)}")

    all_qa_pairs = []
    topic_db = defaultdict(list)
    paper_matches = []

    for idx, (qp_path, ms_path, stem) in enumerate(pairs):
        print(f"  [{idx+1}/{len(pairs)}] {stem} ...", end=" ")

        try:
            doc_qp = fitz.open(str(qp_path))
            doc_ms = fitz.open(str(ms_path))

            meta = extract_qp_metadata(doc_qp)
            q_blocks = extract_qp_text_by_question(doc_qp)
            ms_answers = extract_ms_answers(doc_ms)

            doc_qp.close()
            doc_ms.close()

            if not ms_answers:
                print(f"✗ (0 MS answers)")
                continue

            # For each MS answer, find the corresponding QP question text
            matched = 0
            for ans in ms_answers:
                q_num_match = re.match(r'(\d+)', ans["question"])
                q_num = int(q_num_match.group(1)) if q_num_match else 0

                # Get QP question text: specific block if available, else full text
                qp_text = q_blocks.get(q_num, "") or q_blocks.get('_full', "")

                # Determine topic from MS answer text (QP text is too noisy with diagrams)
                topic = identify_topic(ans["answer"])

                qtype = determine_type(ans["answer"], ans["marks"])

                qa = {
                    "paper": stem,
                    "code": meta["code"],
                    "session": meta["session"],
                    "questionNum": q_num,
                    "label": ans["question"],
                    "topic": topic,
                    "type": qtype,
                    "marks": ans["marks"],
                    "answer": ans["answer"],
                    "questionText": qp_text[:500] if qp_text else ""
                }
                all_qa_pairs.append(qa)
                topic_db[topic].append(qa)
                matched += 1

            paper_matches.append({
                "stem": stem, "code": meta["code"], "session": meta["session"],
                "msAnswers": len(ms_answers), "qpBlocks": len(q_blocks), "matched": matched
            })
            print(f"✓ ({len(ms_answers)} ms → {matched} qa pairs)")

        except Exception as e:
            print(f"✗ ERROR: {e}")

    print(f"\nTotal Q+A pairs: {len(all_qa_pairs)} across {len(topic_db)} topics")

    # ── Generate chem-content-db.js ──
    print(f"\n── Writing {OUT_DB} ──")

    # Topic stats
    topic_stats = {}
    for topic, items in topic_db.items():
        total_marks = sum(it["marks"] for it in items)
        types = Counter(it["type"] for it in items)
        sessions = sorted(set(it["session"] for it in items))
        topic_stats[topic] = {
            "count": len(items),
            "totalMarks": total_marks,
            "types": dict(types),
            "sessions": len(sessions)
        }

    js = []
    js.append("// Chemistry Content Database — Q+A pairs by topic")
    js.append("// Generated from paired 0921 past papers + mark schemes")
    js.append("// MS-driven: mark scheme answers as primary source")
    js.append("")
    js.append("const CHEM_CONTENT_DB = {")
    js.append(f"  _meta: {{ totalPapers: {len(paper_matches)}, totalQA: {len(all_qa_pairs)}, topics: {len(topic_db)}, generated: '2026-07-13' }},")
    js.append("")
    js.append("  _topicStats: {")
    for topic in sorted(topic_stats.keys()):
        s = topic_stats[topic]
        js.append(f"    '{topic}': {{ count: {s['count']}, totalMarks: {s['totalMarks']}, types: {json.dumps(s['types'])}, sessionSpread: {s['sessions']} }},")
    js.append("  },")
    js.append("")

    for topic in sorted(topic_db.keys()):
        items = topic_db[topic]
        items.sort(key=lambda x: x["marks"], reverse=True)
        js.append(f"  '{topic}': [")
        for qa in items:
            ans = qa["answer"].replace("'", "\\'").replace("\n", " ")
            qtxt = qa["questionText"].replace("'", "\\'").replace("\n", " ")[:300]
            js.append(f"    {{ paper:'{qa['paper']}', code:'{qa['code']}', session:'{qa['session']}', qNum:{qa['questionNum']}, label:'{qa['label']}', type:'{qa['type']}', marks:{qa['marks']}, answer:'{ans}', questionText:'{qtxt}' }},")
        js.append("  ],")
        js.append("")

    js.append("};")

    OUT_DB.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_DB, 'w') as f:
        f.write('\n'.join(js))
    print(f"  Wrote to {OUT_DB}")

    # ── Topic Analysis ──
    print(f"\n── Writing {OUT_TOPIC_MD} ──")
    md = [f"# 0921 Chemistry — Topic Analysis\n"]
    md.append(f"**Based on**: {len(paper_matches)} papers, {len(all_qa_pairs)} Q+A pairs\n")
    md.append("\n## Topic Coverage\n")
    md.append("| Topic | QA Pairs | Total Marks | Short | Calc | Long | Mcq | Sessions |\n")
    md.append("|-------|----------|-------------|-------|------|------|-----|----------|\n")
    for topic in sorted(topic_db.keys()):
        s = topic_stats[topic]
        t = s['types']
        md.append(f"| {topic} | {s['count']} | {s['totalMarks']} | "
                  f"{t.get('short',0)} | {t.get('calculation',0)} | {t.get('long',0)} | "
                  f"{t.get('mcq',0)} | {s['sessions']} |\n")

    md.append("\n## Mark Distribution\n\n")
    md.append("| Topic | 1m | 2m | 3m | 4+m |\n")
    md.append("|-------|----|----|----|----|\n")
    for topic in sorted(topic_db.keys()):
        items = topic_db[topic]
        md.append(f"| {topic} | {sum(1 for i in items if i['marks']==1)} | "
                  f"{sum(1 for i in items if i['marks']==2)} | {sum(1 for i in items if i['marks']==3)} | "
                  f"{sum(1 for i in items if i['marks']>=4)} |\n")

    md.append("\n## Paper Coverage\n\n")
    md.append("| Paper | Code | Session | QA Pairs |\n")
    md.append("|-------|------|---------|----------|\n")
    for pm in sorted(paper_matches, key=lambda x: x["session"]):
        md.append(f"| {pm['stem']} | {pm['code']} | {pm['session']} | {pm['matched']} |\n")

    OUT_TOPIC_MD.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT_TOPIC_MD, 'w') as f:
        f.write(''.join(md))
    print(f"  Wrote to {OUT_TOPIC_MD}")

    # Summary
    print(f"\n{'='*60}")
    print(f"Content database complete!")
    print(f"  {len(all_qa_pairs)} Q+A pairs | {len(topic_db)} topics | {len(paper_matches)} papers")
    print(f"  DB: {OUT_DB}")
    print(f"  Analysis: {OUT_TOPIC_MD}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
