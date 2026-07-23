# Nuclear Physics

**Summary**: Covers atomic structure (linking to Chemistry), isotopes, radioactivity (alpha, beta, gamma), half-life calculations, background radiation, uses and dangers of ionising radiation, nuclear fission (chain reactions, nuclear reactors), and nuclear fusion. This topic ties together physics, chemistry, and real-world energy applications.
**Tags**: #igcse #physics #nuclear #radioactivity #radiation #fission #fusion
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## Atomic Structure (Brief Recap)

An atom consists of:

| Particle | Relative Charge | Relative Mass | Location |
|----------|----------------|---------------|----------|
| Proton | +1 | 1 | Nucleus |
| Neutron | 0 | 1 | Nucleus |
| Electron | −1 | 1/1836 (~0) | Electron shells |

- **Atomic number (Z)** = number of protons
- **Mass number (A)** = protons + neutrons
- In a neutral atom: number of protons = number of electrons

For a more detailed treatment of atomic structure, electron configurations, and nuclide notation, see the IGCSE Chemistry [[Atomic Structure]] page.

## Isotopes

**Definition**: Isotopes are atoms of the **same element** (same number of protons/atomic number) with **different numbers of neutrons** (different mass numbers).

- Same chemical properties (same electron configuration)
- Different physical properties (different mass)
- Some isotopes are **radioactive** (unstable nucleus — will decay)

## Radioactivity

Radioactivity is the spontaneous emission of radiation from an **unstable nucleus** as it decays to become more stable. This is a **random** process — it is not possible to predict when an individual nucleus will decay, but the behaviour of a large number of nuclei can be described statistically.

**Three types of nuclear radiation:**

| Property | Alpha (α) | Beta (β) | Gamma (γ) |
|----------|-----------|----------|-----------|
| **Nature** | Helium nucleus: ⁴₂He (2 protons + 2 neutrons) | Fast-moving electron: ⁰₋₁e | Electromagnetic wave (high-frequency EM radiation) |
| **Charge** | +2 | −1 | 0 (no charge) |
| **Mass (relative)** | 4 | ~0 (1/1836) | 0 |
| **Ionising ability** | **Most** ionising (strongly ionises atoms it passes near) | Moderately ionising | **Least** ionising |
| **Penetrating power** | **Least** penetrating — stopped by a few cm of air, a sheet of paper, or dead skin cells | Moderately penetrating — stopped by a few mm of aluminium | **Most** penetrating — reduced (not completely stopped) by several cm of lead or metres of concrete |
| **Deflection in electric field** | Deflected towards negative plate (small deflection due to large mass) | Deflected towards positive plate (large deflection due to small mass) | No deflection (no charge) |
| **Deflection in magnetic field** | Deflected (according to Fleming's Left Hand Rule, small deflection) | Deflected in opposite direction (large deflection) | No deflection (no charge) |
| **Speed** | ~5-10% of speed of light | Up to ~90% of speed of light | Speed of light (3 × 10⁸ m/s) |
| **Emitted by nuclei with** | Too many protons and neutrons (heavy nuclei, e.g., uranium, radium) | Too many neutrons relative to protons (neutron → proton + electron) | Excess energy after alpha or beta decay |

**Nuclear equations** — when a nucleus decays:
- **Alpha decay**: mass number decreases by 4, atomic number decreases by 2
  - Example: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He (α particle)
- **Beta decay**: mass number stays the same, atomic number increases by 1 (a neutron changes into a proton + electron)
  - Example: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (β particle)
- **Gamma decay**: no change to mass number or atomic number. The nucleus just loses excess energy.

**Example 1**: Radium-226 (²²⁶₈₈Ra) decays by alpha emission. Identify the daughter nucleus.
```
²²⁶₈₈Ra → ⁴₂He + ²²²₈₆X
X has Z = 86, which is Radon (Rn). So the equation is: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He
```

**Example 2**: Carbon-14 (¹⁴₆C) decays by beta emission. Identify the daughter nucleus.
```
¹⁴₆C → ⁰₋₁e + ¹⁴₇X
X has Z = 7, which is Nitrogen (N). So the equation is: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e
```

## Half-Life

**Definition**: The **half-life** of a radioactive isotope is the time taken for **half the radioactive nuclei** in a sample to decay. Alternatively: the time for the count rate (activity) of a sample to fall to **half its initial value**.

**Key points:**
- Half-life is constant for a given isotope — it cannot be changed by temperature, pressure, or chemical reactions
- Half-lives range from fractions of a second to billions of years

**Half-life from a graph (decay curve):**
1. Read the initial count rate or number of nuclei at time = 0
2. Find half of this value on the y-axis
3. Read across to the curve and down to the x-axis — this time is the half-life
4. Repeat for a second half-life to check consistency

**Example 3**: A radioactive sample has an initial activity of 800 Bq. Its half-life is 3 hours. What is the activity after 12 hours?
```
Number of half-lives = 12 / 3 = 4
After 1 half-life: 800 → 400 Bq
After 2 half-lives: 400 → 200 Bq
After 3 half-lives: 200 → 100 Bq
After 4 half-lives: 100 → 50 Bq
Answer: 50 Bq
```

**Example 4**: A sample decays from 1000 counts per minute to 125 counts per minute in 9 days. Find the half-life.
```
1000 → 500 → 250 → 125  (3 half-lives)
3 half-lives = 9 days → half-life = 3 days
```

## Background Radiation

We are constantly exposed to low levels of radiation from natural and artificial sources:

| Source | Type | Typical Contribution |
|--------|------|---------------------|
| **Radon gas** (from rocks containing uranium) | Alpha | ~50% (largest single source) |
| **Cosmic rays** (from the Sun and outer space) | Various (mostly high-energy particles) | ~10% |
| **Rocks and soil** (granite contains uranium/thorium) | Alpha, beta, gamma | ~14% |
| **Food and drink** (e.g., bananas contain potassium-40) | Beta, gamma | ~12% |
| **Medical** (X-rays, radiotherapy, nuclear medicine) | X-rays, gamma | ~14% |
| **Nuclear industry / fallout from testing** | Various | <1% |

**Measuring background radiation**: When performing experiments with radioactive sources, always measure and subtract the background count. Use a Geiger-Muller (GM) tube and counter.

## Uses of Radioactivity

| Radiation Type | Application | Why This Type? |
|---------------|-------------|----------------|
| **Alpha (α)** | **Smoke detectors** (Americium-241) | Alpha particles ionise air between two electrodes → small current flows. Smoke absorbs alpha particles → current drops → alarm sounds. Alpha is used because: (a) it is highly ionising (creates detectable current), (b) it has very low penetrating power — does not escape the detector housing, making it safe |
| **Beta (β)** | **Thickness gauges** in paper/foil/aluminium production | A beta source is placed on one side of the material, a detector on the other. If the material is too thick: fewer beta particles reach detector → rollers adjust to make it thinner. If material too thin: more beta particles reach detector → rollers adjust. Beta used because: penetration is sensitive to thickness of material. Alpha would be stopped by paper; gamma would pass through regardless |
| **Gamma (γ)** | **Sterilising medical equipment and food** | Gamma rays kill bacteria/microorganisms by damaging their DNA. Equipment is sealed in packages first (gamma penetrates the packaging). Advantages: no heat needed (can sterilise heat-sensitive items like plastic syringes), no toxic chemicals |
| **Gamma (γ)** | **Cancer radiotherapy** | A narrow beam of gamma rays is targeted at a tumour from multiple angles. The tumour receives a high dose (killing cancer cells), while surrounding healthy tissue receives minimal dose from any single beam. Gamma used because it is highly penetrating and can reach deep tumours |
| **Gamma (γ)** | **Industrial radiography / Non-destructive testing** | Gamma source placed inside a pipe or behind welded metal; detector on other side checks for cracks, flaws, or corrosion. Gamma penetrates the metal |
| **Gamma (γ)** | **Tracers** in medicine and industry (e.g., detecting leaks in underground pipes) | A small amount of gamma-emitting isotope is injected into a system. A detector follows its path/movement. Gamma is used because it can be detected outside the body/pipe (penetrates to the surface). Short half-life isotopes are used to minimise long-term exposure |

## Dangers of Ionising Radiation

Ionising radiation (alpha, beta, gamma, X-rays) can **damage cells and DNA**:

- **Low doses**: DNA mutations → potentially cancer (leukaemia, thyroid cancer, etc.)
- **High doses**: radiation sickness (nausea, vomiting, hair loss, organ failure) → death
- **Alpha is most dangerous if ingested/inhaled**: Inside the body, alpha's high ionising power causes concentrated damage to a small area of tissue. Alpha cannot penetrate dead skin, so external alpha sources are relatively safe
- **Gamma is the most dangerous externally**: It can penetrate deep into the body and reach vital organs

**Safety precautions when handling radioactive sources:**
- Minimise **exposure time**
- Maximise **distance** from source (inverse square law — doubling distance reduces exposure to 1/4)
- Use appropriate **shielding** (lead for gamma, perspex for beta)
- Never point a source directly at anyone
- Handle sources with **tongs/forceps** (never bare hands)
- Store sources in **lead-lined containers** when not in use
- Wash hands after handling sources

## Nuclear Fission

**Nuclear fission** is the splitting of a large, unstable nucleus into two (or more) smaller nuclei, releasing energy and neutrons.

**Process:**
1. A large unstable nucleus (e.g., Uranium-235 or Plutonium-239) absorbs a slow/thermal **neutron**
2. The nucleus becomes highly unstable and **splits** into two smaller daughter nuclei (fission fragments)
3. **2 or 3 neutrons** are also released (typically 2.5 on average)
4. A large amount of **energy** is released (as kinetic energy of the fission fragments and neutrons, and as gamma radiation)

**Example fission equation:**
```
²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3(¹₀n) + energy
```

**Chain Reaction:**
The neutrons released by one fission event can be absorbed by other U-235 nuclei, causing them to fission and release more neutrons. This creates a self-sustaining chain reaction.

- **Uncontrolled chain reaction** → nuclear bomb (all neutrons cause further fissions)
- **Controlled chain reaction** → nuclear reactor (some neutrons absorbed to maintain a steady rate)

### Nuclear Reactor

A nuclear power station uses controlled fission to produce heat → steam → turbine → generator → electricity.

| Component | Function |
|-----------|----------|
| **Fuel rods** | Contain U-235 (enriched to ~3-5%) or Pu-239. Fission occurs here |
| **Moderator** (water or graphite) | Slows down the fast neutrons produced by fission. Slow/thermal neutrons are more likely to be captured by U-235 nuclei and cause further fission. The moderator surrounds the fuel rods |
| **Control rods** (boron or cadmium) | Absorb excess neutrons to control the rate of the chain reaction. Lowered into reactor → absorb more neutrons → reduce rate. Raised → fewer neutrons absorbed → increase rate. In an emergency, fully inserted to SCRAM/shut down reactor |
| **Coolant** (water, CO₂, or liquid sodium) | Transfers thermal energy from the reactor core to a heat exchanger/steam generator. Circulates through the core and becomes hot |
| **Heat exchanger** | Hot coolant heats water in a secondary loop → water turns to steam → steam drives turbine → turbine drives generator → electricity |
| **Shielding** (thick concrete and steel) | Protects workers and the environment from radiation |

**Advantages of nuclear power:**
- No CO₂ or SO₂ emissions (does not contribute to global warming or acid rain)
- Very high energy density — small amounts of fuel produce huge amounts of energy
- Reliable baseload power (not intermittent like wind/solar)

**Disadvantages of nuclear power:**
- Radioactive waste products — remain dangerous for thousands of years; need secure long-term storage
- Risk of catastrophic accidents (Chernobyl 1986, Fukushima 2011) — release of radioactive material into environment
- High decommissioning costs — reactors cannot simply be demolished; must be carefully dismantled
- Uranium is a finite (non-renewable) resource
- Public opposition due to safety concerns

## Nuclear Fusion

**Nuclear fusion** is the joining of two light nuclei to form a heavier nucleus, releasing a very large amount of energy.

**Example**: In the Sun, hydrogen nuclei (protons) fuse to form helium:
```
⁴(¹₁H) → ⁴₂He + 2(⁰₊₁e) + energy
```
(This is a simplified version — the actual process in stars is the proton-proton chain)

**Conditions required for fusion:**
- **Very high temperature** (~10-100 million °C) — so nuclei have enough kinetic energy to overcome their mutual electrostatic repulsion (both nuclei are positively charged)
- **Very high pressure** — to bring nuclei close enough for the strong nuclear force (attractive) to take over from the electrostatic force (repulsive)

**Nuclear fusion as an energy source on Earth:**
- **Advantages**: virtually unlimited fuel (deuterium and tritium from seawater), no long-lived radioactive waste (main product is helium), no CO₂, safer than fission (no chain reaction to run out of control — if conditions fail, fusion simply stops)
- **Disadvantages**: currently, a sustained fusion reaction producing net energy output has not yet been achieved on a commercial scale. Temperatures and pressures needed are extremely difficult to achieve and contain (no known material can withstand the temperature). Research continues (ITER project, tokamaks using magnetic confinement; laser-driven inertial confinement)

**Fusion in stars**: The immense gravity in stars provides the necessary temperature and pressure naturally. This is the process powering the Sun and all stars.

---

## Sources

- **BBC Bitesize GCSE Physics** — Nuclear/atomic physics guide, BBC (free educational resource)
- **OpenStax College Physics** — Nuclear Physics chapter, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Physics 0625** — Nuclear physics section, Cambridge Assessment International Education
- **CK-12 Physics for High School** — Nuclear Physics chapter, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Atomic Structure]] (IGCSE Chemistry) — Detailed treatment of atomic structure, electron configuration, and isotopes
- [[Energy Resources and Transfer]] — Nuclear power as an energy resource, comparison with fossil fuels and renewables
- [[Waves]] — Gamma rays as part of the electromagnetic spectrum
- [[Space Physics]] — Nuclear fusion in stars as their energy source
- [[IGCSE-Phys-Index]] — Full IGCSE Physics index

---

## Keywords

`isotope`, `radioactivity`, `alpha`, `beta`, `gamma`, `ionising radiation`, `half-life`, `decay curve`, `background radiation`, `Geiger-Muller tube`, `nuclear fission`, `chain reaction`, `moderator`, `control rod`, `coolant`, `nuclear reactor`, `nuclear fusion`, `plasma`, `strong nuclear force`, `electrostatic repulsion`

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "All radiation is dangerous" | We are exposed to safe levels of background radiation constantly. The danger depends on the **type**, **dose**, and **duration** of exposure |
| "Alpha radiation is the least dangerous because it can't penetrate skin" | Externally, alpha is safest. But if an alpha source is **inhaled or ingested**, it is the **most** dangerous because it deposits all its energy in a tiny area of tissue, causing intense localised damage |
| "Half-life changes with temperature or chemical state" | Half-life is a property of the nucleus and is **unaffected** by external conditions. Radioactive decay cannot be sped up, slowed down, or stopped |
| "After two half-lives, all the radioactive material is gone" | After two half-lives, **1/4 remains**. After three half-lives, 1/8 remains, and so on. The sample never mathematically reaches zero (though practically it becomes indistinguishable from background) |
| "Nuclear fusion is the same as burning" | Fusion is a nuclear process, not a chemical one. The Sun does not "burn" in the chemical sense — it fuses hydrogen into helium. The energy released is millions of times greater per unit mass |
| "A nuclear reactor can explode like a nuclear bomb" | Nuclear reactors **cannot** explode like a nuclear bomb. The fuel enrichment is far too low (~3-5% vs >90% for weapons). Reactor accidents involve steam/hydrogen explosions or meltdowns, not nuclear detonations |
| "Radioactivity is a man-made phenomenon" | Radioactivity is natural — it has existed since the formation of the Earth. We are surrounded by natural radioactive elements in rocks, air, food, and cosmic rays |
