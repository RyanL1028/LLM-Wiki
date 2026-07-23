# Forces and Motion

**Summary**: Covers scalars and vectors, speed, velocity, acceleration, equations of motion (SUVAT), Newton's three laws, momentum, moments, Hooke's Law, and circular motion. This is the largest topic in IGCSE Physics 0625 and underpins many other areas.
**Tags**: #igcse #physics #mechanics #forces #motion
**Created**: 2026-07-16
**Last Updated**: 2026-07-16

---

## Scalars and Vectors

A **scalar** quantity has magnitude (size) only. A **vector** quantity has both magnitude and direction.

| Scalars | Vectors |
|---------|---------|
| Distance | Displacement |
| Speed | Velocity |
| Mass | Weight |
| Energy | Force |
| Time | Acceleration |
| Temperature | Momentum |

**Distance** is how far an object moves along its path (scalar). **Displacement** is the straight-line distance from start to finish in a given direction (vector).

**Example**: A runner completes one lap of a 400 m circular track.
- Distance travelled = **400 m**
- Displacement = **0 m** (they finish where they started)

**Speed** is the rate of change of distance. **Velocity** is the rate of change of displacement (speed in a given direction).

## Speed, Velocity, and Acceleration

**Average speed**:
```
speed = distance / time
v = d / t
```
Units: m/s (or km/h, but use m/s in calculations unless converting)

**Average velocity**:
```
velocity = displacement / time
```
Units: m/s with a direction

**Acceleration** is the rate of change of velocity:
```
acceleration = change in velocity / time taken
a = (v - u) / t
```
Where: u = initial velocity (m/s), v = final velocity (m/s), t = time (s)
Units: m/s²

- Acceleration can be **positive** (speeding up) or **negative** (slowing down, deceleration)
- An object moving at constant speed in a circle is **accelerating** because its direction is constantly changing

**Example 1**: A car accelerates from 10 m/s to 30 m/s in 5 seconds. Calculate its acceleration.
```
a = (v - u) / t = (30 - 10) / 5 = 20 / 5 = 4 m/s²
```

**Example 2**: A train travelling at 40 m/s decelerates uniformly at 2 m/s². How long does it take to come to rest?
```
a = (v - u) / t → -2 = (0 - 40) / t → t = -40 / -2 = 20 s
```

## Motion Graphs

### Distance-Time Graphs

- **Gradient** = speed (steeper gradient = faster speed)
- **Horizontal line** = object is stationary (at rest)
- **Straight sloping line** = constant speed
- **Curved line** = changing speed (acceleration or deceleration)

To find speed from a distance-time graph: draw a tangent to the curve at the point of interest, then calculate gradient = rise / run.

### Speed-Time / Velocity-Time Graphs

- **Gradient** = acceleration
- **Area under the graph** = distance travelled
- **Horizontal line** = constant speed (zero acceleration)
- **Straight sloping line** = constant acceleration
- **Line sloping down to time axis** = constant deceleration

**Example 3**: A velocity-time graph shows a straight line from (0, 0) to (10, 20). Find: (a) the acceleration, (b) the distance travelled.
- (a) Acceleration = gradient = (20 − 0) / (10 − 0) = **2 m/s²**
- (b) Distance = area under graph = area of triangle = ½ × base × height = ½ × 10 × 20 = **100 m**

## Equations of Motion (SUVAT Equations)

For motion with **uniform (constant) acceleration** in a straight line:

| Equation | Missing Variable |
|----------|-----------------|
| v = u + at | s (displacement) |
| s = ut + ½at² | v (final velocity) |
| v² = u² + 2as | t (time) |
| s = (u + v)t / 2 | a (acceleration) |

Where:
- **s** = displacement (m)
- **u** = initial velocity (m/s)
- **v** = final velocity (m/s)
- **a** = acceleration (m/s²)
- **t** = time (s)

**Example 4**: A car accelerates from rest at 3 m/s² for 8 seconds. Find the distance travelled.
- Known: u = 0, a = 3 m/s², t = 8 s. Need: s
- Use s = ut + ½at²
- s = (0 × 8) + ½ × 3 × 8² = 0 + ½ × 3 × 64 = **96 m**

**Example 5**: A stone is dropped from a cliff and hits the ground at 40 m/s. How high is the cliff? (g = 10 m/s²)
- Known: u = 0, v = 40 m/s, a = g = 10 m/s². Need: s
- Use v² = u² + 2as → 40² = 0² + 2 × 10 × s → 1600 = 20s → s = **80 m**

## Free Fall and g

All objects in free fall near the Earth's surface accelerate downwards at the same rate if air resistance is negligible:

- **g = 9.8 m/s²** (often approximated as **10 m/s²** in IGCSE)
- g is the **acceleration due to gravity**
- In free fall: use SUVAT equations with a = g (take downward as positive, or upward as positive with a = −g — be consistent with sign conventions)

**Key fact**: In a vacuum, a feather and a hammer fall at the same rate. On Earth, air resistance causes lighter objects with large surface areas to fall more slowly.

## Newton's Three Laws of Motion

### First Law (Law of Inertia)
An object remains at rest or moves with constant velocity in a straight line unless acted upon by a resultant (net) external force.

- If resultant force = 0: object is either stationary OR moving at constant velocity
- **Inertia**: the tendency of an object to resist changes in its motion. Greater mass = greater inertia.

### Second Law
The acceleration of an object is directly proportional to the resultant force and inversely proportional to its mass:
```
F = ma
```
- F = resultant force (N), m = mass (kg), a = acceleration (m/s²)
- 1 newton is the force needed to accelerate 1 kg at 1 m/s²

**Example 6**: A force of 50 N acts on a mass of 20 kg. Find the acceleration.
```
a = F / m = 50 / 20 = 2.5 m/s²
```

### Third Law (Action-Reaction)
Whenever object A exerts a force on object B, object B exerts an **equal and opposite** force on object A.

- The two forces act on **different objects** — this is why they do not cancel out
- Examples: rocket propulsion (exhaust gases pushed backwards → rocket pushed forwards), recoil of a gun, swimming (pushing water backwards → moving forwards)

## Mass, Weight, and Gravity

**Mass** is the amount of matter in an object. It is a **scalar** quantity measured in **kilograms (kg)**. Mass does not change with location — the mass of an object is the same on Earth and on the Moon.

**Weight** is the gravitational force acting on a mass. It is a **vector** quantity measured in **newtons (N)**. Weight changes with the gravitational field strength g.

```
Weight = mass × gravitational field strength
W = mg
```

- On Earth: g ≈ 9.8 N/kg (or 10 N/kg for IGCSE calculations)
- On the Moon: g ≈ 1.6 N/kg (about 1/6 of Earth's)

**Example 7**: An astronaut has a mass of 70 kg. Calculate her weight (a) on Earth (g = 10 N/kg), (b) on the Moon (g = 1.6 N/kg).
- (a) W = mg = 70 × 10 = **700 N**
- (b) W = mg = 70 × 1.6 = **112 N**

## Terminal Velocity

When an object falls through a fluid (liquid or gas), two main forces act:
1. **Weight** (downwards, constant)
2. **Air resistance / drag** (upwards, increases with speed)

**Stages of a skydiver:**
1. Initially: weight >> air resistance → large downward acceleration
2. As speed increases: air resistance increases → resultant force decreases → acceleration decreases
3. Terminal velocity reached: weight = air resistance → resultant force = 0 → constant speed
4. Parachute opens: air resistance suddenly increases (large surface area) → deceleration
5. New lower terminal velocity: weight = air resistance again → constant lower speed until landing

**Key point**: At terminal velocity, the resultant force is **zero** and the object moves at **constant speed**. The object is NOT stationary.

## Momentum

**Momentum** (p) is the product of mass and velocity:
```
momentum = mass × velocity
p = mv
```
Units: kg m/s. Momentum is a **vector** quantity (direction of velocity).

### Conservation of Momentum
In a closed system (no external forces), the **total momentum before an interaction equals the total momentum after**:
```
m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂
```

**Example 8**: A truck of mass 2000 kg moving at 10 m/s collides with a stationary car of mass 1000 kg. They stick together. Find their combined velocity after the collision.
- Momentum before = (2000 × 10) + (1000 × 0) = 20,000 kg m/s
- Momentum after = (2000 + 1000) × v = 3000v
- 3000v = 20,000 → v = **6.67 m/s**

### Impulse
Impulse is the change in momentum caused by a force acting over time:
```
Impulse = force × time = change in momentum
Ft = Δ(mv)
```

- Crumple zones and airbags in cars **increase the time** over which momentum changes during a crash, thereby **reducing the force** experienced by occupants
- This is why eggs break on concrete but not when caught by a soft surface — same change in momentum, longer time, smaller force

## Stopping Distance

```
Stopping distance = Thinking distance + Braking distance
```

- **Thinking distance**: distance travelled during the driver's reaction time (before brakes are applied). Affected by: tiredness, alcohol, drugs, distractions, speed.
- **Braking distance**: distance travelled while brakes are applied and car decelerates to rest. Affected by: speed, mass of vehicle, condition of brakes/tyres, road surface (wet/icy), gradient of road.

**Key fact**: If speed **doubles**, braking distance increases by a factor of **4** (because KE ∝ v², and work done by brakes = F × d = KE).

## Moments (Turning Effect of a Force)

The **moment** of a force about a pivot is:
```
moment = force × perpendicular distance from pivot
M = Fd
```
Units: N m (newton-metres)

- A moment can be **clockwise** or **anticlockwise**

### Principle of Moments
For an object in equilibrium (balanced, not rotating):
```
total clockwise moments = total anticlockwise moments
```

**Example 9**: A seesaw is 4 m long with the pivot at the centre. A child of weight 300 N sits 1.5 m from the pivot on the left. Where must a child of weight 400 N sit on the right to balance?
- Clockwise moment = anticlockwise moment
- 300 × 1.5 = 400 × d → 450 = 400d → d = **1.125 m** from the pivot

### Centre of Gravity
The centre of gravity (CoG) is the point through which the entire weight of an object appears to act. For a uniform regular shape, the CoG is at its geometric centre.

**Stability**:
- An object is stable if its CoG is **low** and its base is **wide**
- An object topples when a vertical line through its CoG falls **outside its base**

## Hooke's Law

For a spring (or any elastic material) within its **elastic limit**:
```
force = spring constant × extension
F = kx
```

- F = force applied (N), k = spring constant (N/m), x = extension (m)
- **Spring constant (k)**: a measure of stiffness — higher k = stiffer spring
- **Elastic limit**: the maximum force that can be applied before the spring is permanently deformed (does not return to its original length)
- **Limit of proportionality**: the point beyond which F is no longer proportional to x (on an F-x graph, the line stops being straight)

A graph of force (y-axis) against extension (x-axis):
- Straight line through origin = Hooke's Law obeyed
- The gradient of the straight section = spring constant k
- The point where the graph curves = elastic limit/limit of proportionality

**Elastic potential energy** stored in a stretched spring:
```
E_elastic = ½Fx = ½kx²
```
(Where F is the force producing extension x)

**Example 10**: A spring stretches 0.05 m when a 6 N load is hung on it. Find: (a) the spring constant, (b) the elastic potential energy stored.
- (a) k = F / x = 6 / 0.05 = **120 N/m**
- (b) E = ½Fx = ½ × 6 × 0.05 = **0.15 J** (or E = ½kx² = ½ × 120 × 0.05² = 0.15 J)

## Circular Motion

An object moving in a circle at constant speed has **changing velocity** (direction changes) and therefore is **accelerating**.

The acceleration is directed towards the **centre of the circle** — this is **centripetal acceleration**.

The force causing this acceleration is the **centripetal force**, also directed towards the centre. It is not a new type of force — it is provided by an existing force:

| Situation | What provides centripetal force? |
|-----------|----------------------------------|
| Car turning a corner | Friction between tyres and road |
| Ball on a string swung in a circle | Tension in the string |
| Earth orbiting the Sun | Gravitational attraction |
| Electron orbiting nucleus | Electrostatic attraction |

**Key fact**: If the centripetal force is removed, the object continues in a **straight line** tangent to the circle (Newton's First Law).

**Factors affecting centripetal force** (qualitative for IGCSE):
- Greater mass → greater centripetal force needed
- Greater speed → greater centripetal force needed
- Smaller radius → greater centripetal force needed

---

## Sources

- **BBC Bitesize GCSE Physics** — Forces and motion topic, BBC (free educational resource)
- **OpenStax College Physics** — Kinematics and Dynamics chapters, Rice University (free, CC BY 4.0)
- **Cambridge IGCSE Physics 0625** — Forces and motion section, Cambridge Assessment International Education
- **CK-12 Physics for High School** — Motion and Force chapter, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Energy Resources and Transfer]] — Kinetic energy, GPE, work done, power
- [[Thermal Physics]] — Gas laws relate to particle motion
- [[Electricity and Magnetism]] — Motor effect involves forces on current-carrying conductors
- [[Space Physics]] — Gravity provides centripetal force for orbits
- [[IGCSE-Phys-Index]] — Full IGCSE Physics index

---

## Keywords

`velocity`, `acceleration`, `resultant force`, `mass`, `weight`, `momentum`, `moment`, `pivot`, `equilibrium`, `Hooke's Law`, `spring constant`, `elastic limit`, `centripetal`, `terminal velocity`, `displacement`, `SUVAT`, `gradient`, `area under graph`, `scalar`, `vector`, `impulse`

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "If resultant force is zero, the object must be at rest" | Zero resultant force means no **change** in motion — the object could be stationary OR moving at constant velocity |
| "Action and reaction forces cancel out" | They act on **different objects**, so they do not cancel — if they did, no object could ever accelerate |
| "Mass and weight are the same thing" | Mass is the amount of matter (kg, scalar). Weight is the gravitational force (N, vector). Mass is constant; weight changes with g |
| "Heavier objects fall faster" | All objects fall at the same rate in a vacuum. Air resistance causes differences on Earth |
| "Acceleration always means speeding up" | Acceleration is any change in velocity — speeding up, slowing down, OR changing direction (as in circular motion) |
| "The area under a speed-time graph gives speed" | Area under gives **distance travelled**. Gradient gives acceleration |
| "Terminal velocity means the object has stopped" | Terminal velocity means constant speed (weight = drag). The object is still moving — just not accelerating |
| "A spring obeys Hooke's Law for any load" | Hooke's Law only holds up to the **elastic limit** — beyond this, the spring is permanently deformed |
