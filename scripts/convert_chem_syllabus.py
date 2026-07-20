#!/usr/bin/env python3
"""Convert Cambridge IGCSE Chemistry 0620 syllabus PDF to clean markdown."""

import pymupdf
import re
import sys
from pathlib import Path

PDF = "../resources/workbooks/595428-2023-2025-syllabus.pdf"
OUT = "../wiki-web/wiki/IGCSE Chemistry/Cambridge IGCSE Chemistry 0620 Syllabus (2023-2025).md"

def norm(s):
    """Normalize whitespace: en-spaces, thin spaces -> regular space."""
    return re.sub(r'[\s -   ]+', ' ', s).strip()

def is_furniture(line, prev_line, next_line):
    """Check if a line is page header/footer furniture to skip."""
    s = norm(line)
    if not s:
        return False

    # Cambridge header lines
    if re.match(r'^Cambridge IGCSE Chemistry 0620 syllabus for 2023, 2024 and 2025\.?\s*(\d+)?$', s):
        return True
    # Cambridge header with section suffix (e.g. "... Subject content  11")
    if re.match(r'^Cambridge IGCSE Chemistry 0620 syllabus for 2023, 2024 and 2025\.?\s+(Subject content|Syllabus overview|Why choose this syllabus\?|Details of the assessment)\s*\d*$', s):
        return True
    # URL line
    if s == "www.cambridgeinternational.org/igcse":
        return True
    # "Back to contents page"
    if s == "Back to contents page":
        return True
    # Page number: standalone 1-2 digit number between header and URL
    if re.match(r'^\d{1,2}$', s):
        if prev_line and next_line:
            ps = norm(prev_line)
            ns = norm(next_line)
            if re.match(r'^Cambridge', ps) and ns == "www.cambridgeinternational.org/igcse":
                return True
    # TOC dot-leader lines
    if re.search(r'\.{5,}', s):
        return True

    return False

# Objective verbs — if the next line starts with one of these (as a complete word,
# not part of a noun phrase like "States of matter"), this is an objective number.
OBJECTIVE_VERBS_RE = re.compile(
    r'^(State|Describe|Explain|Define|Calculate|Identify|Name|Predict|Deduce|'
    r'Construct|Interpret|Use|Determine|Compare|Suggest|Evaluate|Classify|'
    r'Draw|Write|Relate|Deduce|Perform|Plan|Record|Assess|Distinguish|'
    r'Recognise|Understand|Apply|Discuss|Investigate|Measure|Observe|'
    r'Select|Separate|Test|Collect|Prepare|Obtain|Convert|Extend|'
    r'Complete|Balance|Indicate|Outline|Summarise|Show|Find|Give|'
    r'Make|Read|Set|Note|Check|Place|Add|Heat|Pour|Filter|Wash|Dry|Weigh)\b'
)

def looks_like_objective(text):
    """Check if a line starts with an IGCSE objective verb."""
    # Special case: "States of matter" is a noun phrase, NOT the verb "State"
    if text.startswith("States "):
        return False
    return bool(OBJECTIVE_VERBS_RE.match(text))

def is_section_number(line, next_line, next_next_line):
    """Detect a MAJOR section number like '1' followed by 'States of matter'.

    Different from objective numbers by checking that the title is a NOUN phrase
    (section titles are concepts), not a VERB phrase (objectives start with
    imperative verbs like State, Describe, Explain, etc.).
    """
    s = norm(line)
    if not re.match(r'^\d{1,2}$', s):
        return False
    if not next_line:
        return False
    ns = norm(next_line)
    # Must start with uppercase letter
    if not re.match(r'^[A-Z][a-z]', ns):
        return False
    if ns in ('Core', 'Supplement'):
        return False
    # If it starts with an objective verb phrase, it's NOT a section title
    if looks_like_objective(ns):
        return False
    # Section titles are short (under 50 chars)
    if len(ns) > 50:
        return False
    # Check that the NEXT next line isn't a continuation (objective text wraps)
    if next_next_line:
        nns = norm(next_next_line)
        if nns and nns[0].islower():
            return False
    return True

def main():
    script_dir = Path(__file__).parent.resolve()
    pdf_path = str(script_dir / PDF)
    out_path = str(script_dir / OUT)

    doc = pymupdf.open(pdf_path)

    # Read all lines
    all_raw = []
    for i in range(doc.page_count):
        for line in doc[i].get_text().split('\n'):
            all_raw.append(line)
    doc.close()

    # Filter out page furniture
    filtered = []
    for idx, line in enumerate(all_raw):
        prev_line = all_raw[idx - 1] if idx > 0 else ''
        next_line = all_raw[idx + 1] if idx < len(all_raw) - 1 else ''
        if not is_furniture(line, prev_line, next_line):
            filtered.append(line)

    # Find the REAL subject content section boundaries
    # They are: "3 Subject content" (no dots) and "4 Details of the assessment" (no dots)
    content_start = None
    content_end = None
    for idx, line in enumerate(filtered):
        s = norm(line)
        if s == "3 Subject content" and content_start is None:
            content_start = idx
        if s == "4 Details of the assessment" and content_start is not None and content_end is None:
            content_end = idx

    if content_start is None:
        print("ERROR: Could not find '3 Subject content'")
        # Print what we have
        for idx, line in enumerate(filtered[:100]):
            s = norm(line)
            if 'subject' in s.lower() or 'content' in s.lower():
                print(f"  idx {idx}: [{s[:120]}]")
        sys.exit(1)

    print(f"Subject content: lines {content_start} to {content_end or 'END'}")

    body = filtered[content_start + 1 : content_end] if content_end else filtered[content_start + 1:]

    # Build output
    out = []
    out.append("# Cambridge IGCSE Chemistry 0620 Syllabus (2023-2025)")
    out.append("")
    out.append("**Source**: Cambridge Assessment International Education")
    out.append("**Valid for exams**: 2023, 2024, 2025 (June and November series; March series in India only)")
    out.append("**Version**: 2, published December 2022")
    out.append("")
    out.append("---")
    out.append("")
    out.append("## Subject Content")
    out.append("")

    idx = 0
    current_num = None      # objective number being accumulated
    current_chunks = []     # [main_text_parts, sub_item_parts, ...]
    pending_bullet = False  # bullet marker seen, next text line is a bullet item

    def flush_objective():
        """Write out the accumulated objective as a single joined line."""
        nonlocal current_num, current_chunks
        if current_num is None:
            return
        main = ' '.join(p for p in current_chunks[0] if p).strip()
        out.append(f"{current_num}. {main}")
        for chunk in current_chunks[1:]:
            sub = ' '.join(p for p in chunk if p).strip()
            out.append(f"    - {sub}")
        out.append("")
        current_num = None
        current_chunks = []

    while idx < len(body):
        line = body[idx]
        s = norm(line)
        next_line = body[idx + 1] if idx + 1 < len(body) else None
        next_next_line = body[idx + 2] if idx + 2 < len(body) else None

        # Case 1: Section number on its own line followed by title
        if is_section_number(line, next_line, next_next_line) and next_line:
            flush_objective()
            num = s
            title = norm(next_line)
            out.append(f"## {num} {title}")
            out.append("")
            idx += 2
            continue

        # Case 2: Number and text on same line — either a section header or an objective
        m = re.match(r'^(\d{1,2})\s+(.+)$', s)
        if m and not re.match(r'^\d+\.\d+', s):
            num, rest = m.group(1), m.group(2)
            if rest[0].isupper() and not looks_like_objective(rest):
                # Section header like "10 Chemistry of the environment"
                flush_objective()
                out.append(f"## {num} {rest}")
                out.append("")
                idx += 1
                continue
            if looks_like_objective(rest):
                # Objective with text on the same line
                flush_objective()
                current_num = num
                current_chunks = [[rest]]
                idx += 1
                continue

        # Skip empty lines
        if not s:
            idx += 1
            continue

        # Subsection like "1.1 Solids, liquids and gases"
        if re.match(r'^\d+\.\d+\s+[A-Z]', s):
            flush_objective()
            # Skip "continued" page-split artifacts (e.g. "4.1 Electrolysis continued")
            if s.rstrip().endswith("continued"):
                idx += 1
                continue
            parts = s.split(None, 1)
            out.append(f"### {parts[0]} {parts[1]}")
            out.append("")
            idx += 1
            continue

        # Core / Supplement labels
        if s == "Core":
            flush_objective()
            out.append("**Core:**")
            out.append("")
            idx += 1
            continue
        if s == "Supplement":
            flush_objective()
            out.append("**Supplement:**")
            out.append("")
            idx += 1
            continue

        # Standalone objective number — start accumulating
        if re.match(r'^\d{1,2}$', s):
            flush_objective()
            current_num = s
            current_chunks = [[]]
            idx += 1
            continue

        # Sub-item like "(a) high melting points"
        if re.match(r'^\([a-z]\)', s):
            if current_num is not None:
                current_chunks.append([s])
            else:
                out.append(f"- {s}")
            idx += 1
            continue

        # Bullet marker on its own line
        if s in ("•", "-"):
            pending_bullet = True
            idx += 1
            continue

        # Regular text: continuation of an objective, or free text
        if current_num is not None:
            current_chunks[-1].append(s)
        elif pending_bullet:
            out.append(f"- {s}")
            pending_bullet = False
        else:
            out.append(s)
        idx += 1

    flush_objective()

    text = '\n'.join(out)

    # Final cleanup
    text = text.replace(" ", " ").replace(" ", " ").replace("⁄", "/")
    text = text.replace("–", "-").replace("—", "--")
    text = text.replace("", "")
    text = re.sub(r'\n{4,}', '\n\n\n', text)

    # Inject wikilinks into Section 1 (States of matter) — links to wiki topic pages.
    # Applied only to the section 1 slice so regeneration keeps them reproducible.
    SECTION1_LINKS = [
        ("properties of solids, liquids and gases",
         "properties of [[Solid#properties-of-solids|solids]], [[Liquid#properties-of-liquids|liquids]] and [[Gas#properties-of-gases|gases]]"),
        ("in terms of particle separation, arrangement and motion",
         "in terms of [[Particle Arrangement#comparison-of-the-three-states|particle separation, arrangement and motion]]"),
        ("melting, boiling, evaporating, freezing and condensing",
         "[[Melting#melting-as-a-change-of-state|melting]], [[Boiling#boiling-as-a-change-of-state|boiling]], [[Evaporation#evaporation-as-a-change-of-state|evaporating]], [[Freezing#freezing-as-a-change-of-state|freezing]] and [[Condensation#condensation-as-a-change-of-state|condensing]]"),
        ("effects of temperature and pressure on the volume of a gas",
         "effects of temperature and pressure on the [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|volume of a gas]]"),
        ("heating and cooling curves",
         "[[Heating Curve#shape-of-a-heating-curve|heating]] and [[Cooling Curve#shape-of-a-cooling-curve|cooling curves]]"),
        ("explain diffusion",
         "explain [[Diffusion#1-definition-of-diffusion|diffusion]]"),
        ("effect of relative molecular mass on the rate of diffusion of gases",
         "effect of [[Relative Molecular Mass#relative-molecular-mass-and-diffusion-rate|relative molecular mass]] on the rate of [[Diffusion#3-factors-affecting-the-rate-of-diffusion|diffusion of gases]]"),
        # generic term last so specific phrases above win
        ("kinetic particle theory",
         "[[Kinetic Particle Theory#main-ideas-of-the-kinetic-particle-theory|kinetic particle theory]]"),
    ]

    sec1_start = text.find("## 1 States of matter")
    sec1_end = text.find("## 2 Atoms")
    if sec1_start != -1 and sec1_end != -1:
        sec1 = text[sec1_start:sec1_end]
        for plain, linked in SECTION1_LINKS:
            sec1 = sec1.replace(plain, linked)
        text = text[:sec1_start] + sec1 + text[sec1_end:]

    # Inject wikilinks into Section 2 (Atoms, elements and compounds).
    SECTION2_LINKS = [
        # 2.1
        ("differences between elements, compounds and mixtures",
         "differences between [[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|elements]], [[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|compounds]] and [[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|mixtures]] (see [[Elements, Compounds and Mixtures]])"),
        # 2.2
        ("structure of the atom as a central nucleus containing neutrons and protons surrounded by electrons in shells",
         "structure of the [[Atom (Chemistry)#structure-of-the-atom|atom]] as a central [[Nucleus (Chemistry)#the-nucleus|nucleus]] containing [[Neutron#properties-of-the-neutron|neutrons]] and [[Proton#properties-of-the-proton|protons]] surrounded by [[Electron#properties-of-the-electron|electrons]] in [[Electronic Configuration#shell-filling-rules-elements-1-20|shells]]"),
        ("relative charges and relative masses of a proton, a neutron and an electron",
         "relative charges and relative masses of a [[Proton#properties-of-the-proton|proton]], a [[Neutron#properties-of-the-neutron|neutron]] and an [[Electron#properties-of-the-electron|electron]]"),
        ("Define proton number / atomic number as",
         "Define [[Atomic Number (Proton Number)#the-meaning-of-atomic-number|proton number / atomic number]] as"),
        ("Define mass number / nucleon number as",
         "Define [[Mass Number (Nucleon Number)#definition-and-notation|mass number / nucleon number]] as"),
        ("Determine the electronic configuration of elements and their ions",
         "Determine the [[Electronic Configuration#shell-filling-rules-elements-1-20|electronic configuration]] of elements and their ions"),
        ("(a) Group VIII noble gases have a full outer shell",
         "(a) [[Group 0 Noble Gases#why-noble-gases-are-unreactive|Group VIII noble gases]] have a full outer shell"),
        ("(b) the number of outer shell electrons is equal to the group number in Groups I to VII",
         "(b) the number of [[Group Number#the-rule-outer-electrons--group-number|outer shell electrons]] is equal to the [[Group Number#the-rule-outer-electrons--group-number|group number]] in Groups I to VII"),
        ("(c) the number of occupied electron shells is equal to the period number",
         "(c) the number of occupied [[Electronic Configuration#shell-filling-rules-elements-1-20|electron shells]] is equal to the [[Period Number#periods-1-2-and-3|period number]]"),
        # 2.3
        ("Define isotopes as",
         "Define [[Isotope|isotopes]] as"),
        ("Interpret and use symbols for atoms",
         "Interpret and use [[Nuclide Notation#anatomy-of-the-symbol|symbols for atoms]]"),
        ("State that isotopes of the same element have the same chemical properties",
         "State that [[Isotope|isotopes]] of the same element have the same chemical properties"),
        ("Calculate the relative atomic mass of an element",
         "Calculate the [[Relative Atomic Mass#definition-and-formula|relative atomic mass]] of an element"),
        # 2.4
        ("formation of positive ions, known as cations, and negative ions, known as anions",
         "formation of [[Positive Ions (Cations)#formation-of-positive-ions-cations|positive ions, known as cations]], and [[Negative Ions (Anions)#formation-of-negative-ions-anions|negative ions, known as anions]]"),
        ("State that an ionic bond is a strong electrostatic attraction between oppositely charged ions",
         "State that an [[Ionic Bond#definition|ionic bond]] is a strong [[Electrostatic Attraction#the-force-between-opposite-charges|electrostatic attraction]] between oppositely charged ions"),
        ("formation of ionic bonds between elements from Group I and Group VII, including the use of dot-and-cross diagrams",
         "formation of [[Ionic Bond#definition|ionic bonds]] between elements from [[Group 1 Alkali Metals#chemical-properties-and-reactivity|Group I]] and [[Group 7 Halogens#reactivity-trend|Group VII]], including the use of [[Dot-and-Cross Diagram#key-conventions|dot-and-cross diagrams]]"),
        ("Describe the properties of ionic compounds:",
         "Describe the properties of [[Ionic Compounds#properties-of-ionic-compounds|ionic compounds]]:"),
        ("giant lattice structure of ionic compounds as a regular arrangement of alternating positive and negative ions",
         "[[Giant Ionic Lattice#the-sodium-chloride-lattice|giant lattice structure]] of ionic compounds as a regular arrangement of alternating positive and negative ions"),
        ("formation of ionic bonds between ions of metallic and non-metallic elements, including the use of dot-and-cross diagrams",
         "formation of [[Ionic Bond#how-an-ionic-bond-forms-electron-transfer|ionic bonds]] between ions of metallic and non-metallic elements, including the use of [[Dot-and-Cross Diagram#dot-and-cross-diagrams-for-ionic-compounds|dot-and-cross diagrams]]"),
        ("Explain in terms of structure and bonding the properties of ionic compounds:",
         "Explain in terms of structure and bonding the properties of [[Ionic Compounds#properties-of-ionic-compounds|ionic compounds]]:"),
        # 2.5
        ("State that a covalent bond is formed when a pair of electrons is shared between two atoms leading to noble gas electronic configurations",
         "State that a [[Covalent Bond#definition|covalent bond]] is formed when a pair of electrons is shared between two atoms leading to [[Noble Gas Electronic Configuration#the-octet-rule-neonargon-configuration|noble gas electronic configurations]]"),
        ("formation of covalent bonds in simple molecules, including H2, Cl 2, H2O, CH4, NH3 and HCl. Use dot-and-cross diagrams",
         "formation of covalent bonds in [[Simple Molecules#common-simple-molecules-at-igcse|simple molecules]], including [[Simple Molecules#common-simple-molecules-at-igcse|H2]], [[Simple Molecules#common-simple-molecules-at-igcse|Cl2]], [[Simple Molecules#common-simple-molecules-at-igcse|H2O]], [[Simple Molecules#common-simple-molecules-at-igcse|CH4]], [[Simple Molecules#common-simple-molecules-at-igcse|NH3]] and [[Simple Molecules#common-simple-molecules-at-igcse|HCl]]. Use [[Dot-and-Cross Diagram#dot-and-cross-diagrams-for-covalent-molecules|dot-and-cross diagrams]]"),
        ("Describe in terms of structure and bonding the properties of simple molecular compounds:",
         "Describe in terms of structure and bonding the properties of [[Simple Molecular Compounds#properties-of-simple-molecular-compounds|simple molecular compounds]]:"),
        ("formation of covalent bonds in simple molecules, including CH3OH, C2H4, O2, CO2 and N2. Use dot-and-cross diagrams",
         "formation of covalent bonds in [[Simple Molecules#common-simple-molecules-at-igcse|simple molecules]], including [[Simple Molecules#common-simple-molecules-at-igcse|CH3OH]], [[Simple Molecules#common-simple-molecules-at-igcse|C2H4]], [[Simple Molecules#common-simple-molecules-at-igcse|O2]], [[Simple Molecules#common-simple-molecules-at-igcse|CO2]] and [[Simple Molecules#common-simple-molecules-at-igcse|N2]]. Use [[Dot-and-Cross Diagram#dot-and-cross-diagrams-for-covalent-molecules|dot-and-cross diagrams]]"),
        ("Explain in terms of structure and bonding the properties of simple molecular compounds:",
         "Explain in terms of structure and bonding the properties of [[Simple Molecular Compounds#properties-of-simple-molecular-compounds|simple molecular compounds]]:"),
        ("in terms of weak intermolecular forces",
         "in terms of weak [[Simple Molecular Compounds#properties-of-simple-molecular-compounds|intermolecular forces]]"),
        # 2.6
        ("Describe the giant covalent structures of graphite and diamond",
         "Describe the [[Giant Structures#overview-of-giant-structures|giant covalent structures]] of [[Graphite#structure|graphite]] and [[Diamond#structure|diamond]]"),
        ("Relate the structures and bonding of graphite and diamond to their uses",
         "Relate the structures and bonding of [[Graphite#structure-property-use-table|graphite]] and [[Diamond#structure-property-use-table|diamond]] to their uses"),
        ("Describe the giant covalent structure of silicon(IV) oxide, SiO2",
         "Describe the giant covalent structure of [[Silicon(IV) Oxide#structure|silicon(IV) oxide, SiO2]]"),
        ("similarity in properties between diamond and silicon(IV) oxide",
         "similarity in properties between [[Diamond#comparison-with-graphite-and-siliconiv-oxide|diamond]] and [[Silicon(IV) Oxide#comparison-with-diamond|silicon(IV) oxide]]"),
        # 2.7
        ("Describe metallic bonding as the electrostatic attraction between the positive ions in a giant metallic lattice and a ‘sea’ of delocalised electrons",
         "Describe [[Metallic Bonding#what-is-metallic-bonding|metallic bonding]] as the [[Electrostatic Attraction#role-in-metallic-bonding|electrostatic attraction]] between the positive ions in a [[Giant Metallic Lattice#structure-of-the-lattice|giant metallic lattice]] and a ‘sea’ of [[Metallic Bonding#what-is-metallic-bonding|delocalised electrons]]"),
        ("(b) malleability and ductility",
         "(b) [[Malleability#particle-level-explanation|malleability]] and [[Ductility#particle-level-explanation|ductility]]"),
    ]

    sec2_start = text.find("## 2 Atoms, elements and compounds")
    sec2_end = text.find("## 3 Stoichiometry")
    if sec2_start != -1 and sec2_end != -1:
        sec2 = text[sec2_start:sec2_end]
        for plain, linked in SECTION2_LINKS:
            sec2 = sec2.replace(plain, linked)
        text = text[:sec2_start] + sec2 + text[sec2_end:]

    # Inject wikilinks into Section 3 (Stoichiometry).
    SECTION3_LINKS = [
        # 3.1 Formulae
        ("Define the molecular formula of a compound as the number and type of different atoms in one molecule",
         "Define the [[Empirical and Molecular Formulae#definitions|molecular formula]] of a compound as the number and type of different atoms in one molecule"),
        ("Define the empirical formula of a compound as the simplest whole number ratio of the different atoms or ions in a compound",
         "Define the [[Empirical and Molecular Formulae#definitions|empirical formula]] of a compound as the simplest whole number ratio of the different atoms or ions in a compound"),
        ("Construct word equations and symbol equations to show how reactants form products, including state symbols",
         "Construct [[Chemical Equations and Calculations#balancing-chemical-equations|word equations and symbol equations]] to show how reactants form products, including [[State Symbols#the-four-state-symbols|state symbols]]"),
        ("Construct symbol equations with state symbols, including ionic equations",
         "Construct [[Chemical Equations and Calculations#balancing-chemical-equations|symbol equations]] with [[State Symbols#state-symbols-in-chemical-equations|state symbols]], including [[Ionic Equations and Half Equations#why-ionic-equations|ionic equations]]"),
        ("Deduce the symbol equation with state symbols for a chemical reaction, given relevant information",
         "Deduce the [[Chemical Equations and Calculations#balancing-chemical-equations|symbol equation]] with [[State Symbols#state-symbols-in-chemical-equations|state symbols]] for a chemical reaction, given relevant information"),
        ("Deduce the formula of an ionic compound from the relative numbers of the ions present",
         "Deduce the [[Ionic Compounds#properties-of-ionic-compounds|formula of an ionic compound]] from the relative numbers of the ions present"),
        # 3.2 Relative masses
        ("Describe relative atomic mass, Ar, as the average mass of the isotopes of an element compared to 1/12th of the mass of an atom of 12C",
         "Describe [[Relative Atomic Mass#definition-and-formula|relative atomic mass, Ar]], as the average mass of the isotopes of an element compared to 1/12th of the mass of an atom of 12C"),
        ("Define relative molecular mass, Mr, as the sum of the relative atomic masses. Relative formula mass, Mr, will be used for ionic compounds",
         "Define [[Relative Molecular Mass#calculating-relative-molecular-mass|relative molecular mass, Mr]], as the sum of the relative atomic masses. [[Relative Masses and Moles#relative-molecular--formula-mass-mr|Relative formula mass, Mr]], will be used for ionic compounds"),
        ("Calculate reacting masses in simple proportions. Calculations will not involve the mole concept",
         "Calculate [[Reacting Masses#the-principle-of-reacting-masses|reacting masses]] in simple proportions. Calculations will not involve the [[Mole|mole concept]]"),
        # 3.3 The mole and Avogadro constant
        ("State that concentration can be measured in g / dm3 or mol / dm3",
         "State that [[Concentration and Gas Volumes#concentration|concentration]] can be measured in g / dm3 or mol / dm3"),
        ("State that the mole, mol, is the unit of amount of substance and that one mole contains 6.02",
         "State that the [[Mole|mole, mol]], is the unit of amount of substance and that one mole contains 6.02"),
        ("this number is the Avogadro constant",
         "this number is the [[Avogadro Constant#definition|Avogadro constant]]"),
        ("Use the molar gas volume, taken as 24 dm3 at room temperature and pressure, r.t.p., in calculations involving gases",
         "Use the [[Molar Gas Volume#definition|molar gas volume]], taken as 24 dm3 at room temperature and pressure, r.t.p., in calculations involving gases"),
        ("Calculate stoichiometric reacting masses, limiting reactants, volumes of gases at r.t.p., volumes of solutions and concentrations of solutions expressed in g / dm3 and mol / dm3, including conversion between cm3 and dm3",
         "Calculate stoichiometric [[Reacting Masses|reacting masses]], [[Reacting Masses#limiting-reactants|limiting reactants]], volumes of gases at r.t.p., volumes of solutions and [[Concentration and Gas Volumes#concentration|concentrations of solutions]] expressed in g / dm3 and mol / dm3, including conversion between cm3 and dm3"),
        ("Use experimental data from a titration to calculate the moles of solute, or the concentration or volume of a solution",
         "Use experimental data from a [[Titration|titration]] to calculate the moles of solute, or the [[Concentration and Gas Volumes|concentration or volume of a solution]]"),
        ("Calculate empirical formulae and molecular formulae, given appropriate data",
         "Calculate [[Empirical and Molecular Formulae#definitions|empirical formulae and molecular formulae]], given appropriate data"),
        ("Calculate percentage yield, percentage composition by mass and percentage purity, given appropriate data",
         "Calculate [[Percentage Yield and Purity#percentage-yield|percentage yield]], [[Percentage Composition by Mass#the-formula|percentage composition by mass]] and [[Percentage Yield and Purity#percentage-purity|percentage purity]], given appropriate data"),
        # generic replacements last
        ("empirical formula", "[[Empirical and Molecular Formulae#definitions|empirical formula]]"),
        ("molecular formula", "[[Empirical and Molecular Formulae#definitions|molecular formula]]"),
    ]

    sec3_start = text.find("## 3 Stoichiometry")
    sec3_end = text.find("## 4 Electrochemistry")
    if sec3_start != -1 and sec3_end != -1:
        sec3 = text[sec3_start:sec3_end]
        for plain, linked in SECTION3_LINKS:
            sec3 = sec3.replace(plain, linked)
        text = text[:sec3_start] + sec3 + text[sec3_end:]

    # Inject wikilinks into Section 4 (Electrochemistry).
    SECTION4_LINKS = [
        # 4.1 Electrolysis
        ("Define electrolysis as the decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current",
         "Define [[Electrolysis#what-is-electrolysis|electrolysis]] as the decomposition of an ionic compound, when molten or in aqueous solution, by the passage of an electric current"),
        ("Identify in simple electrolytic cells:",
         "Identify in simple [[Electrolysis#key-terminology|electrolytic cells]]:"),
        ("the anode as the positive electrode",
         "the [[Anode#charge-and-role-in-electrolysis|anode]] as the positive [[Electrode|electrode]]"),
        ("the cathode as the negative electrode",
         "the [[Cathode#role-of-the-cathode-in-electrolysis|cathode]] as the negative [[Electrode|electrode]]"),
        ("the electrolyte as the molten or aqueous substance that undergoes electrolysis",
         "the [[Electrolyte|electrolyte]] as the molten or aqueous substance that undergoes electrolysis"),
        ("Describe the transfer of charge during electrolysis to include:",
         "Describe the transfer of charge during [[Electrolysis#how-electrolysis-works|electrolysis]] to include:"),
        ("the movement of electrons in the external circuit",
         "the movement of [[Electron#properties-of-the-electron|electrons]] in the external circuit"),
        ("the loss or gain of electrons at the electrodes",
         "the loss or gain of electrons at the [[Electrode|electrodes]]"),
        ("the movement of ions in the electrolyte",
         "the movement of [[Ion|ions]] in the [[Electrolyte|electrolyte]]"),
        ("Identify the products formed at the electrodes and describe the observations made during the electrolysis of:",
         "Identify the products formed at the [[Electrode|electrodes]] and describe the observations made during the [[Electrolysis|electrolysis]] of:"),
        ("molten lead(II) bromide",
         "[[Molten Lead(II) Bromide (Electrolysis)#electrode-reactions|molten lead(II) bromide]]"),
        ("concentrated aqueous sodium chloride",
         "[[Electrolysis of Brine#ions-present-in-brine|concentrated aqueous sodium chloride]]"),
        ("dilute sulfuric acid using inert electrodes made of platinum or carbon / graphite",
         "[[Electrolysis#electrolysis-of-aqueous-solutions|dilute sulfuric acid]] using [[Inert Electrode#why-use-inert-electrodes|inert electrodes]] made of platinum or carbon / graphite"),
        ("State that metals or hydrogen are formed at the cathode and that non-metals (other than hydrogen) are formed at the anode",
         "State that metals or hydrogen are formed at the [[Cathode#molten-electrolytes-the-metal-is-always-produced|cathode]] and that non-metals (other than hydrogen) are formed at the [[Anode#products-at-the-anode-molten-electrolytes|anode]]"),
        ("Predict the identity of the products at each electrode for the electrolysis of a binary compound in the molten state",
         "Predict the identity of the products at each [[Electrode|electrode]] for the [[Electrolysis|electrolysis]] of a [[Electrolysis of Molten Binary Compounds|binary compound in the molten state]]"),
        ("State that metal objects are electroplated to improve their appearance and resistance to corrosion",
         "State that metal objects are [[Electroplating#how-electroplating-works|electroplated]] to improve their appearance and resistance to corrosion"),
        ("Describe how metals are electroplated",
         "Describe how metals are [[Electroplating#how-electroplating-works|electroplated]]"),
        ("Identify the products formed at the electrodes and describe the observations made during the electrolysis of aqueous copper(II) sulfate",
         "Identify the products formed at the [[Electrode|electrodes]] and describe the observations made during the [[Electrolysis of Copper(II) Sulfate#with-inert-electrodes-carbongraphiteplatinum|electrolysis of aqueous copper(II) sulfate]]"),
        ("Predict the identity of the products at each electrode for the electrolysis of a halide compound in dilute or concentrated aqueous solution",
         "Predict the identity of the products at each [[Electrode|electrode]] for the [[Electrolysis of Halide Compounds|electrolysis of a halide compound]] in dilute or concentrated aqueous solution"),
        ("Construct ionic half-equations for reactions at the anode (to show oxidation) and at the cathode (to show reduction)",
         "Construct [[Ionic Equations and Half Equations#half-equations-electron-transfer|ionic half-equations]] for reactions at the [[Anode#half-equations-at-the-anode|anode]] (to show [[Oxidation|oxidation]]) and at the [[Cathode#reduction-at-the-cathode|cathode]] (to show [[Reduction|reduction]])"),
        # 4.2 Hydrogen-oxygen fuel cells
        ("State that a hydrogen-oxygen fuel cell uses hydrogen and oxygen to produce electricity with water as the only chemical product",
         "State that a [[Fuel Cells#the-hydrogen-oxygen-fuel-cell|hydrogen-oxygen fuel cell]] uses hydrogen and oxygen to produce electricity with water as the only chemical product"),
        ("Describe the advantages and disadvantages of using hydrogen-oxygen fuel cells in comparison with gasoline / petrol engines in vehicles",
         "Describe the advantages and disadvantages of using [[Fuel Cells#advantages-of-hydrogen-fuel-cells|hydrogen-oxygen fuel cells]] in comparison with gasoline / petrol engines in vehicles"),
        # generic replacements last
        ("electrolysis", "[[Electrolysis#what-is-electrolysis|electrolysis]]"),
        ("electroplated", "[[Electroplating#how-electroplating-works|electroplated]]"),
    ]

    sec4_start = text.find("## 4 Electrochemistry")
    sec4_end = text.find("## 5 Chemical energetics")
    if sec4_start != -1 and sec4_end != -1:
        sec4 = text[sec4_start:sec4_end]
        for plain, linked in SECTION4_LINKS:
            sec4 = sec4.replace(plain, linked)
        text = text[:sec4_start] + sec4 + text[sec4_end:]

    # Inject wikilinks into Section 5 (Chemical energetics).
    SECTION5_LINKS = [
        # 5.1 Exothermic and endothermic reactions
        ("State that an exothermic reaction transfers thermal energy to the surroundings leading to an increase in the temperature of the surroundings",
         "State that an [[Exothermic Reaction#characteristics-of-exothermic-reactions|exothermic reaction]] transfers thermal energy to the surroundings leading to an increase in the temperature of the surroundings"),
        ("State that an endothermic reaction takes in thermal energy from the surroundings leading to a decrease in the temperature of the surroundings",
         "State that an [[Endothermic Reaction#characteristics-of-endothermic-reactions|endothermic reaction]] takes in thermal energy from the surroundings leading to a decrease in the temperature of the surroundings"),
        ("Interpret reaction pathway diagrams showing exothermic and endothermic reactions",
         "Interpret [[Reaction Pathway Diagram#axes-and-key-features|reaction pathway diagrams]] showing [[Exothermic Reaction#reaction-pathway-diagram|exothermic]] and [[Endothermic Reaction#reaction-pathway-diagram|endothermic]] reactions"),
        ("State that the transfer of thermal energy during a reaction is called the enthalpy change, ∆H, of the reaction. ∆H is negative for exothermic reactions and positive for endothermic reactions",
         "State that the transfer of thermal energy during a reaction is called the [[Enthalpy Change#definition-and-sign-convention|enthalpy change, ∆H]], of the reaction. ∆H is negative for [[Exothermic Reaction#reaction-pathway-diagram|exothermic reactions]] and positive for [[Endothermic Reaction#reaction-pathway-diagram|endothermic reactions]]"),
        ("Define activation energy, Ea, as the minimum energy that colliding particles must have to react",
         "Define [[Activation Energy|activation energy, Ea]], as the minimum energy that colliding particles must have to react"),
        ("Draw and label reaction pathway diagrams for exothermic and endothermic reactions using information provided, to include:",
         "Draw and label [[Reaction Pathway Diagram|reaction pathway diagrams]] for [[Exothermic Reaction#reaction-pathway-diagram|exothermic]] and [[Endothermic Reaction#reaction-pathway-diagram|endothermic]] reactions using information provided, to include:"),
        ("enthalpy change of the reaction, ∆H",
         "[[Enthalpy Change#definition-and-sign-convention|enthalpy change of the reaction, ∆H]]"),
        ("activation energy, Ea",
         "[[Activation Energy|activation energy, Ea]]"),
        ("State that bond breaking is an endothermic process and bond making is an exothermic process and explain the enthalpy change of a reaction in terms of bond breaking and bond making",
         "State that [[Bond Breaking#why-is-bond-breaking-endothermic|bond breaking]] is an endothermic process and [[Bond Making#why-is-bond-making-exothermic|bond making]] is an exothermic process and explain the [[Enthalpy Change#bond-breaking-and-bond-making|enthalpy change of a reaction]] in terms of [[Bond Breaking#why-is-bond-breaking-endothermic|bond breaking]] and [[Bond Making#why-is-bond-making-exothermic|bond making]]"),
        ("Calculate the enthalpy change of a reaction using bond energies",
         "Calculate the [[Enthalpy Change#bond-energy-calculations|enthalpy change of a reaction]] using [[Bond Energy Calculations|bond energies]]"),
        # generic replacements last
        ("exothermic reaction", "[[Exothermic Reaction#characteristics-of-exothermic-reactions|exothermic reaction]]"),
        ("endothermic reaction", "[[Endothermic Reaction#characteristics-of-endothermic-reactions|endothermic reaction]]"),
    ]

    sec5_start = text.find("## 5 Chemical energetics")
    sec5_end = text.find("## 6 Chemical reactions")
    if sec5_start != -1 and sec5_end != -1:
        sec5 = text[sec5_start:sec5_end]
        for plain, linked in SECTION5_LINKS:
            sec5 = sec5.replace(plain, linked)
        text = text[:sec5_start] + sec5 + text[sec5_end:]

    # Inject wikilinks into Section 6 (Chemical reactions).
    SECTION6_LINKS = [
        # 6.1 Physical and chemical changes
        ("Identify physical and chemical changes, and describe the differences between them",
         "Identify [[Physical Change#definition-and-key-characteristics|physical]] and [[Chemical Change#what-defines-a-chemical-change|chemical changes]], and describe the differences between them"),
        # 6.2 Rate of reaction
        ("Describe the effect on the rate of reaction of:",
         "Describe the effect on the [[Rates of Reaction#what-is-rate-of-reaction|rate of reaction]] of:"),
        ("changing the concentration of solutions",
         "changing the [[Concentration and Gas Volumes#concentration|concentration]] of solutions"),
        ("changing the pressure of gases",
         "changing the [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|pressure of gases]]"),
        ("changing the surface area of solids",
         "changing the [[Surface Area and Rate#definition-and-principle|surface area of solids]]"),
        ("changing the temperature",
         "changing the [[Rates of Reaction#factors-affecting-rate-of-reaction|temperature]]"),
        ("adding or removing a catalyst, including enzymes",
         "adding or removing a [[Catalyst|catalyst]], including [[Enzyme|enzymes]]"),
        ("State that a catalyst increases the rate of a reaction and is unchanged at the end of a reaction",
         "State that a [[Catalyst|catalyst]] increases the rate of a reaction and is unchanged at the end of a reaction"),
        ("Describe practical methods for investigating the rate of a reaction including change in mass of a reactant or a product and the formation of a gas",
         "Describe practical methods for investigating the [[Rates of Reaction#measuring-rates-of-reaction|rate of a reaction]] including change in mass of a reactant or a product and the formation of a gas"),
        ("Interpret data, including graphs, from rate of reaction experiments",
         "Interpret data, including graphs, from [[Rates of Reaction#interpreting-graphs|rate of reaction]] experiments"),
        ("Describe collision theory in terms of:",
         "Describe [[Collision Theory#the-three-requirements-for-a-reaction|collision theory]] in terms of:"),
        ("number of particles per unit volume",
         "[[Collision Theory#how-collision-theory-explains-rate-factors|number of particles per unit volume]]"),
        ("frequency of collisions between particles",
         "[[Collision Theory#how-collision-theory-explains-rate-factors|frequency of collisions between particles]]"),
        ("kinetic energy of particles",
         "[[Kinetic Particle Theory#main-ideas-of-the-kinetic-particle-theory|kinetic energy of particles]]"),
        ("Describe and explain the effect on the rate of reaction of:",
         "Describe and explain the effect on the [[Rates of Reaction|rate of reaction]] of:"),
        ("using collision theory",
         "using [[Collision Theory#how-collision-theory-explains-rate-factors|collision theory]]"),
        ("State that a catalyst decreases the activation energy, Ea, of a reaction",
         "State that a [[Catalyst|catalyst]] decreases the [[Activation Energy|activation energy, Ea]], of a reaction"),
        ("Evaluate practical methods for investigating the rate of a reaction including change in mass of a reactant or a product and the formation of a gas",
         "Evaluate practical methods for investigating the [[Rates of Reaction#key-practical-methods|rate of a reaction]] including change in mass of a reactant or a product and the formation of a gas"),
        # 6.3 Reversible reactions and equilibrium
        ("State that some chemical reactions are reversible as shown by the symbol ⇌",
         "State that some chemical reactions are [[Reversible Reactions#reversible-reactions|reversible]] as shown by the symbol ⇌"),
        ("Describe how changing the conditions can change the direction of a reversible reaction for:",
         "Describe how changing the conditions can change the direction of a [[Reversible Reactions#reversible-reactions|reversible reaction]] for:"),
        ("the effect of heat on hydrated compounds",
         "the effect of heat on [[Hydrated|hydrated compounds]]"),
        ("the addition of water to anhydrous compounds limited to copper(II) sulfate and cobalt(II) chloride",
         "the addition of water to [[Anhydrous|anhydrous compounds]] limited to copper(II) sulfate and cobalt(II) chloride"),
        ("State that a reversible reaction in a closed system is at equilibrium when:",
         "State that a [[Reversible Reactions|reversible reaction]] in a [[Closed System#definition|closed system]] is at [[Dynamic Equilibrium#definition-and-key-characteristics|equilibrium]] when:"),
        ("the rate of the forward reaction is equal to the rate of the reverse reaction",
         "the rate of the forward reaction is equal to the rate of the reverse reaction"),
        ("the concentrations of reactants and products are no longer changing",
         "the concentrations of reactants and products are no longer changing"),
        ("Predict and explain, for a reversible reaction, how the position of equilibrium is affected by:",
         "Predict and explain, for a [[Reversible Reactions|reversible reaction]], how the position of [[Dynamic Equilibrium#le-chateliers-principle|equilibrium]] is affected by:"),
        ("changing temperature",
         "changing [[Rates of Reaction|temperature]]"),
        ("changing pressure",
         "changing [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|pressure]]"),
        ("changing concentration",
         "changing [[Concentration and Gas Volumes#concentration|concentration]]"),
        ("using a catalyst",
         "using a [[Catalyst|catalyst]]"),
        ("State the symbol equation for the production of ammonia in the Haber process, N2(g) + 3H2(g) ⇌ 2NH3(g)",
         "State the symbol equation for the production of ammonia in the [[Haber Process and Ammonia#content|Haber process]], N2(g) + 3H2(g) ⇌ 2NH3(g)"),
        ("State the sources of the hydrogen (methane) and nitrogen (air) in the Haber process",
         "State the sources of the hydrogen (methane) and nitrogen (air) in the [[Haber Process and Ammonia#content|Haber process]]"),
        ("State the typical conditions in the Haber process as 450 °C, 20 000 kPa / 200 atm and an iron catalyst",
         "State the typical conditions in the [[Haber Process and Ammonia#content|Haber process]] as 450 °C, 20 000 kPa / 200 atm and an iron [[Catalyst|catalyst]]"),
        ("State the symbol equation for the conversion of sulfur dioxide to sulfur trioxide in the Contact process, 2SO2(g) + O2(g) ⇌ 2SO3(g)",
         "State the symbol equation for the conversion of sulfur dioxide to sulfur trioxide in the [[Contact Process#the-key-reaction-formation-of-sulfur-trioxide|Contact process]], 2SO2(g) + O2(g) ⇌ 2SO3(g)"),
        ("State the sources of the sulfur dioxide (burning sulfur or roasting sulfide ores) and oxygen (air) in the Contact process",
         "State the sources of the sulfur dioxide (burning sulfur or roasting sulfide ores) and oxygen (air) in the [[Contact Process#raw-materials-and-their-sources|Contact process]]"),
        ("State the typical conditions for the conversion of sulfur dioxide to sulfur trioxide in the Contact process as 450 °C, 200 kPa / 2 atm and a vanadium(V) oxide catalyst",
         "State the typical conditions for the conversion of sulfur dioxide to sulfur trioxide in the [[Contact Process#choice-of-conditions|Contact process]] as 450 °C, 200 kPa / 2 atm and a vanadium(V) oxide [[Catalyst|catalyst]]"),
        ("Explain, in terms of rate of reaction and position of equilibrium, why the typical conditions stated are used in the Haber process and in the Contact process, including safety considerations and economics",
         "Explain, in terms of [[Rates of Reaction|rate of reaction]] and position of [[Dynamic Equilibrium|equilibrium]], why the typical conditions stated are used in the [[Haber Process and Ammonia|Haber process]] and in the [[Contact Process|Contact process]], including safety considerations and economics"),
        # 6.4 Redox
        ("Use a Roman numeral to indicate the oxidation number of an element in a compound",
         "Use a Roman numeral to indicate the [[Oxidation Number#definition-and-purpose|oxidation number]] of an element in a compound"),
        ("Define redox reactions as involving simultaneous oxidation and reduction",
         "Define [[Redox Reactions#definitions-of-oxidation-and-reduction|redox reactions]] as involving simultaneous [[Oxidation|oxidation]] and [[Reduction|reduction]]"),
        ("Define oxidation as gain of oxygen and reduction as loss of oxygen",
         "Define [[Oxidation|oxidation]] as gain of oxygen and [[Reduction|reduction]] as loss of oxygen"),
        ("Identify redox reactions as reactions involving gain and loss of oxygen",
         "Identify [[Redox Reactions#definitions-of-oxidation-and-reduction|redox reactions]] as reactions involving gain and loss of oxygen"),
        ("Identify oxidation and reduction in redox reactions",
         "Identify [[Oxidation|oxidation]] and [[Reduction|reduction]] in [[Redox Reactions#identifying-oxidation-and-reduction-in-reactions|redox reactions]]"),
        ("Define oxidation in terms of:",
         "Define [[Oxidation|oxidation]] in terms of:"),
        ("loss of electrons",
         "[[OIL RIG|loss of electrons]]"),
        ("an increase in oxidation number",
         "an increase in [[Oxidation Number#oxidation-and-reduction-in-terms-of-oxidation-number|oxidation number]]"),
        ("Define reduction in terms of:",
         "Define [[Reduction|reduction]] in terms of:"),
        ("gain of electrons",
         "[[OIL RIG|gain of electrons]]"),
        ("a decrease in oxidation number",
         "a decrease in [[Oxidation Number#oxidation-and-reduction-in-terms-of-oxidation-number|oxidation number]]"),
        ("Identify redox reactions as reactions involving gain and loss of electrons",
         "Identify [[Redox Reactions#definitions-of-oxidation-and-reduction|redox reactions]] as reactions involving gain and loss of [[Electron#properties-of-the-electron|electrons]]"),
        ("Identify redox reactions by changes in oxidation number using:",
         "Identify [[Redox Reactions|redox reactions]] by changes in [[Oxidation Number#rules-for-assigning-oxidation-numbers|oxidation number]] using:"),
        ("the oxidation number of elements in their uncombined state is zero",
         "the [[Oxidation Number#rules-for-assigning-oxidation-numbers|oxidation number]] of elements in their uncombined state is zero"),
        ("the oxidation number of a monatomic ion is the same as the charge on the ion",
         "the [[Oxidation Number#rules-for-assigning-oxidation-numbers|oxidation number]] of a monatomic ion is the same as the charge on the ion"),
        ("the sum of the oxidation numbers in a compound is zero",
         "the sum of the [[Oxidation Number#rules-for-assigning-oxidation-numbers|oxidation numbers]] in a compound is zero"),
        ("the sum of the oxidation numbers in an ion is equal to the charge on the ion",
         "the sum of the [[Oxidation Number#rules-for-assigning-oxidation-numbers|oxidation numbers]] in an ion is equal to the charge on the ion"),
        ("Identify redox reactions by the colour changes involved when using acidified aqueous potassium manganate(VII) or aqueous potassium iodide",
         "Identify [[Redox Reactions#tests-for-oxidising-and-reducing-agents|redox reactions]] by the colour changes involved when using acidified aqueous [[Potassium Manganate(VII)#colour-change-purple-to-colourless|potassium manganate(VII)]] or aqueous [[Potassium Iodide|potassium iodide]]"),
        ("Define an oxidising agent as a substance that oxidises another substance and is itself reduced",
         "Define an [[Oxidising Agent#definition-and-core-principle|oxidising agent]] as a substance that oxidises another substance and is itself reduced"),
        ("Define a reducing agent as a substance that reduces another substance and is itself oxidised",
         "Define a [[Reducing Agent#1-definition-and-core-principle|reducing agent]] as a substance that reduces another substance and is itself oxidised"),
        ("Identify oxidising agents and reducing agents in redox reactions",
         "Identify [[Oxidising Agent#how-to-identify-an-oxidising-agent|oxidising agents]] and [[Reducing Agent#4-identifying-the-reducing-agent-in-an-equation|reducing agents]] in [[Redox Reactions#oxidising-agents-and-reducing-agents|redox reactions]]"),
        # generic replacements last
        ("oxidation number", "[[Oxidation Number#definition-and-purpose|oxidation number]]"),
    ]

    sec6_start = text.find("## 6 Chemical reactions")
    sec6_end = text.find("## 7 Acids, bases and salts")
    if sec6_start != -1 and sec6_end != -1:
        sec6 = text[sec6_start:sec6_end]
        for plain, linked in SECTION6_LINKS:
            sec6 = sec6.replace(plain, linked)
        text = text[:sec6_start] + sec6 + text[sec6_end:]

    Path(out_path).parent.mkdir(parents=True, exist_ok=True)
    Path(out_path).write_text(text)

    print(f"Done: {out_path}")
    print(f"  {len(text.splitlines())} lines, {len(text)} chars")

if __name__ == "__main__":
    main()
