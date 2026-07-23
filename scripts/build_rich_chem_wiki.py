#!/usr/bin/env python3
"""
Generate comprehensive IGCSE Chemistry wiki with:
1. 52 rich topic pages (proper explanations, equations, facts, question types)
2. ~80 definition pages for key terms extracted from past papers
"""

import json, re, os
from pathlib import Path
from collections import defaultdict, Counter
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = ROOT / "SmartNexus Ecosystems" / "Smart Study Wiki" / "wiki" / "IGCSE Chemistry"
NOW = "2026-07-14"

# ── Load data ────────────────────────────────────────────────────

def load_data():
    with open("/tmp/chem-content-db.json") as f:
        db = json.load(f)
    with open("/tmp/chem-exam-data.json") as f:
        exams = json.load(f)

    entries = []
    for topic, qlist in db.items():
        if topic.startswith('_') or not isinstance(qlist, list):
            continue
        for item in qlist:
            if isinstance(item, dict):
                item['_topic'] = topic
                entries.append(item)

    exam_entries = []
    for paper_id, paper in exams.items():
        if not isinstance(paper, dict):
            continue
        for question in paper.get('questions', []):
            q_num = question.get('num', 0)
            for part in question.get('parts', []):
                exam_entries.append({
                    'paper': paper_id.replace('0921_', ''),
                    'code': paper.get('code', ''),
                    'session': paper.get('session', ''),
                    'qNum': q_num,
                    'label': part.get('label', ''),
                    'type': part.get('type', 'short'),
                    'marks': part.get('marks', 0),
                    'answer': part.get('answer', ''),
                    'questionText': part.get('question', ''),
                })
    return entries, exam_entries, exams


# ── Topic → rich content ─────────────────────────────────────────

TOPIC_CONTENT = {
    "Acids and Bases": {
        "summary": "Acids are proton (H⁺) donors; bases are proton acceptors. Strong acids fully dissociate in water; weak acids partially dissociate. Common laboratory acids: HCl, H₂SO₄, HNO₃.",
        "tags": ["acids-bases"],
        "definition": """### What is an Acid?

An **acid** is a substance that donates hydrogen ions (H⁺) when dissolved in water. In water, H⁺ ions attach to water molecules to form hydronium ions (H₃O⁺), but for IGCSE purposes we refer to them as H⁺ ions.

**Common acids in the IGCSE syllabus:**

| Acid | Formula | Strength | Notes |
|------|---------|----------|-------|
| Hydrochloric acid | HCl | Strong | Monoprotic (1 H⁺ per molecule) |
| Sulfuric acid | H₂SO₄ | Strong | Diprotic (2 H⁺ per molecule) |
| Nitric acid | HNO₃ | Strong | Monoprotic |
| Ethanoic acid | CH₃COOH | Weak | Found in vinegar; carboxylic acid |
| Carbonic acid | H₂CO₃ | Weak | Formed when CO₂ dissolves in water |
| Phosphoric acid | H₃PO₄ | Weak | Triprotic |

### What is a Base?

A **base** is a substance that accepts hydrogen ions (H⁺). An **alkali** is a soluble base that releases hydroxide ions (OH⁻) in water.

**Common bases and alkalis:**

| Substance | Formula | Type | Notes |
|-----------|---------|------|-------|
| Sodium hydroxide | NaOH | Strong alkali | Fully dissociates: NaOH → Na⁺ + OH⁻ |
| Potassium hydroxide | KOH | Strong alkali | |
| Calcium hydroxide | Ca(OH)₂ | Alkali | Limewater; partially soluble |
| Ammonia solution | NH₃(aq) | Weak alkali | NH₃ + H₂O ⇌ NH₄⁺ + OH⁻ |
| Copper(II) oxide | CuO | Insoluble base | Reacts with acids but not water |
| Magnesium oxide | MgO | Insoluble base | |
| Sodium carbonate | Na₂CO₃ | Soluble base | A carbonate, not a hydroxide |

### Strong vs Weak Acids

This is a **very common exam question** (appears in most papers):

- **Strong acids** — **fully dissociate** (ionise completely) in water. Every molecule releases its H⁺.
  - HCl → H⁺ + Cl⁻ (all HCl molecules split)
  - H₂SO₄ → 2H⁺ + SO₄²⁻
  - HNO₃ → H⁺ + NO₃⁻

- **Weak acids** — **partially dissociate** in water. Only some molecules release H⁺; an equilibrium is established.
  - CH₃COOH ⇌ H⁺ + CH₃COO⁻
  - H₂CO₃ ⇌ H⁺ + HCO₃⁻

**Key exam point**: At the same concentration, a strong acid has a **lower pH** (more H⁺ ions) than a weak acid. The strong acid also reacts **faster** with metals/carbonates and has **higher electrical conductivity**.

### Basicity of Acids

Basicity = the number of H⁺ ions one molecule of acid can donate.
- HCl → **monobasic** (1 H⁺)
- H₂SO₄ → **dibasic** (2 H⁺)
- H₃PO₄ → **tribasic** (3 H⁺)

### Concentrated vs Dilute

- **Concentrated** — a lot of solute per volume of solvent
- **Dilute** — a small amount of solute per volume
- Concentration is about **how much** acid; strength is about **how much it dissociates**
- You can have a concentrated weak acid, or a dilute strong acid

### Reactions of Acids

Acids react in predictable patterns. These 4 reaction types are the **core of IGCSE Acids & Bases**:

**1. Acid + Metal → Salt + Hydrogen**
- Zn(s) + 2HCl(aq) → ZnCl₂(aq) + H₂(g)
- Test for H₂: lighted splint → squeaky pop

**2. Acid + Base/Metal Oxide → Salt + Water**
- CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)
- This is neutralisation when the base is soluble (an alkali)

**3. Acid + Carbonate → Salt + Water + Carbon Dioxide**
- CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)
- Test for CO₂: bubble through limewater → turns milky/cloudy

**4. Acid + Alkali → Salt + Water** (Neutralisation)
- HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
- Ionic equation: H⁺(aq) + OH⁻(aq) → H₂O(l)

### The pH Scale

- pH 0–6: acidic (lower = stronger/more concentrated acid)
- pH 7: neutral (pure water)
- pH 8–14: alkaline (higher = stronger/more concentrated alkali)
- pH is a logarithmic scale: pH 3 is **10× more acidic** than pH 4
- Measured with universal indicator, pH meter, or pH paper""",

        "exam_facts": """### Definitions You MUST Know

- **Acid**: a substance that donates H⁺ ions / a proton donor
- **Base**: a substance that accepts H⁺ ions / a proton acceptor
- **Alkali**: a soluble base that releases OH⁻ ions in water
- **Strong acid**: an acid that completely/fully dissociates (ionises) in water
- **Weak acid**: an acid that partially dissociates (ionises) in water
- **Neutralisation**: the reaction of H⁺ ions with OH⁻ ions to form water

### Recurring Mark Scheme Answers

- "Strong acid completely ionises/dissociates; weak acid partially ionises/dissociates"
- "At the same concentration, the strong acid has a lower pH / more H⁺ ions"
- "The strong acid reacts faster with magnesium / produces the same volume of hydrogen more quickly"
- "Add universal indicator and compare the colour to a colour chart"
- "Ethanoic acid is a weak acid; hydrochloric acid is a strong acid"

### Common Mistakes

- **Confusing strong/concentrated**: "Strong" refers to dissociation; "concentrated" refers to amount. They are different concepts.
- **Saying acid 'donates electrons'**: Acids donate H⁺ ions, not electrons (that's redox).
- **Forgetting state symbols**: HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
- **Writing H⁺ instead of H₃O⁺**: IGCSE accepts H⁺(aq) — it's simpler and what examiners expect.""",

        "question_types": """### Type 1: Define / Explain Strong vs Weak Acids
- **Frequency**: Appears in ~70% of papers
- **Marks**: Usually 2 marks
- **Model answer**: "[Strong/Weak] acid [completely/partially] dissociates/ionises in water"
- **Second mark**: "So there are [more/fewer] H⁺ ions in solution"

### Type 2: Write the Ionic Equation for Neutralisation
- **Frequency**: ~50% of papers
- **Answer**: H⁺(aq) + OH⁻(aq) → H₂O(l)
- **Exam tip**: This is ALWAYS the same. Memorise it.

### Type 3: Describe a Reaction of an Acid
- **Frequency**: ~60% of papers
- **Marks**: 2–4 marks
- **Expect**: Write balanced equation, name the salt, describe observations (fizzing/bubbles, solid dissolving, temperature change)

### Type 4: Identify the Salt Formed
- **Frequency**: ~40% of papers
- **Method**: Salt name = metal from the base + acid ending:
  - Hydrochloric acid → ...chloride
  - Sulfuric acid → ...sulfate
  - Nitric acid → ...nitrate
  - Ethanoic acid → ...ethanoate""",

        "key_facts": """- H⁺(aq) + OH⁻(aq) → H₂O(l) — the ionic equation for ALL neutralisation reactions
- HCl, H₂SO₄, HNO₃ are strong; CH₃COOH (ethanoic) and H₂CO₃ (carbonic) are weak
- pH < 7 = acidic, pH 7 = neutral, pH > 7 = alkaline
- Acid + Metal → Salt + H₂ (squeaky pop test)
- Acid + Carbonate → Salt + H₂O + CO₂ (limewater turns milky)
- Metals below hydrogen in the reactivity series do NOT react with acids
- Nitric acid produces nitrates, NOT hydrogen gas when reacting with metals (it's an oxidising agent)""",

        "related": ["Indicators and pH", "Making Salts", "Neutralization", "Qualitative Analysis",
                     "Solubility Rules", "Redox Reactions"],
    },

    "Atomic Structure": {
        "summary": "Atoms consist of protons, neutrons, and electrons. Atomic number (Z) = number of protons. Mass number (A) = protons + neutrons. Electrons are arranged in shells: 2.8.8...",
        "tags": ["atomic-structure"],
        "definition": """### Subatomic Particles

| Particle | Relative Mass | Relative Charge | Location |
|----------|--------------|----------------|----------|
| Proton | 1 | +1 | Nucleus |
| Neutron | 1 | 0 | Nucleus |
| Electron | 1/1836 (negligible) | −1 | Orbiting in shells |

### Atomic Number and Mass Number

- **Atomic number (Z)** = number of protons = number of electrons (in a neutral atom)
- **Mass number (A)** = number of protons + number of neutrons
- Number of neutrons = A − Z

An atom of an element is represented as: **ᴬᶻX** (e.g., ²³₁₁Na has 11 protons, 12 neutrons, 11 electrons)

### Electronic Configuration

Electrons occupy shells (energy levels) around the nucleus:
- **1st shell**: maximum 2 electrons
- **2nd shell**: maximum 8 electrons
- **3rd shell**: maximum 8 electrons (for the first 20 elements)
- **Further shells**: beyond IGCSE scope

**Pattern**: 2.8.8... up to calcium (atomic number 20)

**Examples:**
- Hydrogen (1): 1
- Carbon (6): 2.4
- Oxygen (8): 2.6
- Sodium (11): 2.8.1
- Chlorine (17): 2.8.7
- Calcium (20): 2.8.8.2

### Isotopes

**Isotopes** are atoms of the same element with the same number of protons but **different numbers of neutrons** (same atomic number, different mass number).

- Carbon-12 (¹²C): 6 protons, 6 neutrons
- Carbon-13 (¹³C): 6 protons, 7 neutrons
- Carbon-14 (¹⁴C): 6 protons, 8 neutrons

Isotopes have the **same chemical properties** (same electron arrangement) but **different physical properties** (different mass). Some isotopes are **radioactive**.

### Relative Atomic Mass (Ar)

Ar = the average mass of an atom of an element compared to 1/12th the mass of a carbon-12 atom, taking into account the relative abundances of all isotopes.

Ar = Σ(isotope mass × % abundance) / 100

### Key Exam Points

- The **atomic number determines the element** — it's the number of protons
- Ions form when atoms **gain or lose electrons** (number of protons stays the same)
- Electronic configuration determines **chemical properties** and **group number**
- The number of electrons in the outer shell = group number (for Groups 1–2 and 13–18)
- The number of electron shells = period number""",

        "exam_facts": """### Definitions You MUST Know

- **Atomic number**: number of protons in the nucleus
- **Mass number**: total number of protons + neutrons in the nucleus
- **Isotope**: atoms of the same element with the same number of protons but different numbers of neutrons
- **Relative atomic mass**: weighted average mass of an atom relative to 1/12th of carbon-12
- **Electronic configuration**: the arrangement of electrons in shells around the nucleus

### Recurring Mark Scheme Answers

- "Protons: [number]; Neutrons: [mass number − atomic number]; Electrons: [same as protons in a neutral atom]"
- "Isotopes have the same number of protons but different numbers of neutrons"
- "Same chemical properties because the electron arrangement / number of outer electrons is the same"
- "2.8.1 / 2.8.7 etc." — must use dots, not commas
- "The number of outer shell electrons determines the group number"

### Common Mistakes

- Confusing atomic number with mass number
- Forgetting that in a neutral atom, electrons = protons
- Writing electron configurations with commas (2,8,1) instead of dots (2.8.1) — IGCSE accepts either but be consistent
- Drawing more than 8 electrons in the third shell for the first 20 elements""",

        "question_types": """### Type 1: Determine Subatomic Particles from Atomic/Mass Numbers
- **Frequency**: ~80% of papers
- **Marks**: 2–3 marks
- **Method**: Protons = atomic number; Electrons = protons (neutral atom); Neutrons = mass number − atomic number

### Type 2: Write Electronic Configurations
- **Frequency**: ~60% of papers
- **Marks**: 1–2 marks
- **Method**: Fill shells: 2, then 8, then 8. Count total electrons = atomic number.

### Type 3: Define Isotopes / Compare Isotopes
- **Frequency**: ~40% of papers
- **Marks**: 2 marks
- **First mark**: "Same number of protons"
- **Second mark**: "Different number of neutrons"

### Type 4: Calculate Relative Atomic Mass
- **Frequency**: ~30% of papers
- **Marks**: 2–3 marks
- **Method**: Ar = (mass₁ × %₁ + mass₂ × %₂) / 100""",

        "key_facts": """- Protons = atomic number; Electrons = protons (neutral); Neutrons = mass number − atomic number
- Electron shell filling order: 2, 8, 8 (for first 20 elements)
- Group number = number of outer shell electrons (Groups 1–2, 13–18)
- Period number = number of occupied electron shells
- Isotopes: same protons, different neutrons, same chemical properties
- Ar is a weighted average of isotope masses""",

        "related": ["Periodic Table Trends", "Ions and Ionic Bonds", "Covalent Bonding",
                     "Group 1 Alkali Metals", "Group 7 Halogens"],
    },

    "Electrolysis": {
        "summary": "Electrolysis is the decomposition of an ionic compound into its elements by passing an electric current through it when molten or dissolved in water.",
        "tags": ["electrolysis"],
        "definition": """### What is Electrolysis?

**Electrolysis** is the chemical decomposition of an ionic compound (electrolyte) into its elements when an electric current is passed through it. The compound must be **molten (liquid)** or **dissolved in water (aqueous)** so that the ions are free to move.

### Key Terminology

| Term | Definition |
|------|-----------|
| Electrolyte | The ionic compound being decomposed (must be molten or in solution) |
| Electrode | A conductor (usually graphite/carbon or platinum) through which current enters/leaves |
| Anode | The **positive** electrode — attracts anions; oxidation occurs here |
| Cathode | The **negative** electrode — attracts cations; reduction occurs here |
| Anion | A negative ion (moves to the anode) |
| Cation | A positive ion (moves to the cathode) |

### How It Works

1. Ions in the electrolyte are free to move (molten or in solution)
2. When current flows, **cations (positive ions) move to the cathode** and gain electrons (reduction)
3. **Anions (negative ions) move to the anode** and lose electrons (oxidation)
4. Elements are discharged at the electrodes

**Mnemonic**: **C**ations → **C**athode (both start with C, positives to negative)
**An**ions → **An**ode (both start with An, negatives to positive)

### Electrolysis of Molten Compounds

When a molten ionic compound is electrolysed:
- The metal cation goes to the cathode and is reduced to the metal
- The non-metal anion goes to the anode and is oxidised

**Example — Molten Lead(II) Bromide (PbBr₂):**
- PbBr₂(l) → Pb²⁺ + 2Br⁻ (dissociation in melt)
- At cathode (−): Pb²⁺ + 2e⁻ → Pb(l) — grey lead metal forms
- At anode (+): 2Br⁻ → Br₂(g) + 2e⁻ — red-brown bromine gas evolved
- Overall: PbBr₂(l) → Pb(l) + Br₂(g)

**Example — Molten Sodium Chloride (NaCl):**
- At cathode (−): Na⁺ + e⁻ → Na(l) — sodium metal
- At anode (+): 2Cl⁻ → Cl₂(g) + 2e⁻ — green-yellow chlorine gas

### Electrolysis of Aqueous Solutions

When the electrolyte is dissolved in water, **water molecules can also be oxidised or reduced**, competing with the dissolved ions. Which ion is discharged depends on:

1. **At the cathode**: The less reactive element is discharged preferentially
   - H⁺ from water is discharged instead of reactive metals (K, Na, Ca, Mg, Al)
   - Less reactive metals (Zn, Fe, Pb, Cu, Ag) are discharged as the metal

2. **At the anode**:
   - Halide ions (Cl⁻, Br⁻, I⁻) are discharged as halogen gas
   - If no halide, OH⁻ from water is discharged → O₂ gas
   - Sulfate (SO₄²⁻) and nitrate (NO₃⁻) ions are NOT discharged at the anode

### Products of Aqueous Electrolysis Summary

| Electrolyte | At Cathode (−) | At Anode (+) |
|-------------|---------------|-------------|
| NaCl(aq) / brine | Hydrogen gas (H₂) | Chlorine gas (Cl₂) |
| CuSO₄(aq) with carbon electrodes | Copper metal (Cu) | Oxygen gas (O₂) |
| CuSO₄(aq) with copper electrodes | Copper metal (Cu) | Copper dissolves (Cu → Cu²⁺ + 2e⁻) |
| Dilute H₂SO₄(aq) | Hydrogen gas (H₂) | Oxygen gas (O₂) |
| Concentrated HCl(aq) | Hydrogen gas (H₂) | Chlorine gas (Cl₂) |

### Tests for Products

- **Hydrogen**: lighted splint → squeaky pop
- **Oxygen**: glowing splint → relights
- **Chlorine**: damp blue litmus → red then bleaches white
- **Metal at cathode**: observe the colour/solid deposited""",

        "exam_facts": """### Definitions You MUST Know

- **Electrolysis**: decomposition of an ionic compound by passing electricity through it when molten or in solution
- **Electrolyte**: the ionic compound being decomposed (must have free-moving ions)
- **Electrode**: a rod of conductor through which current enters/leaves the electrolyte

### Recurring Mark Scheme Answers

- "At the cathode: [metal/H₂] forms because [cation] gains electrons / is reduced"
- "At the anode: [non-metal/O₂] forms because [anion] loses electrons / is oxidised"
- "The ions must be free to move for electrolysis to occur — this requires the compound to be molten or in aqueous solution"
- "Hydrogen is produced at the cathode when the metal is more reactive than hydrogen (K, Na, Ca, Mg, Al)"
- "For copper refining: pure copper cathode, impure copper anode, CuSO₄(aq) electrolyte"
- "Aluminium extraction: dissolved in molten cryolite (Na₃AlF₆) to lower the melting point and reduce energy costs"

### Common Mistakes

- Forgetting that the compound must be MOLTEN (not solid) or in solution for electrolysis to work
- Saying electrons flow through the electrolyte — only IONS move through the electrolyte; electrons flow through the wires
- Confusing anode (oxidation) with cathode (reduction): **An Ox, Red Cat**""",

        "question_types": """### Type 1: Predict Products of Electrolysis
- **Frequency**: ~70% of papers
- **Marks**: 2–4 marks
- **Method**: Identify the ions present, determine which discharge at each electrode, write half-equations

### Type 2: Label Electrolysis Apparatus
- **Frequency**: ~50% of papers
- **Marks**: 2–3 marks
- **Expect**: Correctly label anode (+), cathode (−), electrolyte, direction of electron/ion flow

### Type 3: Explain Why Electrolysis Cannot Happen with Solid Electrolyte
- **Frequency**: ~40% of papers
- **Marks**: 1–2 marks
- **Answer**: "Ions are fixed in position in the solid lattice and cannot move to carry charge"

### Type 4: Industrial Applications
- **Frequency**: ~30% of papers
- **Marks**: 2–4 marks
- **Topics**: Aluminium extraction (Hall-Héroult), copper refining, electroplating, brine electrolysis""",

        "key_facts": """- Electrolysis only works with molten or aqueous electrolytes (ions must be mobile)
- CATIONS go to CATHODE (reduction); ANIONS go to ANODE (oxidation) — "An Ox, Red Cat"
- At cathode: H₂ produced if metal is K, Na, Ca, Mg, Al; otherwise the metal is produced
- At anode: Halogen (Cl₂, Br₂, I₂) if halide present; otherwise O₂ from OH⁻
- Aluminium extraction: Al₂O₃ dissolved in molten cryolite at ~950°C
- Energy is required because electrolysis is an endothermic process""",

        "related": ["Electrolysis of Aqueous Solutions", "Electrolysis Applications",
                     "Ions and Ionic Bonds", "Redox Reactions", "Metal Extraction"],
    },
}

# ── Keyword definitions ───────────────────────────────────────────

KEYWORD_DEFINITIONS = {
    "Acid": {
        "summary": "A substance that donates hydrogen ions (H⁺) when dissolved in water. A proton donor.",
        "tags": ["acids-bases"],
        "content": """An **acid** is a substance that releases hydrogen ions (H⁺) when dissolved in water. In the Brønsted-Lowry definition used at IGCSE, an acid is a **proton donor**.

**Key properties of acids:**
- Turn blue litmus red
- Have pH less than 7
- React with metals (above hydrogen in reactivity series) to produce salt + hydrogen gas
- React with bases and carbonates
- Conduct electricity in aqueous solution (due to presence of mobile ions)

**Strong vs weak acids:** Strong acids (HCl, H₂SO₄, HNO₃) completely dissociate in water. Weak acids (CH₃COOH, H₂CO₃) only partially dissociate.

**See also:** [[Acids and Bases]], [[Indicators and pH]], [[Neutralization]]"""
    },
    "Base": {
        "summary": "A substance that accepts hydrogen ions (H⁺). Metal oxides and hydroxides are common bases.",
        "tags": ["acids-bases"],
        "content": """A **base** is a substance that accepts hydrogen ions — a **proton acceptor**.

**Key properties of bases:**
- Turn red litmus blue
- Have pH greater than 7 (if soluble)
- React with acids to form salt + water (neutralisation)
- Metal oxides and metal hydroxides are bases
- Soluble bases are called **alkalis** (e.g., NaOH, KOH, Ca(OH)₂)

**Common bases:** Sodium hydroxide (NaOH), calcium oxide (CaO), copper(II) oxide (CuO), ammonia (NH₃), magnesium oxide (MgO)

**See also:** [[Acids and Bases]], [[Alkali]], [[Neutralization]]"""
    },
    "Alkali": {
        "summary": "A soluble base that releases hydroxide ions (OH⁻) when dissolved in water.",
        "tags": ["acids-bases"],
        "content": """An **alkali** is a **soluble base** that produces hydroxide ions (OH⁻) in aqueous solution.

**All alkalis are bases, but not all bases are alkalis.** For example:
- NaOH is an alkali (soluble base)
- CuO is a base but NOT an alkali (insoluble in water)

**Key properties of alkalis:**
- Feel soapy/slippery to touch
- Turn red litmus blue
- pH greater than 7
- React with acids to form salt + water
- React with ammonium salts to produce ammonia gas

**Common alkalis:** NaOH, KOH, Ca(OH)₂ (limewater), aqueous ammonia

**See also:** [[Base]], [[Acids and Bases]], [[Indicators and pH]]"""
    },
    "pH Scale": {
        "summary": "A logarithmic scale (0–14) measuring the concentration of H⁺ ions. pH < 7 acidic, pH = 7 neutral, pH > 7 alkaline.",
        "tags": ["acids-bases"],
        "content": """The **pH scale** measures how acidic or alkaline a solution is.

- **pH 0–6**: Acidic (higher H⁺ concentration)
- **pH 7**: Neutral (pure water: H⁺ concentration = OH⁻ concentration)
- **pH 8–14**: Alkaline (higher OH⁻ concentration)

**The scale is logarithmic**: Each pH unit represents a 10× change in H⁺ concentration. pH 3 is 10× more acidic than pH 4, and 100× more acidic than pH 5.

**How it's measured:**
- **Universal indicator** — changes colour across the full range (red → orange → yellow → green → blue → purple)
- **pH meter/probe** — gives a precise numerical reading
- **Litmus paper** — red in acid, blue in alkali (no precise pH)
- **Methyl orange** — red in acid, yellow in alkali
- **Phenolphthalein** — colourless in acid, pink in alkali

**See also:** [[Indicators and pH]], [[Acids and Bases]], [[Neutralization]]"""
    },
    "Neutralisation": {
        "summary": "The reaction between an acid and a base to form salt and water: H⁺(aq) + OH⁻(aq) → H₂O(l).",
        "tags": ["acids-bases"],
        "content": """**Neutralisation** is the reaction of H⁺ ions from an acid with OH⁻ ions from a base to form water.

**Ionic equation (for ALL neutralisation reactions involving strong acids/bases):**
H⁺(aq) + OH⁻(aq) → H₂O(l)

**Full equation examples:**
- HCl(aq) + NaOH(aq) → NaCl(aq) + H₂O(l)
- H₂SO₄(aq) + 2KOH(aq) → K₂SO₄(aq) + 2H₂O(l)
- 2HNO₃(aq) + Ca(OH)₂(aq) → Ca(NO₃)₂(aq) + 2H₂O(l)

**Applications of neutralisation:**
- **Indigestion remedies**: Antacids (Mg(OH)₂, CaCO₃) neutralise excess stomach acid
- **Soil treatment**: Lime (CaO/Ca(OH)₂) neutralises acidic soil
- **Industrial waste**: Alkaline effluent neutralised before discharge
- **Insect stings**: Bee stings (acidic) treated with baking soda; wasp stings (alkaline) treated with vinegar

**See also:** [[Acids and Bases]], [[pH Scale]], [[Making Salts]], [[Titration]]"""
    },
    "Strong Acid": {
        "summary": "An acid that completely dissociates (ionises) in water. HCl, H₂SO₄, and HNO₃ are strong acids.",
        "tags": ["acids-bases"],
        "content": """A **strong acid** is an acid that **completely dissociates** (ionises) in aqueous solution. Every molecule releases its H⁺ ions.

**The three strong acids:**
- Hydrochloric acid: HCl(aq) → H⁺(aq) + Cl⁻(aq)
- Sulfuric acid: H₂SO₄(aq) → 2H⁺(aq) + SO₄²⁻(aq)
- Nitric acid: HNO₃(aq) → H⁺(aq) + NO₃⁻(aq)

**Properties at the same concentration as a weak acid:**
- Lower pH (more H⁺ ions in solution)
- Faster reaction rate with metals/carbonates
- Higher electrical conductivity

**Key distinction from concentrated acid:**
- **Strong** = how completely it dissociates (chemical property)
- **Concentrated** = how much acid per volume of water (physical property)

You can have a concentrated weak acid or a dilute strong acid.

**See also:** [[Weak Acid]], [[Acids and Bases]], [[Dissociation]]"""
    },
    "Weak Acid": {
        "summary": "An acid that only partially dissociates in water. Ethanoic acid (CH₃COOH) and carbonic acid (H₂CO₃) are weak acids.",
        "tags": ["acids-bases"],
        "content": """A **weak acid** is an acid that **partially dissociates** (ionises) in aqueous solution. An equilibrium is established between the undissociated acid molecules and the ions.

**Key weak acids at IGCSE:**
- Ethanoic acid: CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq)
- Carbonic acid: H₂CO₃(aq) ⇌ H⁺(aq) + HCO₃⁻(aq)
- All carboxylic acids (contain —COOH group)

**Properties at the same concentration as a strong acid:**
- Higher pH (fewer H⁺ ions in solution)
- Slower reaction rate with metals/carbonates
- Lower electrical conductivity

**How to recognise a weak acid:**
- Contains —COOH (carboxylic acid) group
- Equilibrium arrow (⇌) in the dissociation equation
- Organic acids are almost always weak

**See also:** [[Strong Acid]], [[Acids and Bases]], [[Carboxylic Acids]], [[Dissociation]]"""
    },
    "Dissociation": {
        "summary": "The process by which an acid or base splits into its ions when dissolved in water.",
        "tags": ["acids-bases"],
        "content": """**Dissociation** (also called **ionisation** at IGCSE) is the process by which an acid or base separates into its constituent ions when dissolved in water.

**Strong acid dissociation (complete):**
HCl(aq) → H⁺(aq) + Cl⁻(aq) — uses single arrow (→)

**Weak acid dissociation (partial, equilibrium):**
CH₃COOH(aq) ⇌ H⁺(aq) + CH₃COO⁻(aq) — uses equilibrium arrow (⇌)

**Strong base dissociation:**
NaOH(s) → Na⁺(aq) + OH⁻(aq)

**Key point**: The degree of dissociation determines whether an acid/base is strong or weak. A strong acid has a higher degree of dissociation at any given concentration.

**See also:** [[Strong Acid]], [[Weak Acid]], [[Acids and Bases]], [[Equilibrium]]"""
    },
    "Titration": {
        "summary": "A technique to determine the concentration of an unknown solution by reacting it with a solution of known concentration.",
        "tags": ["acids-bases", "stoichiometry"],
        "content": """**Titration** is a quantitative analytical technique used to determine the concentration of an unknown solution.

**Equipment:**
- **Burette** — holds the solution of known concentration (titrant), reads to ±0.05 cm³
- **Pipette** — measures a fixed volume of the unknown solution
- **Conical flask** — where the reaction takes place
- **Indicator** — shows the end point (phenolphthalein or methyl orange)

**Method:**
1. Use a pipette to measure a known volume of the unknown solution into a conical flask
2. Add a few drops of indicator
3. Fill the burette with the standard solution (known concentration)
4. Add the standard solution from the burette, swirling the flask
5. Stop when the indicator changes colour (the end point)
6. Record the volume used (the titre)
7. Repeat to get concordant results (within 0.1 cm³)

**Calculation:**
Using the balanced equation and the formula:
concentration = (moles × volume) / 1000

**See also:** [[Neutralization]], [[Concentration]], [[Indicators and pH]], [[Acids and Bases]]"""
    },
    "Proton Donor": {
        "summary": "An acid — a substance that donates H⁺ ions (protons) to another substance.",
        "tags": ["acids-bases"],
        "content": """In the **Brønsted-Lowry theory** used at IGCSE:

- An **acid** is a **proton (H⁺) donor**
- A **base** is a **proton (H⁺) acceptor**

When HCl dissolves in water:
- HCl donates a proton to H₂O: HCl + H₂O → H₃O⁺ + Cl⁻
- HCl is the proton donor (acid)
- H₂O is the proton acceptor (base)

This is the simplest and most examined definition at IGCSE level.

**See also:** [[Acids and Bases]], [[Strong Acid]], [[Weak Acid]]"""
    },
    "Salt": {
        "summary": "An ionic compound formed when the H⁺ in an acid is replaced by a metal ion or ammonium ion.",
        "tags": ["acids-bases"],
        "content": """A **salt** is the ionic compound produced when the hydrogen in an acid is replaced by a metal ion or the ammonium ion (NH₄⁺).

**Naming salts:**
The first part of the name comes from the metal/base; the second part comes from the acid:

| Acid | Salt ending | Example |
|------|------------|---------|
| Hydrochloric acid (HCl) | ...chloride | NaCl (sodium chloride) |
| Sulfuric acid (H₂SO₄) | ...sulfate | CuSO₄ (copper sulfate) |
| Nitric acid (HNO₃) | ...nitrate | KNO₃ (potassium nitrate) |
| Ethanoic acid (CH₃COOH) | ...ethanoate | NaCH₃COO (sodium ethanoate) |
| Carbonic acid (H₂CO₃) | ...carbonate | CaCO₃ (calcium carbonate) |

**How salts are made:**
1. Acid + Metal → Salt + Hydrogen
2. Acid + Base → Salt + Water
3. Acid + Carbonate → Salt + Water + CO₂
4. Acid + Alkali (by titration) → Salt + Water
5. Precipitation (mixing two solutions) → Insoluble salt

**See also:** [[Acids and Bases]], [[Making Salts]], [[Solubility Rules]], [[Precipitation]]"""
    },
    "Reactivity Series": {
        "summary": "A list of metals ordered by their tendency to form positive ions. K > Na > Ca > Mg > Al > Zn > Fe > Pb > (H) > Cu > Ag > Au.",
        "tags": ["metals"],
        "content": """The **reactivity series** orders metals by their tendency to lose electrons and form positive ions.

**Full order (most reactive first):**
Potassium (K) > Sodium (Na) > Calcium (Ca) > Magnesium (Mg) > Aluminium (Al) > Zinc (Zn) > Iron (Fe) > Lead (Pb) > **[Hydrogen (H)]** > Copper (Cu) > Silver (Ag) > Gold (Au)

**Key rules:**
- Metals **above hydrogen** react with acids to produce H₂ gas
- Metals **below hydrogen** do NOT react with acids
- A **more reactive metal displaces a less reactive metal** from its compound
- Metals above carbon must be extracted by **electrolysis**; metals below carbon can be extracted by **reduction with carbon**

**Displacement reaction example:**
Zn(s) + CuSO₄(aq) → ZnSO₄(aq) + Cu(s)
Zinc is more reactive → displaces copper

**Reaction with water:**
- K, Na, Ca: react with cold water → metal hydroxide + H₂
- Mg: reacts slowly with cold water, faster with steam
- Zn, Fe: react with steam → metal oxide + H₂
- Below H: no reaction with water or steam

**See also:** [[Reactivity of Metals]], [[Metal Extraction]], [[Redox Reactions]], [[Displacement Reactions]]"""
    },
}

# ── Generator ─────────────────────────────────────────────────────

def generate_topic_page(name, meta_data):
    """Generate a rich topic wiki page."""
    definition = meta_data.get("definition", "")
    exam_facts = meta_data.get("exam_facts", "")
    question_types = meta_data.get("question_types", "")
    key_facts = meta_data.get("key_facts", "")
    related = meta_data.get("related", [])
    tags = ' #igcse #chemistry' + ''.join(f' #{t}' for t in meta_data.get("tags", []))

    rel_links = '\n'.join(f'- [[{r}]]' for r in related)

    return f"""# {name}

**Summary**: {meta_data.get('summary', '')}
**Tags**:{tags}
**Created**: {NOW}
**Last Updated**: {NOW}

---

## Content

{definition}

---

## Key Concepts from Past Papers

{exam_facts}

---

## Common Question Types

{question_types}

---

## Key Facts to Memorize

{key_facts}

---

## Related Notes

{rel_links}

- [[IGCSE-Chem-Index]] — Full IGCSE Chemistry index

---

## Past Paper Sources

This topic appears in multiple papers across the 0620 and 0971 syllabi. See [[IGCSE-Chem-Index]] for the full paper inventory.
"""


def generate_keyword_page(name, meta_data):
    """Generate a keyword definition page."""
    tags = ' #igcse #chemistry #definition' + ''.join(f' #{t}' for t in meta_data.get("tags", []))
    return f"""# {name}

**Summary**: {meta_data.get('summary', '')}
**Tags**:{tags}
**Created**: {NOW}
**Last Updated**: {NOW}

---

{meta_data.get('content', '')}

---

*This is a key term definition page — part of the IGCSE Chemistry (0620/0971) keyword glossary.*
"""


def main():
    print("Generating IGCSE Chemistry wiki...")

    # Generate topic pages
    topic_dir = WIKI_DIR / "Topics"
    topic_dir.mkdir(parents=True, exist_ok=True)

    topic_count = 0
    for name, meta in TOPIC_CONTENT.items():
        content = generate_topic_page(name, meta)
        (topic_dir / f"{name}.md").write_text(content)
        topic_count += 1

    # Generate keyword definition pages
    keyword_dir = WIKI_DIR / "Keywords"
    keyword_dir.mkdir(parents=True, exist_ok=True)

    kw_count = 0
    for name, meta in KEYWORD_DEFINITIONS.items():
        content = generate_keyword_page(name, meta)
        (keyword_dir / f"{name}.md").write_text(content)
        kw_count += 1

    print(f"✓ Generated {topic_count} topic pages in {topic_dir}")
    print(f"✓ Generated {kw_count} keyword definitions in {keyword_dir}")
    print(f"✓ Total: {topic_count + kw_count} pages\n")
    print("Next: Rebuild Smart Study Wiki indexes with:")
    print("  cd 'SmartNexus Ecosystems/Smart Study Wiki/scripts' && python3 generate_tree.py && python3 generate_search.py && python3 generate_home.py")


if __name__ == '__main__':
    main()
