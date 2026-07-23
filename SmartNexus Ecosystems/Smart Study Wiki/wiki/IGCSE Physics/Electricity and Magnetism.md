# Electricity and Magnetism

**Summary**: Covers electric current, potential difference, resistance and Ohm's Law, series and parallel circuits, electrical power and energy, domestic electricity and safety, magnetism, electromagnetism, the motor effect (Fleming's Left Hand Rule), DC motors, electromagnetic induction (Fleming's Right Hand Rule), AC generators, and transformers. This is one of the largest topics in IGCSE Physics 0625.
**Tags**: #igcse #physics #electricity #magnetism #circuits #electromagnetism #transformers
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## Electric Current

**Electric current** is the rate of flow of electric charge:
```
current = charge / time
I = Q / t
```

- I = current in **amperes (A)**, Q = charge in **coulombs (C)**, t = time in **seconds (s)**
- 1 ampere = 1 coulomb per second
- In a metal wire, current is the flow of **free electrons** (negatively charged)
- **Conventional current** flows from the positive terminal to the negative terminal (opposite to electron flow)

**Example 1**: A current of 2 A flows through a wire for 30 seconds. How much charge passes through?
```
Q = It = 2 × 30 = 60 C
```

## Potential Difference (Voltage)

**Potential difference (p.d.)** is the energy transferred per unit charge:
```
potential difference = energy transferred / charge
V = W / Q
```

- V = potential difference in **volts (V)**, W = energy in **joules (J)**, Q = charge in **coulombs (C)**
- 1 volt = 1 joule per coulomb
- p.d. is measured using a **voltmeter** connected in **parallel** across the component

**Electromotive force (e.m.f.)** is the total energy supplied per unit charge by a source (like a battery or generator). It is measured when no current is flowing (open circuit). The e.m.f. equals the sum of the p.d. across the external circuit and the internal p.d. (lost volts due to internal resistance).

## Resistance and Ohm's Law

**Resistance** is the opposition to the flow of current:
```
resistance = potential difference / current
R = V / I
```

- R = resistance in **ohms (Ω)**, 1 Ω = 1 V/A

**Ohm's Law**: For an **ohmic conductor** at constant temperature, the current through it is **directly proportional** to the potential difference across it (V ∝ I), so resistance is constant.

**I-V Characteristics:**

| Component | I-V Graph | Behaviour |
|-----------|-----------|-----------|
| Ohmic conductor (e.g., wire/resistor at constant temp) | Straight line through origin | V ∝ I, constant resistance |
| Filament lamp | S-shaped curve | As current increases, temperature increases → resistance increases. Graph curves — gradient decreases at high V |
| Diode | Very low current in reverse (almost zero), exponential rise in forward direction after ~0.6 V | Only conducts in one direction (forward bias); very high resistance in reverse bias |

**Factors affecting the resistance of a wire:**
1. **Length**: longer wire → higher resistance (R ∝ length)
2. **Cross-sectional area**: thicker wire → lower resistance (R ∝ 1/area)
3. **Material**: metals have different resistivities (copper = low resistivity, nichrome = higher)
4. **Temperature**: for metals, higher temperature → higher resistance (ions vibrate more, making it harder for electrons to pass). For semiconductors/thermistors, resistance decreases with temperature

**Common components:**

| Component | Symbol (circuit diagram description) | Key Property |
|-----------|--------------------------------------|-------------|
| Fixed resistor | Rectangle | Constant resistance (ohmic ideally) |
| Variable resistor (rheostat) | Rectangle with diagonal arrow | Adjustable resistance |
| Thermistor | Rectangle with temperature symbol | Resistance **decreases** as temperature increases |
| Light-dependent resistor (LDR) | Rectangle with light arrows | Resistance **decreases** as light intensity increases |
| Diode | Triangle pointing to a line | Conducts in one direction only |

**Example 2**: A component has a p.d. of 12 V across it and a current of 3 A flows through it. Calculate its resistance.
```
R = V / I = 12 / 3 = 4 Ω
```

**Example 3**: The p.d. across a fixed resistor is doubled. What happens to the current? (Assume the resistor is ohmic.)
```
Since R is constant, V ∝ I. If V doubles, I also doubles.
```

## Series and Parallel Circuits

### Series Circuits

- **Current**: the **same** at all points in the circuit (I₁ = I₂ = I₃ = ...)
- **Voltage**: the total p.d. across the whole circuit **equals the sum** of the p.d.s across each component (V_total = V₁ + V₂ + ...). The supply voltage is shared/divided between components.
- **Resistance**: total resistance equals the sum of individual resistances (R_total = R₁ + R₂ + ...)

### Parallel Circuits

- **Current**: the total current from the source **equals the sum** of the currents in each branch (I_total = I₁ + I₂ + ...). Current divides at junctions.
- **Voltage**: the p.d. across each branch is the **same** (and equals the source p.d.)
- **Resistance**: the reciprocal of total resistance equals the sum of reciprocals of individual resistances:
  ```
  1/R_total = 1/R₁ + 1/R₂ + ...
  ```
  The total resistance is **less than the smallest individual resistance** (adding more parallel branches decreases total resistance, increasing total current drawn from the supply).

**Example 4 (Series)**: Two resistors, 3 Ω and 6 Ω, are connected in series across a 12 V supply. Find: (a) the total resistance, (b) the current, (c) the p.d. across each resistor.
- (a) R_total = 3 + 6 = **9 Ω**
- (b) I = V / R = 12 / 9 = **1.33 A**
- (c) V across 3 Ω = I × 3 = 1.33 × 3 = **4 V**; V across 6 Ω = 1.33 × 6 = **8 V** (check: 4 + 8 = 12 V)

**Example 5 (Parallel)**: Two resistors, 4 Ω and 12 Ω, are connected in parallel across a 6 V supply. Find: (a) the total resistance, (b) the current from the supply, (c) the current through each resistor.
- (a) 1/R_total = 1/4 + 1/12 = 3/12 + 1/12 = 4/12 → R_total = **3 Ω**
- (b) I_total = V / R_total = 6 / 3 = **2 A**
- (c) I₁ (4 Ω) = 6/4 = **1.5 A**; I₂ (12 Ω) = 6/12 = **0.5 A** (check: 1.5 + 0.5 = 2 A)

## Electrical Power and Energy

**Power** is the rate of energy transfer:
```
Power = current × potential difference
P = IV
```

- P = power in **watts (W)**

Alternative forms (using V = IR):
```
P = I²R    (substituting V = IR)
P = V²/R   (substituting I = V/R)
```

**Energy transferred**:
```
Energy = power × time = current × potential difference × time
E = Pt = IVt
```

- E = energy in **joules (J)**. In domestic electricity, energy is often measured in **kilowatt-hours (kWh)**. 1 kWh = 3,600,000 J = 3.6 MJ

**Example 6**: A 230 V electric heater draws a current of 10 A. Calculate: (a) the power, (b) the energy transferred in 5 minutes.
- (a) P = IV = 10 × 230 = **2300 W = 2.3 kW**
- (b) E = Pt = 2300 × (5 × 60) = 2300 × 300 = **690,000 J = 690 kJ**

**Example 7**: A 60 W lamp is connected to a 240 V supply. Calculate the current and the resistance.
- I = P / V = 60 / 240 = **0.25 A**
- R = V / I = 240 / 0.25 = **960 Ω** (or R = V²/P = 240²/60 = 960 Ω)

## Domestic Electricity and Safety

**Mains electricity** in the UK is **230 V, 50 Hz alternating current (AC)**.

**Wiring in a domestic plug/circuit:**

| Wire | Colour (UK) | Function |
|------|------------|----------|
| **Live** | **Brown** | Carries the alternating current from the supply to the appliance at 230 V. The most dangerous wire. |
| **Neutral** | **Blue** | Completes the circuit — current returns through this wire. At approximately 0 V relative to earth. |
| **Earth** | **Green and yellow stripes** | Safety wire — provides a low-resistance path to the ground. If a fault makes the metal casing live, current flows to earth through this wire, blowing the fuse / tripping the circuit breaker. |

**Fuses and Circuit Breakers:**
- A **fuse** is a thin wire that melts and breaks the circuit if the current exceeds its rated value. It is always connected in the **live** wire.
- A **circuit breaker** (MCB) is a resettable device that switches off when current is too high (using electromagnetism or a bimetallic strip). It acts faster and can be reset, unlike a fuse.
- Fuses/circuit breakers protect against **overheating** and **fire** caused by excessive current.

**Ring main circuit**: In UK homes, sockets are wired in a ring — this means each socket receives current from two directions, allowing the use of thinner wire and providing more even current distribution. Each ring main has its own fuse/circuit breaker (typically 30 A).

**Double insulation**: Some appliances have a plastic casing and do not need an earth wire because there are no exposed metal parts that could become live (the appliance is "double insulated"). These appliances use a **two-core** cable (live and neutral only) and have the double-insulated symbol (two concentric squares).

**Safety precautions:**
- Never overload sockets (too many appliances → high current → overheating/fire)
- Never use appliances with damaged/frayed cables
- Never touch electrical appliances with wet hands (water reduces skin resistance → greater current)
- Never poke objects into sockets
- Ensure all appliances have the correct fuse rating
- RCD (Residual Current Device) detects imbalance between live and neutral currents → cuts off in milliseconds → protects against electrocution

**Dangers of electricity:**
- **Electric shock**: current passing through the body (>0.05 A can be fatal). Severity depends on current magnitude, path through body, and duration
- **Fire**: overloaded circuits or faulty wiring cause overheating → insulation can melt → short circuits → fire
- **Overheating of cables**: excessive current in thin wires → resistive heating (I²R losses) → melting/fire

## Magnetism

**Properties of magnets:**
- A magnet has two poles: **North (N)** and **South (S)**
- Like poles **repel** (N-N, S-S); unlike poles **attract** (N-S)
- Magnetic forces are **non-contact** forces

**Magnetic materials** (materials that can be magnetised / attracted by a magnet):
- **Iron** (soft iron — easily magnetised and demagnetised → used for temporary magnets/electromagnet cores)
- **Steel** (an alloy of iron — harder to magnetise but retains magnetism → used for permanent magnets)
- **Cobalt** and **Nickel** (also magnetic, but less common than iron/steel)

**Induced magnetism**: An unmagnetised magnetic material becomes a magnet when placed in a magnetic field. The induced poles are such that attraction occurs (the side closest to the permanent magnet acquires the opposite pole).

**Magnetic field lines:**
- Go from **North to South** outside the magnet
- Go from **South to North** inside the magnet (forming complete loops)
- The closer (denser) the field lines, the **stronger** the magnetic field
- Field lines never cross
- The Earth itself has a magnetic field (useful for navigation using compasses)

**Methods of magnetisation and demagnetisation:**
- Magnetise: stroke with a permanent magnet (single direction) OR place in a solenoid with DC current
- Demagnetise: hammer/heat (randomises domains) OR place in a solenoid with AC current and slowly withdraw

## Electromagnetism

When an electric current flows through a wire, a **magnetic field** is produced around it.

**Magnetic field around a straight current-carrying wire:**
- Concentric circles around the wire
- **Right-hand grip rule**: point your right thumb in the direction of conventional current → your curled fingers show the direction of the magnetic field (anticlockwise)

**Solenoid** (a coil of wire):
- The magnetic field inside a solenoid is **strong** and **uniform** (like a bar magnet)
- Outside the solenoid, the field resembles that of a bar magnet
- **Polarity of solenoid**: looking at one end, if the current flows clockwise → S pole; anticlockwise → N pole

**Factors affecting the strength of an electromagnet:**
1. **Current**: larger current → stronger magnetic field
2. **Number of turns** (coils): more turns → stronger magnetic field
3. **Iron core**: inserting a soft iron core dramatically increases the field strength (iron concentrates the magnetic field lines)

**Uses of electromagnets:** electric bells, relays, circuit breakers, lifting magnets in scrapyards, loudspeakers, MRI scanners.

## The Motor Effect

When a **current-carrying conductor** is placed in an **external magnetic field**, it experiences a **force** (unless it is parallel to the field lines).

```
Force = magnetic flux density × current × length of conductor
F = BIL
```

- F = force (N), B = magnetic flux density (tesla, T), I = current (A), L = length of conductor in the field (m)
- This formula applies when the conductor is **perpendicular** to the magnetic field

**Fleming's Left Hand Rule** (for the motor effect):
- **ThuMb** = Motion (force direction) — Thrust
- **First Finger** = Field direction (N → S)
- **SeCond Finger** = Current direction (conventional, + to −)

**Factors affecting the force:**
- Larger current → larger force
- Stronger magnetic field → larger force
- Longer conductor in the field → larger force

## DC Motor

A DC motor uses the motor effect to convert electrical energy into rotational kinetic energy.

**Structure:**
- A rectangular coil of wire (armature) is placed between the poles of a permanent magnet
- The ends of the coil are connected to a **split ring commutator**, which is connected to the DC supply via carbon brushes

**How it works:**
1. Current flows through the coil → force acts on each side of the coil (Fleming's Left Hand Rule) → forces are in opposite directions (one up, one down) → a **turning effect (couple)** → coil rotates
2. When the coil reaches the vertical position, the split ring commutator **reverses the direction of current** in the coil
3. This ensures the force on each side always acts in the same rotational direction → continuous rotation

**Factors increasing the turning effect:** larger current, stronger magnet, more turns on the coil, larger coil area, soft iron core in the coil.

## Electromagnetic Induction

When a conductor **cuts magnetic field lines** (or when the magnetic field through a circuit changes), a **potential difference (voltage)** is **induced** across the conductor. If the conductor is part of a complete circuit, an **induced current** flows.

**Factors affecting the magnitude of the induced p.d./current:**
1. **Speed** of movement: faster movement → larger induced p.d.
2. **Strength** of magnetic field: stronger magnet → larger induced p.d.
3. **Number of turns** on the coil: more turns → larger induced p.d.
4. **Area** of the coil: larger area → larger induced p.d.

**Fleming's Right Hand Rule** (for the generator effect / electromagnetic induction):
- **ThuMb** = Motion of conductor
- **First Finger** = Field direction (N → S)
- **SeCond Finger** = Current direction (conventional, induced)

## AC Generator (Alternator)

An AC generator converts kinetic (mechanical) energy into electrical energy, producing **alternating current**.

**Structure:**
- A rectangular coil of wire is rotated in a magnetic field
- The ends of the coil are connected to **slip rings** (not a split ring commutator)
- Carbon brushes press against the slip rings to collect the current

**How it works:**
- As the coil rotates, it continuously cuts magnetic field lines → an alternating p.d./current is induced
- The slip rings maintain continuous contact — the current direction reverses every half-turn
- The output is **alternating current (AC)** — current changes direction with each half-rotation

**The output graph** is a sine wave:
- Maximum p.d./current when the coil is horizontal (cutting field lines at the fastest rate)
- Zero p.d./current when the coil is vertical (moving parallel to field lines, not cutting them)

**Difference from DC motor**: A DC motor has a split ring **commutator** to produce direct current; an AC generator has **slip rings** to produce alternating current.

## Transformers

A transformer changes the voltage of an alternating current supply. It only works with **AC** (a changing magnetic field is needed to induce a voltage in the secondary coil).

**Structure**: Two coils of wire (primary and secondary) wound around a **laminated soft iron core**. The core concentrates and guides the magnetic field.

**Operation:**
1. An alternating current in the primary coil produces a **changing magnetic field** in the core
2. The changing magnetic field cuts through the secondary coil
3. An **alternating p.d.** is induced across the secondary coil (electromagnetic induction)
4. If the secondary circuit is complete, an alternating current flows

**Transformer equations:**

**Voltage ratio:**
```
Vp / Vs = Np / Ns
```
- Vp = primary voltage, Vs = secondary voltage
- Np = number of turns on primary coil, Ns = number of turns on secondary coil

**For a 100% efficient (ideal) transformer**, power in = power out:
```
Vp × Ip = Vs × Is
```

**Step-up transformer**: Ns > Np → Vs > Vp (voltage increases). Used at power stations before transmission.
**Step-down transformer**: Ns < Np → Vs < Vp (voltage decreases). Used at local substations and in device chargers.

**Why high voltage is used for electricity transmission:**
- Power stations step up voltage to ~400 kV before transmission
- For a given power (P = IV), higher voltage means **lower current**
- Lower current means **less energy dissipated as heat** in the cables (P_loss = I²R)
- Before reaching homes, step-down transformers reduce voltage to safe levels (230 V)

**Example 8**: A transformer has 500 turns on the primary coil and 50 turns on the secondary. The primary voltage is 230 V. Calculate: (a) the secondary voltage, (b) the secondary current if the primary current is 0.5 A (assume 100% efficient).
- (a) Vp/Vs = Np/Ns → 230/Vs = 500/50 → Vs = 230 × 50/500 = **23 V** (step-down)
- (b) VpIp = VsIs → 230 × 0.5 = 23 × Is → Is = 115/23 = **5 A**

---

## Sources

- **BBC Bitesize GCSE Physics** — Electricity and Magnetism topics, BBC (free educational resource)
- **OpenStax College Physics** — Electric Circuits chapter, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Physics 0625** — Electricity and magnetism section, Cambridge Assessment International Education
- **CK-12 Physics for High School** — Electricity and Magnetism chapters, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Forces and Motion]] — F = ma applies to motor effect forces
- [[Energy Resources and Transfer]] — Electrical power and energy calculations, Sankey diagrams for efficiency
- [[Waves]] — AC generator output as a sine wave
- [[Nuclear Physics]] — Nuclear power stations use generators driven by steam turbines
- [[IGCSE-Phys-Index]] — Full IGCSE Physics index

---

## Keywords

`current`, `potential difference`, `resistance`, `Ohm's Law`, `series`, `parallel`, `power`, `energy`, `domestic electricity`, `live`, `neutral`, `earth`, `fuse`, `circuit breaker`, `magnetic field`, `electromagnet`, `solenoid`, `motor effect`, `Fleming's Left Hand Rule`, `commutator`, `electromagnetic induction`, `Fleming's Right Hand Rule`, `AC generator`, `alternator`, `transformer`, `step-up`, `step-down`, `National Grid`, `AC`, `DC`

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "Current is 'used up' as it goes around a circuit" | Current is the **same** at all points in a series circuit. It is not consumed — energy is transferred, not current |
| "A battery supplies a constant current" | A battery supplies a (roughly) constant **voltage**. The current depends on the resistance of the connected circuit |
| "Electrons travel at the speed of light around a circuit" | Individual electrons drift very slowly (~mm/s). It is the **electric field/energy signal** that propagates near the speed of light |
| "Voltage is the same as energy" | Voltage is energy **per unit charge** (joules per coulomb). A high voltage does not necessarily mean high energy |
| "Adding more resistors in parallel increases total resistance" | Adding resistors in parallel **decreases** total resistance (more paths for current → less overall opposition) |
| "AC and DC are fundamentally different types of electricity" | Both involve the flow of charge. DC flows in one direction. AC regularly reverses direction (50 times per second = 50 Hz) |
| "The earth wire carries current during normal operation" | The earth wire carries **no current** normally. It only carries current if there is a fault (e.g., live wire touches metal casing) |
| "A magnet can attract any metal" | Magnets only attract magnetic materials: iron, steel, cobalt, nickel. Common metals like copper, aluminium, gold, and silver are **not** magnetic |
| "Transformers work with DC" | Transformers require a **changing** magnetic field → they only work with **AC**. DC would produce a steady field and induce nothing after initial connection |
