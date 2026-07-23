#!/usr/bin/env python3
"""
Add heading anchor fragments (#section-heading) to wikilinks in the IGCSE Chemistry index.
Each wikilink gets an anchor pointing to the most relevant ## heading within the target page.

Usage: python3 add_wikilink_anchors.py
"""

import re
from pathlib import Path

INDEX_PATH = Path(__file__).resolve().parent.parent / 'SmartNexus Ecosystems' / 'Smart Study Wiki' / 'wiki' / 'IGCSE Chemistry' / 'IGCSE-Chem-Index.md'

with open(INDEX_PATH, 'r') as f:
    content = f.read()

# ============================================================
# Replacement map: (old_string, new_string)
# Each old_string is a unique wikilink occurrence in the index.
# We include enough surrounding context to make each match unique.
# ============================================================

replacements = [
    # ========================
    # SECTION 1.1 — Solids, Liquids and Gases
    # ========================

    # Line 37: State the distinguishing properties of solids, liquids and gases
    ('[[Solid|solids]]',
     '[[Solid#properties-of-solids|solids]]'),

    ('[[Liquid|liquids]]',
     '[[Liquid#properties-of-liquids|liquids]]'),

    ('[[Gas|gases]]',
     '[[Gas#properties-of-gases|gases]]'),

    # Line 38: Describe the structures ... particle separation, arrangement and motion
    ('[[Particle Arrangement|particle separation, arrangement and motion]]',
     '[[Particle Arrangement#comparison-of-the-three-states|particle separation, arrangement and motion]]'),

    # Line 39: Describe changes of state — melting, boiling, evaporating, freezing, condensing
    ('[[Melting|melting]]',
     '[[Melting#melting-as-a-change-of-state|melting]]'),

    ('[[Boiling|boiling]]',
     '[[Boiling#boiling-as-a-change-of-state|boiling]]'),

    ('[[Evaporation|evaporating]]',
     '[[Evaporation#evaporation-as-a-change-of-state|evaporating]]'),

    ('[[Freezing|freezing]]',
     '[[Freezing#freezing-as-a-change-of-state|freezing]]'),

    ('[[Condensation|condensing]]',
     '[[Condensation#condensation-as-a-change-of-state|condensing]]'),

    # Line 40: effects of temperature and pressure on the volume of a gas
    # First occurrence of Gas Laws (in line 40 context)
    ('Describe the effects of temperature and pressure on the [[Gas Laws|volume of a gas]]',
     'Describe the effects of temperature and pressure on the [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|volume of a gas]]'),

    # Line 44: Explain changes of state in terms of kinetic particle theory ... heating and cooling curves
    # First occurrence of KPT — about changes of state
    ('Explain changes of state in terms of [[Kinetic Particle Theory|kinetic particle theory]]',
     'Explain changes of state in terms of [[Kinetic Particle Theory#changes-of-state-explained-by-the-theory|kinetic particle theory]]'),

    ('[[Heating Curve|heating]]',
     '[[Heating Curve#shape-of-a-heating-curve|heating]]'),

    ('[[Cooling Curve|cooling curves]]',
     '[[Cooling Curve#shape-of-a-cooling-curve|cooling curves]]'),

    # Line 45: Explain, in terms of KPT, the effects of temperature and pressure on the volume of a gas
    # Second occurrence of KPT — about temp/pressure/gas volume
    ('Explain, in terms of [[Kinetic Particle Theory|kinetic particle theory]], the effects of temperature and pressure on the [[Gas Laws|volume of a gas]]',
     'Explain, in terms of [[Kinetic Particle Theory#temperature-pressure-and-gas-volume|kinetic particle theory]], the effects of temperature and pressure on the [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|volume of a gas]]'),

    # ========================
    # SECTION 1.2 — Diffusion
    # ========================

    # Line 51: Describe and explain diffusion in terms of kinetic particle theory
    ('Describe and explain [[Diffusion|diffusion]] in terms of [[Kinetic Particle Theory|kinetic particle theory]]',
     'Describe and explain [[Diffusion#1-definition-of-diffusion|diffusion]] in terms of [[Kinetic Particle Theory#main-ideas-of-the-kinetic-particle-theory|kinetic particle theory]]'),

    # Line 55: effect of relative molecular mass on the rate of diffusion of gases
    ('[[Relative Molecular Mass|relative molecular mass]]',
     '[[Relative Molecular Mass#relative-molecular-mass-and-diffusion-rate|relative molecular mass]]'),

    ('[[Diffusion|diffusion of gases]]',
     '[[Diffusion#3-factors-affecting-the-rate-of-diffusion|diffusion of gases]]'),

    # ========================
    # SECTION 2.1 — Elements, Compounds and Mixtures
    # ========================

    ('[[Element|elements]]',
     '[[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|elements]]'),

    ('[[Compound|compounds]]',
     '[[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|compounds]]'),

    ('[[Mixture|mixtures]]',
     '[[Elements, Compounds and Mixtures#differences-between-elements-compounds-and-mixtures|mixtures]]'),

    # ========================
    # SECTION 2.2 — Atomic Structure and the Periodic Table
    # ========================

    # Line 71: structure of the atom as a central nucleus...
    ('[[Atom (Chemistry)|atom]]',
     '[[Atom (Chemistry)#structure-of-the-atom|atom]]'),

    ('[[Nucleus (Chemistry)|nucleus]]',
     '[[Nucleus (Chemistry)#the-nucleus|nucleus]]'),

    ('[[Neutron|neutrons]]',
     '[[Neutron#properties-of-the-neutron|neutrons]]'),

    ('[[Proton|protons]]',
     '[[Proton#properties-of-the-proton|protons]]'),

    ('[[Electron|electrons]]',
     '[[Electron#properties-of-the-electron|electrons]]'),

    ('[[Electron Shell|shells]]',
     '[[Electronic Configuration#shell-filling-rules-elements-1-20|shells]]'),

    # Line 72: relative charges and relative masses of a proton, neutron and electron
    ('relative charges and relative masses of a [[Proton|proton]]',
     'relative charges and relative masses of a [[Proton#properties-of-the-proton|proton]]'),

    ('a [[Neutron|neutron]]',
     'a [[Neutron#properties-of-the-neutron|neutron]]'),

    ('an [[Electron|electron]]',
     'an [[Electron#properties-of-the-electron|electron]]'),

    # Line 73: Define proton number / atomic number
    ('[[Atomic Number (Proton Number)|proton number / atomic number]]',
     '[[Atomic Number (Proton Number)#the-meaning-of-atomic-number|proton number / atomic number]]'),

    # Line 74: Define mass number / nucleon number
    ('[[Mass Number (Nucleon Number)|mass number / nucleon number]]',
     '[[Mass Number (Nucleon Number)#definition-and-notation|mass number / nucleon number]]'),

    # Line 75: electronic configuration
    ('[[Electronic Configuration|electronic configuration]]',
     '[[Electronic Configuration#shell-filling-rules-elements-1-20|electronic configuration]]'),

    # Line 76: Group VIII noble gases, outer shell electrons, group number, period number
    ('[[Group 0 Noble Gases|Group VIII noble gases]]',
     '[[Group 0 Noble Gases#why-noble-gases-are-unreactive|Group VIII noble gases]]'),

    ('[[Valence Electron|outer shell electrons]]',
     '[[Group Number#the-rule-outer-electrons--group-number|outer shell electrons]]'),

    ('[[Group Number|group number]]',
     '[[Group Number#the-rule-outer-electrons--group-number|group number]]'),

    ('[[Electron Shell|electron shells]]',
     '[[Electronic Configuration#shell-filling-rules-elements-1-20|electron shells]]'),

    ('[[Period Number|period number]]',
     '[[Period Number#periods-1-2-and-3|period number]]'),

    # ========================
    # SECTION 2.3 — Isotopes
    # ========================

    # Line 82: Define isotopes
    ('Define [[Isotope|isotopes]] as different atoms',
     'Define [[Isotope|isotopes]] as different atoms'),  # Keywords/ stub — no ## headings, leave as-is

    # Line 83: nuclide notation
    ('[[Nuclide Notation|symbols for atoms and ions]]',
     '[[Nuclide Notation#anatomy-of-the-symbol|symbols for atoms and ions]]'),

    # Line 87: isotopes same chemical properties
    ('State that [[Isotope|isotopes]] of the same element have the same chemical properties',
     'State that [[Isotope|isotopes]] of the same element have the same chemical properties'),  # Keywords/ stub

    # Line 88: Calculate relative atomic mass
    ('[[Relative Atomic Mass|relative atomic mass]]',
     '[[Relative Atomic Mass#definition-and-formula|relative atomic mass]]'),

    # ========================
    # SECTION 2.4 — Ions and Ionic Bonds
    # ========================

    ('[[Positive Ions (Cations)|positive ions (cations)]]',
     '[[Positive Ions (Cations)#formation-of-positive-ions-cations|positive ions (cations)]]'),

    ('[[Negative Ions (Anions)|negative ions (anions)]]',
     '[[Negative Ions (Anions)#formation-of-negative-ions-anions|negative ions (anions)]]'),

    ('[[Ionic Bond|ionic bond]]',
     '[[Ionic Bond#definition|ionic bond]]'),

    ('[[Electrostatic Attraction|electrostatic attraction]]',
     '[[Electrostatic Attraction#the-force-between-opposite-charges|electrostatic attraction]]'),

    ('[[Group 1 Alkali Metals|Group I]]',
     '[[Group 1 Alkali Metals#chemical-properties-and-reactivity|Group I]]'),

    ('[[Group 7 Halogens|Group VII]]',
     '[[Group 7 Halogens#reactivity-trend|Group VII]]'),

    ('[[Dot-and-Cross Diagram|dot-and-cross diagrams]]',
     '[[Dot-and-Cross Diagram#key-conventions|dot-and-cross diagrams]]'),

    ('[[Ionic Compounds|ionic compounds]]',
     '[[Ionic Compounds#properties-of-ionic-compounds|ionic compounds]]'),

    ('[[Giant Ionic Lattice|giant lattice structure]]',
     '[[Giant Ionic Lattice#the-sodium-chloride-lattice|giant lattice structure]]'),

    # ========================
    # SECTION 2.5 — Simple Molecules and Covalent Bonds
    # ========================

    ('[[Covalent Bond|covalent bond]]',
     '[[Covalent Bond#definition|covalent bond]]'),

    ('[[Noble Gas Electronic Configuration|noble gas electronic configurations]]',
     '[[Noble Gas Electronic Configuration#the-octet-rule-neonargon-configuration|noble gas electronic configurations]]'),

    ('[[Simple Molecules|simple molecules]]',
     '[[Simple Molecules#what-defines-a-simple-molecule|simple molecules]]'),

    # Simple molecule examples — link to Simple Molecules page which lists them
    ('[[Hydrogen (H2)|H₂]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|H₂]]'),

    ('[[Chlorine (Cl2)|Cl₂]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|Cl₂]]'),

    ('[[Water (H2O)|H₂O]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|H₂O]]'),

    ('[[Methane (CH4)|CH₄]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|CH₄]]'),

    ('[[Ammonia|NH₃]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|NH₃]]'),

    ('[[Hydrogen Chloride (HCl)|HCl]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|HCl]]'),

    ('[[Simple Molecular Compounds|simple molecular compounds]]',
     '[[Simple Molecular Compounds#properties-of-simple-molecular-compounds|simple molecular compounds]]'),

    ('[[Methanol (CH3OH)|CH₃OH]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|CH₃OH]]'),

    ('[[Ethene (C2H4)|C₂H₄]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|C₂H₄]]'),

    ('[[Oxygen (O2)|O₂]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|O₂]]'),

    ('[[Carbon Dioxide (CO2)|CO₂]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|CO₂]]'),

    ('[[Nitrogen (N2)|N₂]]',
     '[[Simple Molecules#common-simple-molecules-at-igcse|N₂]]'),

    ('[[Intermolecular Force|intermolecular forces]]',
     '[[Simple Molecular Compounds#properties-of-simple-molecular-compounds|intermolecular forces]]'),

    # ========================
    # SECTION 2.6 — Giant Covalent Structures
    # ========================

    ('[[Giant Structures|giant covalent structures]]',
     '[[Giant Structures#overview-of-giant-structures|giant covalent structures]]'),

    ('[[Graphite|graphite]]',
     '[[Graphite#structure|graphite]]'),

    ('[[Diamond|diamond]]',
     '[[Diamond#structure|diamond]]'),

    ('[[Silicon(IV) Oxide|silicon(IV) oxide, SiO₂]]',
     '[[Silicon(IV) Oxide#structure|silicon(IV) oxide, SiO₂]]'),

    # ========================
    # SECTION 2.7 — Metallic Bonding
    # ========================

    ('[[Metallic Bonding|metallic bonding]]',
     '[[Metallic Bonding#what-is-metallic-bonding|metallic bonding]]'),

    ('[[Electrostatic Attraction|electrostatic attraction]] between positive ions',
     '[[Electrostatic Attraction#role-in-metallic-bonding|electrostatic attraction]] between positive ions'),

    ('[[Giant Metallic Lattice|giant metallic lattice]]',
     '[[Giant Metallic Lattice#structure-of-the-lattice|giant metallic lattice]]'),

    ('[[Delocalised Electron|delocalised electrons]]',
     '[[Metallic Bonding#what-is-metallic-bonding|delocalised electrons]]'),

    ('[[Malleability|malleability]]',
     '[[Malleability#particle-level-explanation|malleability]]'),

    ('[[Ductility|ductility]]',
     '[[Ductility#particle-level-explanation|ductility]]'),

    # ========================
    # SECTION 3.1 — Formulae
    # ========================

    ('[[Empirical and Molecular Formulae|molecular formula]]',
     '[[Empirical and Molecular Formulae#definitions|molecular formula]]'),

    ('[[Empirical and Molecular Formulae|formula of a simple compound]]',
     '[[Empirical and Molecular Formulae#definitions|formula of a simple compound]]'),

    ('[[Chemical Equations and Calculations|word equations and symbol equations]]',
     '[[Chemical Equations and Calculations#balancing-chemical-equations|word equations and symbol equations]]'),

    ('[[State Symbols|state symbols]]',
     '[[State Symbols#the-four-state-symbols|state symbols]]'),

    ('[[Empirical and Molecular Formulae|empirical formula]]',
     '[[Empirical and Molecular Formulae#definitions|empirical formula]]'),

    # "formula of an ionic compound" — links to Ionic Compounds
    ('[[Ionic Compounds|formula of an ionic compound]]',
     '[[Ionic Compounds#properties-of-ionic-compounds|formula of an ionic compound]]'),

    # "symbol equations with state symbols, including ionic equations"
    # Already handled above, but let me check for unique context
    ('[[Chemical Equations and Calculations|symbol equations]] with [[State Symbols|state symbols]], including [[Ionic Equations and Half Equations|ionic equations]]',
     '[[Chemical Equations and Calculations#balancing-chemical-equations|symbol equations]] with [[State Symbols#state-symbols-in-chemical-equations|state symbols]], including [[Ionic Equations and Half Equations#why-ionic-equations|ionic equations]]'),

    # Line 155: Deduce the symbol equation with state symbols
    ('[[Chemical Equations and Calculations|symbol equation]] with [[State Symbols|state symbols]] for a chemical reaction',
     '[[Chemical Equations and Calculations#balancing-chemical-equations|symbol equation]] with [[State Symbols#state-symbols-in-chemical-equations|state symbols]] for a chemical reaction'),

    # ========================
    # SECTION 3.2 — Relative Masses
    # ========================

    # relative atomic mass Ar — already handled in 2.3
    # But there might be another occurrence here
    # Line 161: Describe relative atomic mass, Ar
    # (uses [[Relative Atomic Mass|relative atomic mass, Ar]] — check if already matched)
    # This might be a new unique occurrence. Let me check: the first match was "[[Relative Atomic Mass|relative atomic mass]]"
    # Here it's "[[Relative Atomic Mass|relative atomic mass, Ar]]" — different display text!

    ('[[Relative Atomic Mass|relative atomic mass, Ar]]',
     '[[Relative Atomic Mass#definition-and-formula|relative atomic mass, Ar]]'),

    ('[[Relative Molecular Mass|relative molecular mass, Mr]]',
     '[[Relative Molecular Mass#calculating-relative-molecular-mass|relative molecular mass, Mr]]'),

    ('[[Relative Masses and Moles|Relative formula mass, Mr]]',
     '[[Relative Masses and Moles#relative-molecular--formula-mass-mr|Relative formula mass, Mr]]'),

    ('[[Reacting Masses|reacting masses]]',
     '[[Reacting Masses#the-principle-of-reacting-masses|reacting masses]]'),

    ('[[Mole|mole concept]]',
     '[[Mole|mole concept]]'),  # Keywords/ stub

    # ========================
    # SECTION 3.3 — The Mole and the Avogadro Constant
    # ========================

    ('[[Concentration and Gas Volumes|concentration]]',
     '[[Concentration and Gas Volumes#concentration|concentration]]'),

    ('[[Mole|mole, mol]]',
     '[[Mole|mole, mol]]'),  # Keywords/ stub

    ('[[Avogadro Constant|Avogadro constant]]',
     '[[Avogadro Constant#definition|Avogadro constant]]'),

    ('[[Molar Gas Volume|molar gas volume]]',
     '[[Molar Gas Volume#definition|molar gas volume]]'),

    ('[[Limiting Reactant|limiting reactants]]',
     '[[Reacting Masses#limiting-reactants|limiting reactants]]'),

    # "concentrations of solutions expressed in g/dm³ and mol/dm³"
    ('[[Concentration and Gas Volumes|concentrations of solutions]]',
     '[[Concentration and Gas Volumes#concentration|concentrations of solutions]]'),

    ('[[Titration|titration]]',
     '[[Titration|titration]]'),  # Keywords/ stub

    ('[[Empirical and Molecular Formulae|empirical formulae and molecular formulae]]',
     '[[Empirical and Molecular Formulae#definitions|empirical formulae and molecular formulae]]'),

    ('[[Percentage Yield and Purity|percentage yield]]',
     '[[Percentage Yield and Purity#percentage-yield|percentage yield]]'),

    ('[[Percentage Composition by Mass|percentage composition by mass]]',
     '[[Percentage Composition by Mass#the-formula|percentage composition by mass]]'),

    ('[[Percentage Yield and Purity|percentage purity]]',
     '[[Percentage Yield and Purity#percentage-purity|percentage purity]]'),

    # ========================
    # SECTION 4.1 — Electrolysis
    # ========================

    ('[[Electrolysis|electrolysis]] as the decomposition',
     '[[Electrolysis#what-is-electrolysis|electrolysis]] as the decomposition'),

    ('[[Anode|anode]] as the positive',
     '[[Anode#charge-and-role-in-electrolysis|anode]] as the positive'),

    ('[[Electrode|electrode]]',
     '[[Electrode|electrode]]'),  # Keywords/ stub

    ('[[Cathode|cathode]] as the negative',
     '[[Cathode#role-of-the-cathode-in-electrolysis|cathode]] as the negative'),

    ('[[Electrolyte|electrolyte]] as the molten',
     '[[Electrolyte|electrolyte]] as the molten'),  # Keywords/ stub

    ('[[Molten Lead(II) Bromide (Electrolysis)|molten lead(II) bromide]]',
     '[[Molten Lead(II) Bromide (Electrolysis)#electrode-reactions|molten lead(II) bromide]]'),

    ('[[Electrolysis of Brine|concentrated aqueous sodium chloride]]',
     '[[Electrolysis of Brine#ions-present-in-brine|concentrated aqueous sodium chloride]]'),

    ('[[Electrolysis of Dilute Sulfuric Acid|dilute sulfuric acid]]',
     '[[Electrolysis#electrolysis-of-aqueous-solutions|dilute sulfuric acid]]'),

    ('[[Inert Electrode|inert electrodes]]',
     '[[Inert Electrode#why-use-inert-electrodes|inert electrodes]]'),

    # metals or hydrogen formed at the cathode
    ('formed at the [[Cathode|cathode]]',
     'formed at the [[Cathode#molten-electrolytes-the-metal-is-always-produced|cathode]]'),

    # non-metals formed at the anode
    ('formed at the [[Anode|anode]]',
     'formed at the [[Anode#products-at-the-anode-molten-electrolytes|anode]]'),

    ('[[Electroplating|electroplated]]',
     '[[Electroplating#how-electroplating-works|electroplated]]'),

    # Line 199: transfer of charge during electrolysis
    ('transfer of charge during [[Electrolysis|electrolysis]]',
     'transfer of charge during [[Electrolysis#how-electrolysis-works|electrolysis]]'),

    ('[[Electron|electrons]] in the external circuit',
     '[[Electron#properties-of-the-electron|electrons]] in the external circuit'),

    ('[[Ion|ions]] in the [[Electrolyte|electrolyte]]',
     '[[Ion|ions]] in the [[Electrolyte|electrolyte]]'),  # Keywords/ stubs

    ('[[Electrolysis of Copper(II) Sulfate|electrolysis of aqueous copper(II) sulfate]]',
     '[[Electrolysis of Copper(II) Sulfate#with-inert-electrodes-carbongraphiteplatinum|electrolysis of aqueous copper(II) sulfate]]'),

    # ionic half-equations
    ('[[Ionic Equations and Half Equations|ionic half-equations]]',
     '[[Ionic Equations and Half Equations#half-equations-electron-transfer|ionic half-equations]]'),

    # oxidation/reduction at electrodes
    ('[[Oxidation|oxidation]]',
     '[[Oxidation|oxidation]]'),  # Keywords/ stub

    ('[[Reduction|reduction]]',
     '[[Reduction|reduction]]'),  # Keywords/ stub

    # ========================
    # SECTION 4.2 — Hydrogen-Oxygen Fuel Cells
    # ========================

    ('[[Fuel Cells|hydrogen–oxygen fuel cell]]',
     '[[Fuel Cells#the-hydrogen-oxygen-fuel-cell|hydrogen–oxygen fuel cell]]'),

    # ========================
    # SECTION 5.1 — Exothermic and Endothermic Reactions
    # ========================

    ('[[Exothermic Reaction|exothermic reaction]] transfers thermal energy',
     '[[Exothermic Reaction#characteristics-of-exothermic-reactions|exothermic reaction]] transfers thermal energy'),

    ('[[Endothermic Reaction|endothermic reaction]] takes in thermal energy',
     '[[Endothermic Reaction#characteristics-of-endothermic-reactions|endothermic reaction]] takes in thermal energy'),

    ('[[Reaction Pathway Diagram|reaction pathway diagrams]]',
     '[[Reaction Pathway Diagram#axes-and-key-features|reaction pathway diagrams]]'),

    ('[[Exothermic Reaction|exothermic]] and [[Endothermic Reaction|endothermic]] reactions',
     '[[Exothermic Reaction#reaction-pathway-diagram|exothermic]] and [[Endothermic Reaction#reaction-pathway-diagram|endothermic]] reactions'),

    ('[[Enthalpy Change|enthalpy change, ∆H]]',
     '[[Enthalpy Change#definition-and-sign-convention|enthalpy change, ∆H]]'),

    ('∆H is negative for [[Exothermic Reaction|exothermic reactions]]',
     '∆H is negative for [[Exothermic Reaction#reaction-pathway-diagram|exothermic reactions]]'),

    ('positive for [[Endothermic Reaction|endothermic reactions]]',
     'positive for [[Endothermic Reaction#reaction-pathway-diagram|endothermic reactions]]'),

    ('[[Activation Energy|activation energy, Ea]]',
     '[[Activation Energy|activation energy, Ea]]'),  # Keywords/ stub

    ('[[Bond Breaking|bond breaking]] is an endothermic process',
     '[[Bond Breaking#why-is-bond-breaking-endothermic|bond breaking]] is an endothermic process'),

    ('[[Bond Making|bond making]] is an exothermic process',
     '[[Bond Making#why-is-bond-making-exothermic|bond making]] is an exothermic process'),

    ('[[Enthalpy Change|enthalpy change of a reaction]]',
     '[[Enthalpy Change#bond-breaking-and-bond-making|enthalpy change of a reaction]]'),

    ('[[Bond Energy Calculations|bond energies]]',
     '[[Enthalpy Change#bond-energy-calculations|bond energies]]'),

    # ========================
    # SECTION 6.1 — Physical and Chemical Changes
    # ========================

    ('[[Physical Change|physical]]',
     '[[Physical Change#definition-and-key-characteristics|physical]]'),

    ('[[Chemical Change|chemical changes]]',
     '[[Chemical Change#what-defines-a-chemical-change|chemical changes]]'),

    # ========================
    # SECTION 6.2 — Rate of Reaction
    # ========================

    ('[[Rates of Reaction|rate of reaction]]',
     '[[Rates of Reaction#what-is-rate-of-reaction|rate of reaction]]'),

    # concentration — already handled in 3.3
    # But here it's in rate context, "changing the concentration of solutions"
    # Need unique match
    ('changing the [[Concentration and Gas Volumes|concentration]] of solutions',
     'changing the [[Concentration and Gas Volumes#concentration|concentration]] of solutions'),

    # pressure of gases — links to Gas Laws
    ('changing the [[Gas Laws|pressure of gases]]',
     'changing the [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|pressure of gases]]'),

    ('[[Surface Area and Rate|surface area of solids]]',
     '[[Surface Area and Rate#definition-and-principle|surface area of solids]]'),

    ('[[Catalyst|catalyst]]',
     '[[Catalyst|catalyst]]'),  # Keywords/ stub

    ('[[Enzyme|enzymes]]',
     '[[Enzyme|enzymes]]'),  # Keywords/ stub (might not exist)

    ('[[Collision Theory|collision theory]]',
     '[[Collision Theory#the-three-requirements-for-a-reaction|collision theory]]'),

    ('[[Kinetic Particle Theory|kinetic energy of particles]]',
     '[[Kinetic Particle Theory#main-ideas-of-the-kinetic-particle-theory|kinetic energy of particles]]'),

    # ========================
    # SECTION 6.3 — Reversible Reactions and Equilibrium
    # ========================

    ('[[Reversible Reactions|reversible]]',
     '[[Reversible Reactions#reversible-reactions|reversible]]'),

    ('[[Hydrated|hydrated compounds]]',
     '[[Hydrated|hydrated compounds]]'),  # Keywords/ stub

    ('[[Anhydrous|anhydrous compounds]]',
     '[[Anhydrous|anhydrous compounds]]'),  # Keywords/ stub

    ('[[Closed System|closed system]]',
     '[[Closed System#definition|closed system]]'),

    ('[[Dynamic Equilibrium|equilibrium]]',
     '[[Dynamic Equilibrium#definition-and-key-characteristics|equilibrium]]'),

    # "position of equilibrium is affected by..."
    ('position of [[Dynamic Equilibrium|equilibrium]] is affected',
     'position of [[Dynamic Equilibrium#le-chateliers-principle|equilibrium]] is affected'),

    # Pressure context in equilibrium
    ('changing [[Gas Laws|pressure]]',
     'changing [[Gas Laws#effects-of-temperature-and-pressure-on-the-volume-of-a-gas|pressure]]'),

    # concentration in equilibrium context
    ('changing [[Concentration and Gas Volumes|concentration]]',
     'changing [[Concentration and Gas Volumes#concentration|concentration]]'),

    ('[[Haber Process and Ammonia|Haber process]]',
     '[[Haber Process and Ammonia#content|Haber process]]'),

    ('[[Contact Process|Contact process]]',
     '[[Contact Process#the-key-reaction-formation-of-sulfur-trioxide|Contact process]]'),

    # ========================
    # SECTION 6.4 — Redox
    # ========================

    ('[[Oxidation Number|oxidation number]]',
     '[[Oxidation Number#definition-and-purpose|oxidation number]]'),

    ('[[Redox Reactions|redox reactions]]',
     '[[Redox Reactions#definitions-of-oxidation-and-reduction|redox reactions]]'),

    ('[[OIL RIG|loss of electrons]]',
     '[[OIL RIG|loss of electrons]]'),  # Keywords/ stub

    ('[[OIL RIG|gain of electrons]]',
     '[[OIL RIG|gain of electrons]]'),  # Keywords/ stub

    ('[[Redox Reactions|redox reactions]] as reactions involving gain and loss of [[Electron|electrons]]',
     '[[Redox Reactions#definitions-of-oxidation-and-reduction|redox reactions]] as reactions involving gain and loss of [[Electron#properties-of-the-electron|electrons]]'),

    ('[[Potassium Manganate(VII)|potassium manganate(VII)]]',
     '[[Potassium Manganate(VII)#as-an-oxidising-agent|potassium manganate(VII)]]'),

    ('[[Potassium Iodide|potassium iodide]]',
     '[[Potassium Iodide|potassium iodide]]'),  # No ## headings

    ('[[Oxidising Agent|oxidising agent]] as a substance that oxidises',
     '[[Oxidising Agent#definition-and-core-principle|oxidising agent]] as a substance that oxidises'),

    ('[[Reducing Agent|reducing agent]] as a substance that reduces',
     '[[Reducing Agent#1-definition-and-core-principle|reducing agent]] as a substance that reduces'),

    ('[[Oxidising Agent|oxidising agents]] and [[Reducing Agent|reducing agents]] in [[Redox Reactions|redox reactions]]',
     '[[Oxidising Agent#how-to-identify-an-oxidising-agent|oxidising agents]] and [[Reducing Agent#4-identifying-the-reducing-agent-in-an-equation|reducing agents]] in [[Redox Reactions#oxidising-agents-and-reducing-agents|redox reactions]]'),
]

# ============================================================
# Apply replacements
# ============================================================

changed = 0
for old, new in replacements:
    if old in content:
        content = content.replace(old, new, 1)  # replace first occurrence only
        changed += 1
    else:
        print(f'WARNING: Not found: {old[:80]}...')

print(f'Applied {changed}/{len(replacements)} replacements')

# Write updated file
with open(INDEX_PATH, 'w') as f:
    f.write(content)

print(f'Written to {INDEX_PATH}')
