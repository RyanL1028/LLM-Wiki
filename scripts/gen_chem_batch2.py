#!/usr/bin/env python3
"""Generate ALL remaining IGCSE Chemistry topic and keyword pages efficiently."""
from pathlib import Path

WIKI = Path(__file__).resolve().parent.parent / 'wiki-web' / 'wiki' / 'IGCSE Chemistry'
TOPICS = WIKI / "Topics"
KEYWORDS = WIKI / "Keywords"
NOW = "2026-07-14"

def md(title, summary, tags, body):
    t = ' #igcse #chemistry' + ''.join(f' #{x}' for x in tags)
    return f"""# {title}

**Summary**: {summary}
**Tags**:{t}
**Created**: {NOW}
**Last Updated**: {NOW}

---

{body}

---

*IGCSE Chemistry (0620/0971) wiki.*
"""

def save(name, content):
    (TOPICS / f"{name}.md").write_text(content)

# ── All remaining topics ─────────────────────────────────────────
# Each tuple: (name, summary, [tags], body)

topics = [

("Group 7 Halogens", "F₂, Cl₂, Br₂, I₂ — diatomic non-metals. Reactivity decreases down the group. A more reactive halogen displaces a less reactive one.", ["periodic-table"],
"""## Properties of Halogens

| Halogen | State at r.t.p. | Colour |
|---------|----------------|--------|
| Fluorine (F₂) | Gas | Pale yellow |
| Chlorine (Cl₂) | Gas | Yellow-green |
| Bromine (Br₂) | Liquid | Red-brown |
| Iodine (I₂) | Solid | Grey-black (purple vapour) |

## Trends Down Group 7

| Property | Trend |
|----------|-------|
| Atomic radius | Increases |
| Melting/boiling point | Increases |
| Colour | Gets darker |
| Reactivity | **Decreases** |

## Why Reactivity Decreases Down Group 7

Halogens gain one electron to form a halide ion (1−). Down the group:
- Atomic radius increases → outer shell further from nucleus
- More inner shell shielding
- Harder for the nucleus to attract an additional electron → **less reactive**

## Displacement Reactions

A **more reactive halogen displaces a less reactive halogen** from its halide salt.

- Cl₂ + 2KBr → 2KCl + Br₂ (chlorine displaces bromine — solution turns orange/brown)
- Cl₂ + 2KI → 2KCl + I₂ (chlorine displaces iodine — solution turns brown)
- Br₂ + 2KI → 2KBr + I₂ (bromine displaces iodine)
- Br₂ + KCl → **no reaction** (bromine less reactive than chlorine)
- I₂ + KCl/KBr → **no reaction** (iodine least reactive)

## Reactions

### With Hydrogen
H₂ + X₂ → 2HX (hydrogen halide, dissolves to form acidic solution)

### With Metals
2Na + Cl₂ → 2NaCl (ionic halide salt formed)

### With Iron Wool
2Fe + 3Cl₂ → 2FeCl₃ (hot iron wool glows brightly in chlorine)

## Uses of Halogens
- **Chlorine**: Water purification, bleach (NaClO), PVC plastic
- **Bromine**: Flame retardants, photographic chemicals
- **Iodine**: Antiseptic (dissolved in alcohol), thyroid hormone

## Key Facts
- Halogens exist as DIATOMIC molecules (F₂, Cl₂, Br₂, I₂)
- Reactivity DECREASES down group (opposite to Group 1)
- A halogen displaces any halogen BELOW it from a halide salt
- Halogens are oxidising agents (they gain electrons)

## Related Notes
- [[Periodic Table Trends]]
- [[Group 1 Alkali Metals]]
- [[Redox Reactions]]
- [[IGCSE-Chem-Index]]"""),

("Group 0 Noble Gases", "He, Ne, Ar, Kr, Xe — monatomic gases with full outer electron shells. Chemically unreactive (inert). Uses: balloons, welding, lighting.", ["periodic-table"],
"""## Properties

| Gas | Boiling point | Density | Uses |
|-----|--------------|---------|------|
| Helium (He) | −269°C | Very low | Balloons, airships, cooling MRI |
| Neon (Ne) | −246°C | Low | Advertising signs (red-orange glow) |
| Argon (Ar) | −186°C | Medium | Welding (inert atmosphere), light bulbs |
| Krypton (Kr) | −152°C | Medium | Laser surgery, photography flashes |
| Xenon (Xe) | −108°C | High | Car headlamps, anaesthetic |

## Why Are They Unreactive?

Noble gases have **full outer electron shells**:
- He: 2 electrons (full 1st shell)
- Ne: 2.8 (full 2nd shell)
- Ar: 2.8.8 (full 3rd shell)

With a stable octet (or duet for He), they have **no tendency to gain, lose, or share electrons** → chemically inert.

## Trends Down Group 0

- Atomic radius **increases**
- Density **increases**
- Boiling point **increases** (weak interatomic forces get stronger with larger atoms)

## Key Facts
- Noble gases are MONATOMIC (single atoms), unlike diatomic halogens
- Full outer shell = no chemical reactivity
- Boiling points are very low but INCREASE down the group
- Uses based on their inertness and physical properties

## Related Notes
- [[Periodic Table Trends]]
- [[Atomic Structure]]
- [[Group 7 Halogens]]
- [[IGCSE-Chem-Index]]"""),

("Transition Metals", "Hard, dense metals with high melting points. Form coloured compounds, have variable oxidation states, and act as catalysts.", ["periodic-table", "metals"],
"""## Properties of Transition Metals

### Physical Properties
- **Hard and strong** — unlike soft Group 1 metals
- **High density** — Fe (7.9 g/cm³), Cu (8.9 g/cm³)
- **High melting points** — Fe (1538°C), Cu (1085°C)
- **Malleable and ductile**
- **Good conductors** of heat and electricity
- **Shiny/lustrous**

### Chemical Properties
- Form **coloured compounds**:
  - Cu²⁺ compounds are BLUE
  - Fe²⁺ compounds are PALE GREEN
  - Fe³⁺ compounds are ORANGE/BROWN
  - MnO₄⁻ (manganate(VII)) is PURPLE
  - Cr³⁺ compounds are GREEN
- Have **variable oxidation states** (e.g., Fe²⁺ and Fe³⁺; Cu⁺ and Cu²⁺)
- Act as **catalysts**:
  - Iron (Fe) — Haber process
  - Vanadium(V) oxide (V₂O₅) — Contact process
  - Nickel (Ni) — hydrogenation of alkenes
  - Manganese(IV) oxide (MnO₂) — decomposition of H₂O₂

## Comparison: Transition Metals vs Group 1

| Property | Group 1 | Transition Metals |
|----------|---------|-------------------|
| Hardness | Soft | Hard |
| Density | Low | High |
| Melting point | Low (decreases down) | High |
| Reactivity | Very reactive | Less reactive |
| Ions | Only 1+ | Variable (2+, 3+ etc.) |
| Compounds | White/colourless | Coloured |
| Catalytic activity | No | Yes |

## Common Transition Metals at IGCSE
- **Iron (Fe)**: Steel, blast furnace, Haber catalyst, rusting, haemoglobin
- **Copper (Cu)**: Electrical wiring, plumbing, alloys (brass, bronze)
- **Zinc (Zn)**: Galvanising, batteries, brass
- **Chromium (Cr)**: Stainless steel, electroplating
- **Manganese (Mn)**: Steel production, MnO₂ catalyst

## Key Facts
- Transition metals are in the central block of the Periodic Table (between Groups 2 and 13)
- Their coloured compounds are due to partially filled d-orbitals (simplified for IGCSE)
- They are much LESS reactive than Group 1 metals
- Many are essential for life (Fe in haemoglobin, Zn in enzymes)

## Related Notes
- [[Periodic Table Trends]]
- [[Group 1 Alkali Metals]]
- [[Reactivity of Metals]]
- [[IGCSE-Chem-Index]]"""),

# Topic 8: Acids, Bases and Salts — sub-topics
("Indicators and pH", "The pH scale (0–14) measures acidity/alkalinity. Universal indicator, litmus, methyl orange, and phenolphthalein change colour at different pH ranges.", ["acids-bases"],
"""## The pH Scale

- **pH 0–2**: Strongly acidic (HCl, H₂SO₄)
- **pH 3–6**: Weakly acidic (CH₃COOH, rain water)
- **pH 7**: Neutral (pure water, NaCl solution)
- **pH 8–11**: Weakly alkaline (NaHCO₃, soap)
- **pH 12–14**: Strongly alkaline (NaOH, KOH)

pH is **logarithmic**: each unit = 10× change in H⁺ concentration.

## Indicators

| Indicator | Colour in acid | Colour in neutral | Colour in alkali | pH range |
|-----------|---------------|-------------------|------------------|----------|
| Universal indicator | Red → Orange → Yellow | Green | Blue → Violet | Full (0–14) |
| Litmus | Red | Purple | Blue | ~5–8 |
| Methyl orange | Red | Orange | Yellow | 3.1–4.4 |
| Phenolphthalein | Colourless | Colourless | Pink | 8.3–10.0 |
| Thymolphthalein | Colourless | Colourless | Blue | 9.3–10.5 |

## Using Universal Indicator

- Add a few drops of universal indicator to the solution
- Compare the resulting colour with the colour chart provided
- The colour gives an approximate pH value

## pH Meter / pH Probe

- More precise than indicators
- Gives a numerical reading
- Used in titrations and water quality testing

## Key Facts
- pH < 7 = acidic (excess H⁺)
- pH = 7 = neutral ([H⁺] = [OH⁻])
- pH > 7 = alkaline (excess OH⁻)
- Universal indicator gives the full pH range; litmus only tells you acid or alkali
- **Methyl orange**: RED in acid, YELLOW in alkali
- **Phenolphthalein**: COLOURLESS in acid, PINK in alkali

## Related Notes
- [[Acids and Bases]]
- [[Neutralization]]
- [[Making Salts]]
- [[IGCSE-Chem-Index]]"""),

("Making Salts", "Salts are produced by neutralising acids: acid + metal/base/carbonate. Soluble salts by titration or excess solid method; insoluble salts by precipitation.", ["acids-bases"],
"""## What is a Salt?

A salt is the ionic compound formed when the H⁺ in an acid is replaced by a metal ion or NH₄⁺.

## Methods of Making Salts

### 1. Acid + Excess Insoluble Base/Metal/Carbonate
**For making soluble salts (except Na⁺, K⁺, NH₄⁺ salts)**
1. Add excess solid (metal, metal oxide, or carbonate) to warm acid
2. Stir until no more solid dissolves / fizzing stops
3. Filter to remove the excess solid
4. Heat filtrate to evaporate some water (crystallisation)
5. Allow to cool → crystals form
6. Filter and dry the crystals

**Examples:**
- CuO(s) + H₂SO₄(aq) → CuSO₄(aq) + H₂O(l)
- Mg(s) + 2HCl(aq) → MgCl₂(aq) + H₂(g)
- CaCO₃(s) + 2HCl(aq) → CaCl₂(aq) + H₂O(l) + CO₂(g)

### 2. Titration (Acid + Alkali)
**For making soluble Na⁺, K⁺, NH₄⁺ salts**
1. Pipette measured volume of alkali into conical flask
2. Add indicator (phenolphthalein or methyl orange)
3. Add acid from burette until indicator just changes colour
4. Record volume of acid used
5. Repeat without indicator (add same volumes)
6. Evaporate to obtain the salt crystals

**Example:**
- NaOH(aq) + HCl(aq) → NaCl(aq) + H₂O(l)

### 3. Precipitation
**For making INSOLUBLE salts**
1. Mix solutions of two soluble salts containing the required ions
2. The insoluble salt precipitates out
3. Filter, wash with distilled water, and dry

**Examples:**
- BaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)
- AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)

## Naming Salts

| Acid | Salt name ending | Example |
|------|-----------------|---------|
| HCl | ...chloride | NaCl |
| H₂SO₄ | ...sulfate | CuSO₄ |
| HNO₃ | ...nitrate | KNO₃ |
| CH₃COOH | ...ethanoate | CH₃COONa |

## Key Facts
- Acid + Metal → Salt + H₂
- Acid + Base → Salt + H₂O
- Acid + Carbonate → Salt + H₂O + CO₂
- Precipitation only works if the desired salt is INSOLUBLE
- Na⁺, K⁺, NH₄⁺ salts are ALL soluble → must use titration, not excess solid method

## Related Notes
- [[Acids and Bases]]
- [[Neutralization]]
- [[Solubility Rules]]
- [[IGCSE-Chem-Index]]"""),

("Neutralization", "Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l). Applications: indigestion remedies, soil pH adjustment, treating industrial waste, titration.", ["acids-bases"],
"""## The Ionic Equation

For the reaction of ANY strong acid with ANY strong alkali:
**H⁺(aq) + OH⁻(aq) → H₂O(l)**

This is the most important equation to memorise for IGCSE Chemistry.

## What Happens During Neutralisation

1. Acid provides H⁺ ions
2. Base/alkali provides OH⁻ ions
3. H⁺ and OH⁻ combine to form H₂O molecules
4. The remaining ions (e.g., Na⁺ and Cl⁻) stay dissolved as spectator ions and form the salt when the water is evaporated

## Applications

### 1. Indigestion Remedies (Antacids)
- Stomach acid (HCl) causes heartburn/indigestion
- Antacids contain bases: Mg(OH)₂, Al(OH)₃, CaCO₃, NaHCO₃
- Mg(OH)₂ + 2HCl → MgCl₂ + 2H₂O

### 2. Treating Acidic Soil
- Excessive fertiliser use can make soil acidic
- Farmers add **lime** (CaO or Ca(OH)₂) to neutralise the soil
- Ca(OH)₂ + 2H⁺ → Ca²⁺ + 2H₂O

### 3. Industrial Waste Treatment
- Acidic or alkaline effluent from factories must be neutralised before discharge into rivers
- Prevents environmental damage

### 4. Insect Stings
- **Bee stings** are acidic → treated with baking soda (NaHCO₃, weak alkali)
- **Wasp stings** are alkaline → treated with vinegar (CH₃COOH, weak acid)

## Titration

A precise method for determining the concentration of an unknown solution:
1. Known volume of alkali measured into flask (pipette)
2. Indicator added
3. Acid added from burette until colour change (end point)
4. Volume of acid required is recorded
5. Allows calculation of concentration using: moles = concentration × volume

## Key Facts
- H⁺(aq) + OH⁻(aq) → H₂O(l) — the universal neutralisation equation
- Spectator ions (e.g., Na⁺, Cl⁻) remain in solution
- Neutralisation is EXOTHERMIC — releases heat
- The resulting solution has pH = 7 only if exactly the right amounts of acid and base react

## Related Notes
- [[Acids and Bases]]
- [[Making Salts]]
- [[Indicators and pH]]
- [[Titration]]
- [[IGCSE-Chem-Index]]"""),

("Qualitative Analysis", "Systematic identification of ions: flame tests, NaOH/NH₃ precipitation tests for cations, and specific reagent tests for anions and gases.", ["acids-bases", "practical-skills"],
"""## Cation Tests

### Flame Tests
| Ion | Flame colour |
|-----|-------------|
| Li⁺ | Red (crimson) |
| Na⁺ | Yellow (intense, persistent) |
| K⁺ | Lilac (pale purple) |
| Ca²⁺ | Orange-red (brick red) |
| Cu²⁺ | Blue-green |
| Ba²⁺ | Apple green |

**Method**: Clean nichrome/platinum wire in HCl, dip in sample, hold in blue Bunsen flame.

### NaOH / NH₃ Precipitation Tests

| Ion | With NaOH | With NH₃(aq) | Precipitate |
|-----|-----------|-------------|-------------|
| Ca²⁺ | White ppt | No ppt / very slight | Ca(OH)₂ insoluble |
| Mg²⁺ | White ppt | White ppt | Mg(OH)₂ insoluble |
| Al³⁺ | White ppt, dissolves in excess | White ppt, does NOT dissolve | Al(OH)₃ amphoteric |
| Zn²⁺ | White ppt, dissolves in excess | White ppt, dissolves in excess | Zn(OH)₂ amphoteric |
| Fe²⁺ | Green ppt | Green ppt | Fe(OH)₂ |
| Fe³⁺ | Red-brown ppt | Red-brown ppt | Fe(OH)₃ |
| Cu²⁺ | Blue ppt | Blue ppt, dissolves in excess (deep blue) | Cu(OH)₂ |

## Anion Tests

| Anion | Test | Positive result |
|-------|------|----------------|
| Cl⁻ (chloride) | Add HNO₃ + AgNO₃(aq) | White precipitate (AgCl) |
| Br⁻ (bromide) | Add HNO₃ + AgNO₃(aq) | Cream precipitate (AgBr) |
| I⁻ (iodide) | Add HNO₃ + AgNO₃(aq) | Yellow precipitate (AgI) |
| SO₄²⁻ (sulfate) | Add HCl + BaCl₂(aq) | White precipitate (BaSO₄) |
| CO₃²⁻ (carbonate) | Add dilute acid | Bubbles of CO₂; test with limewater → milky |
| NO₃⁻ (nitrate) | Add NaOH(aq) + Al foil, warm | NH₃ gas produced (turns damp red litmus blue) |

## Gas Tests

| Gas | Test | Positive result |
|-----|------|----------------|
| H₂ (hydrogen) | Lighted splint | Squeaky pop |
| O₂ (oxygen) | Glowing splint | Relights |
| CO₂ (carbon dioxide) | Bubble through limewater | Limewater turns milky/cloudy |
| Cl₂ (chlorine) | Damp blue litmus paper | Turns red then bleaches white |
| NH₃ (ammonia) | Damp red litmus paper | Turns blue |
| SO₂ (sulfur dioxide) | Acidified K₂Cr₂O₇ paper | Turns from orange to green |

## Key Facts
- Always acidify with HNO₃ before testing for halides (removes carbonate interference)
- Always acidify with HCl before testing for sulfate (removes carbonate/sulfite)
- Al³⁺ and Zn²⁺ both give white ppt with NaOH that dissolves in excess — differentiate with NH₃
- Na⁺ and K⁺ salts give NO precipitate with NaOH (both hydroxides are soluble)

## Related Notes
- [[Acids and Bases]]
- [[Chemical Tests]]
- [[IGCSE-Chem-Index]]"""),

("Solubility Rules", "All Na⁺, K⁺, NH₄⁺ salts and all nitrates are soluble. Most chlorides soluble (except AgCl, PbCl₂). Most sulfates soluble (except BaSO₄, PbSO₄, CaSO₄). Most carbonates and hydroxides are insoluble.", ["acids-bases"],
"""## The Solubility Rules

### Always SOLUBLE
1. All **sodium (Na⁺), potassium (K⁺), and ammonium (NH₄⁺)** salts
2. All **nitrates** (NO₃⁻)
3. Most **chlorides, bromides, iodides** — EXCEPT silver (Ag⁺) and lead (Pb²⁺)
4. Most **sulfates** — EXCEPT barium (Ba²⁺), lead (Pb²⁺), and calcium (Ca²⁺) — silver sulfate is slightly soluble

### Usually INSOLUBLE (except with Na⁺, K⁺, NH₄⁺)
5. Most **carbonates** (CO₃²⁻)
6. Most **hydroxides** (OH⁻) — except NaOH, KOH, and Ca(OH)₂ + Ba(OH)₂ (sparingly soluble)

## Quick Reference Table

| Salt type | Soluble? | Exceptions |
|-----------|----------|------------|
| Sodium/Potassium/Ammonium salts | ALL soluble | None |
| Nitrates | ALL soluble | None |
| Chlorides/Bromides/Iodides | Most soluble | AgCl, AgBr, AgI, PbCl₂, PbBr₂, PbI₂ |
| Sulfates | Most soluble | BaSO₄, PbSO₄, CaSO₄ (sparingly) |
| Carbonates | Most INSOLUBLE | Na₂CO₃, K₂CO₃, (NH₄)₂CO₃ |
| Hydroxides | Most INSOLUBLE | NaOH, KOH, Ca(OH)₂ (sparingly) |

## Why Are Solubility Rules Important?

- **Preparing insoluble salts**: Mix two soluble salts → insoluble salt precipitates
- **Identifying unknown ions**: Knowing which precipitate forms helps identify the ion
- **Water treatment and analysis**: Predict which compounds will dissolve
- **Predicting reactions**: A reaction only occurs if an insoluble product forms (precipitation)

## Key Precipitate Colours

| Precipitate | Colour |
|-------------|--------|
| AgCl | White |
| AgBr | Cream |
| AgI | Yellow |
| BaSO₄ | White |
| CaCO₃ | White |
| Cu(OH)₂ | Blue |
| Fe(OH)₂ | Green |
| Fe(OH)₃ | Red-brown |

## Key Facts
- ALL Group 1 (Na, K) and ammonium salts are soluble — no exceptions
- ALL nitrates are soluble — no exceptions
- For a precipitation reaction to occur, ONE product must be INSOLUBLE
- Solubility rules determine which method to use when preparing a salt

## Related Notes
- [[Making Salts]]
- [[Qualitative Analysis]]
- [[IGCSE-Chem-Index]]"""),

]

for name, summary, tags, body in topics:
    save(name, md(name, summary, tags, body))

print(f"Generated {len(topics)} more topic pages")
print(f"Total topics now: {len(list(TOPICS.glob('*.md')))}")
