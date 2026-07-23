const FLASHCARD_DATA = [
  {
    "id": "2d-array",
    "title": "2D Array",
    "summary": "A two-dimensional array that stores data in a grid-like structure with rows and columns. Accessed using two indices (row, column). Can represent tables, matrices, and game boards.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/2D Array.md"
  },
  {
    "id": "acc",
    "title": "ACC",
    "summary": "Accumulator — a register that stores the results of calculations performed by the ALU.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/ACC.md"
  },
  {
    "id": "alu",
    "title": "ALU",
    "summary": "Arithmetic Logic Unit — a component of the CPU that performs arithmetic operations (addition, subtraction) and logical operations (AND, OR, NOT).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/ALU.md"
  },
  {
    "id": "and-gate",
    "title": "AND Gate",
    "summary": "A logic gate with two inputs that outputs 1 only when both inputs are 1. Otherwise outputs 0. Symbol: D-shaped with flat side on the right.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/AND Gate.md"
  },
  {
    "id": "ascii",
    "title": "ASCII",
    "summary": "American Standard Code for Information Interchange — a 7-bit character encoding standard that represents 128 characters including letters, digits, and symbols.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/ASCII.md"
  },
  {
    "id": "action-reaction",
    "title": "Action-Reaction",
    "summary": "Newton's third law principle: every force has an equal and opposite counterpart.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Action-Reaction.md"
  },
  {
    "id": "activation-energy",
    "title": "Activation Energy",
    "summary": "Minimum energy required for a chemical reaction to occur.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Activation Energy.md"
  },
  {
    "id": "actuator",
    "title": "Actuator",
    "summary": "An output device that converts electrical signals from a computer into physical movement or action. Examples: motors, pumps, valves, solenoids.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Actuator.md"
  },
  {
    "id": "aid-coordination",
    "title": "Aid Coordination",
    "summary": "Processes for organizing and managing humanitarian assistance effectively.",
    "tags": [
      "concepts",
      "humanitarian",
      "coordination",
      "aid"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Aid Coordination.md"
  },
  {
    "id": "aid-delivery",
    "title": "Aid Delivery",
    "summary": "Methods and logistics for distributing humanitarian assistance to beneficiaries.",
    "tags": [
      "concepts",
      "humanitarian",
      "logistics",
      "aid"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Aid Delivery.md"
  },
  {
    "id": "algorithm",
    "title": "Algorithm",
    "summary": "A step-by-step sequence of instructions designed to solve a specific problem or perform a task. Must be clear, unambiguous, and terminate after a finite number of steps.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Algorithm.md"
  },
  {
    "id": "application-software",
    "title": "Application Software",
    "summary": "Software designed to perform specific tasks for the user, such as word processors, spreadsheets, web browsers, and games. Runs on top of system software.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Application Software.md"
  },
  {
    "id": "arithmetic-operator",
    "title": "Arithmetic Operator",
    "summary": "Symbols used in programming to perform mathematical calculations. Includes: + (addition), - (subtraction), * (multiplication), / (division), MOD (remainder), DIV (integer division).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Arithmetic Operator.md"
  },
  {
    "id": "array",
    "title": "Array",
    "summary": "A data structure that stores multiple values of the same data type under a single identifier, accessed using an index. Elements are stored contiguously in memory. Indices typically start at 0 or 1.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Array.md"
  },
  {
    "id": "artificial-intelligence",
    "title": "Artificial Intelligence",
    "summary": "The simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, perception, and language understanding.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Artificial Intelligence.md"
  },
  {
    "id": "assembler",
    "title": "Assembler",
    "summary": "A translator that converts assembly language into machine code. Assembly language uses mnemonics; the assembler translates them into binary machine code.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Assembler.md"
  },
  {
    "id": "assessment-methods",
    "title": "Assessment Methods",
    "summary": "Techniques used in humanitarian needs assessment.",
    "tags": [
      "concepts",
      "assessment",
      "methods",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Assessment Methods.md"
  },
  {
    "id": "asylum",
    "title": "Asylum",
    "summary": "Legal protection for refugees in host countries.",
    "tags": [
      "concepts",
      "refugees",
      "rights",
      "international"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Asylum.md"
  },
  {
    "id": "asymmetric-encryption",
    "title": "Asymmetric Encryption",
    "summary": "Encryption using a pair of keys: a public key for encryption and a private key for decryption. Enables secure communication without pre-sharing a secret key.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Asymmetric Encryption.md"
  },
  {
    "id": "atoms",
    "title": "Atoms",
    "summary": "Atoms are the smallest part of an Elements that can exist.",
    "tags": [
      "concepts",
      "chemistry",
      "atoms",
      "science",
      "school",
      "y7"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Atoms.md"
  },
  {
    "id": "automated-system",
    "title": "Automated System",
    "summary": "A combination of hardware and software designed to operate with minimal human intervention. Uses sensors for input, microprocessors for processing, and actuators for output.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Automated System.md"
  },
  {
    "id": "automatic-repeat-request-(arq)",
    "title": "Automatic Repeat Request (ARQ)",
    "summary": "An error control method where the receiver acknowledges correctly received data and requests retransmission if an error is detected.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Automatic Repeat Request (ARQ).md"
  },
  {
    "id": "balanced-and-unbalanced-forces",
    "title": "Balanced and Unbalanced Forces",
    "summary": "Balanced forces give zero resultant; unbalanced forces create acceleration.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Balanced and Unbalanced Forces.md"
  },
  {
    "id": "binary-addition",
    "title": "Binary Addition",
    "summary": "The process of adding two binary numbers together following rules where 0+0=0, 1+0=1, 1+1=0 carry 1, and 1+1+1=1 carry 1.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Binary Addition.md"
  },
  {
    "id": "binary-search",
    "title": "Binary Search",
    "summary": "A search algorithm that works on sorted lists by repeatedly dividing the search interval in half. Much faster than linear search but requires the data to be pre-sorted.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Binary Search.md"
  },
  {
    "id": "binary",
    "title": "Binary",
    "summary": "A base-2 number system using only 0 and 1, the fundamental numbering system used by computers to represent all data and instructions.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Binary.md"
  },
  {
    "id": "biofuels",
    "title": "Biofuels",
    "summary": "Renewable fuels produced from biological matter.",
    "tags": [
      "concepts",
      "chemistry",
      "environment",
      "energy"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Biofuels.md"
  },
  {
    "id": "bitmap-image",
    "title": "Bitmap Image",
    "summary": "An image represented as a grid of pixels where each pixel's colour is stored as a binary value. Higher resolution means more pixels and larger file size.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Bitmap Image.md"
  },
  {
    "id": "boolean-logic",
    "title": "Boolean Logic",
    "summary": "A form of algebra where all values are either TRUE (1) or FALSE (0). Used in computer circuits, programming conditions, and search queries.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Boolean Logic.md"
  },
  {
    "id": "boolean",
    "title": "Boolean",
    "summary": "A data type that can hold only one of two values: TRUE or FALSE. Used for conditions and logical operations.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Boolean.md"
  },
  {
    "id": "bootstrap",
    "title": "Bootstrap",
    "summary": "The initial program (stored in ROM) that runs when a computer is powered on, loading the operating system from secondary storage into RAM.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Bootstrap.md"
  },
  {
    "id": "bubble-sort",
    "title": "Bubble Sort",
    "summary": "A sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. Continues until no more swaps are needed.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Bubble Sort.md"
  },
  {
    "id": "cir",
    "title": "CIR",
    "summary": "Current Instruction Register — holds the instruction currently being decoded and executed by the CPU.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/CIR.md"
  },
  {
    "id": "count-function",
    "title": "COUNT Function",
    "summary": "An SQL aggregate function that returns the number of records matching a query. Example: SELECT COUNT(*) FROM Students WHERE Grade = 'A'.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/COUNT Function.md"
  },
  {
    "id": "cpu",
    "title": "CPU",
    "summary": "Central Processing Unit — the brain of the computer that processes instructions, performs calculations, and controls the flow of data. Contains the ALU, CU, and registers.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/CPU.md"
  },
  {
    "id": "cache-memory",
    "title": "Cache Memory",
    "summary": "A small amount of very fast memory located on or near the CPU that stores frequently accessed data and instructions to reduce the need to access slower RAM.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Cache Memory.md"
  },
  {
    "id": "cash-transfers",
    "title": "Cash Transfers",
    "summary": "Providing money directly to aid recipients for purchasing needs.",
    "tags": [
      "concepts",
      "humanitarian",
      "aid",
      "finance"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Cash Transfers.md"
  },
  {
    "id": "catalysts",
    "title": "Catalysts",
    "summary": "Substances that speed up chemical reactions without being consumed.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Catalysts.md"
  },
  {
    "id": "changes-of-state",
    "title": "Changes of State",
    "summary": "Physical transformations between solid, liquid, and gas without creating new substances.",
    "tags": [
      "concepts",
      "chemistry",
      "physics"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Changes of State.md"
  },
  {
    "id": "checksum",
    "title": "Checksum",
    "summary": "An error detection method where a calculated value is sent alongside data. The receiver recalculates and compares; a mismatch indicates an error.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Checksum.md"
  },
  {
    "id": "chemical-formulae",
    "title": "Chemical Formulae",
    "summary": "Chemical Formulae show the relative numbers of each atom in a Compounds.",
    "tags": [
      "concepts",
      "chemistry",
      "formulae",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemical Formulae.md"
  },
  {
    "id": "chemical-reactions",
    "title": "Chemical Reactions",
    "summary": "Processes where atoms rearrange to form new substances with different properties.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemical Reactions.md"
  },
  {
    "id": "chemical-symbols",
    "title": "Chemical Symbols",
    "summary": "Chemical Symbols are one- or two-letter abbreviations used to represent Elements.",
    "tags": [
      "concepts",
      "chemistry",
      "notation",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemical Symbols.md"
  },
  {
    "id": "climate-change",
    "title": "Climate Change",
    "summary": "Long-term shifts in global climate patterns, accelerated by human activities.",
    "tags": [
      "concepts",
      "environment",
      "science"
    ],
    "subject": "General",
    "wiki": "Concepts/Climate Change.md"
  },
  {
    "id": "clock-speed",
    "title": "Clock Speed",
    "summary": "The speed at which a CPU processes instructions, measured in hertz (Hz). A higher clock speed means more cycles per second and faster processing.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Clock Speed.md"
  },
  {
    "id": "cloud-storage",
    "title": "Cloud Storage",
    "summary": "Remote data storage accessed via the internet where files are stored on servers managed by a third-party provider. Offers accessibility, scalability, and off-site backup.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Cloud Storage.md"
  },
  {
    "id": "colour-depth",
    "title": "Colour Depth",
    "summary": "The number of bits used to represent the colour of each pixel in a bitmap image. Higher colour depth allows more colours but increases file size.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Colour Depth.md"
  },
  {
    "id": "combustion",
    "title": "Combustion",
    "summary": "Rapid oxidation reaction releasing heat and light.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Combustion.md"
  },
  {
    "id": "compiler",
    "title": "Compiler",
    "summary": "A translator that converts the entire high-level language source code into machine code at once, producing a standalone executable file. The translation only happens once.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Compiler.md"
  },
  {
    "id": "compounds",
    "title": "Compounds",
    "summary": "Compounds are pure substances made from atoms of two or more Elements that are chemically bonded.",
    "tags": [
      "concepts",
      "chemistry",
      "compounds",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Compounds.md"
  },
  {
    "id": "conflict-resolution",
    "title": "Conflict Resolution",
    "summary": "Methods and processes for peacefully ending armed conflict and addressing its root causes.",
    "tags": [
      "concepts",
      "conflict",
      "international",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Conflict Resolution.md"
  },
  {
    "id": "conflict-zones",
    "title": "Conflict Zones",
    "summary": "Areas affected by armed conflict, posing unique challenges for civilian life and aid delivery.",
    "tags": [
      "concepts",
      "conflict",
      "geography",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Conflict Zones.md"
  },
  {
    "id": "constant",
    "title": "Constant",
    "summary": "A named storage location in memory that holds a value which cannot be changed during program execution. Declared once and stays fixed.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Constant.md"
  },
  {
    "id": "contact-and-non-contact-forces",
    "title": "Contact and Non-Contact Forces",
    "summary": "Contact forces require touching; non-contact forces act at a distance.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Contact and Non-Contact Forces.md"
  },
  {
    "id": "control-unit",
    "title": "Control Unit",
    "summary": "A component of the CPU that manages the execution of instructions by sending control signals to other parts of the computer, directing the flow of data.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Control Unit.md"
  },
  {
    "id": "cookie",
    "title": "Cookie",
    "summary": "A small text file stored on a user's computer by a website, used to remember preferences, track sessions, and personalise the browsing experience.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Cookie.md"
  },
  {
    "id": "core",
    "title": "Core",
    "summary": "An independent processing unit within a CPU. Multi-core processors can execute multiple instructions simultaneously, improving performance for multitasking.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Core.md"
  },
  {
    "id": "count-controlled-loop",
    "title": "Count-Controlled Loop",
    "summary": "A loop that repeats a specific number of times, using a counter variable that increments or decrements on each iteration. Example: FOR i ← 1 TO 10.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Count-Controlled Loop.md"
  },
  {
    "id": "counting",
    "title": "Counting",
    "summary": "A programming technique that tracks how many times an event occurs by incrementing a counter variable each time the event happens.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Counting.md"
  },
  {
    "id": "cyber-security",
    "title": "Cyber Security",
    "summary": "The practice of protecting computer systems, networks, and data from unauthorised access, attacks, damage, or theft. Encompasses prevention, detection, and response.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Cyber Security.md"
  },
  {
    "id": "ddos-attack",
    "title": "DDoS Attack",
    "summary": "Distributed Denial of Service — an attack where multiple compromised systems flood a target server with traffic, overwhelming it and preventing legitimate users from accessing the service.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/DDoS Attack.md"
  },
  {
    "id": "dns",
    "title": "DNS",
    "summary": "Domain Name System — the system that translates human-readable domain names (e.g., www.example.com) into IP addresses that computers use to locate each other on the internet.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/DNS.md"
  },
  {
    "id": "data-collection",
    "title": "Data Collection",
    "summary": "Methods for gathering information in humanitarian contexts.",
    "tags": [
      "concepts",
      "assessment",
      "data",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Data Collection.md"
  },
  {
    "id": "data-compression",
    "title": "Data Compression",
    "summary": "The process of reducing the size of a file by encoding data more efficiently. Can be lossless (no data lost) or lossy (some data permanently removed).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Data Compression.md"
  },
  {
    "id": "data-packet",
    "title": "Data Packet",
    "summary": "A unit of data transmitted over a network, consisting of a header (containing source/destination addresses, packet number) and a payload (the actual data being sent).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Data Packet.md"
  },
  {
    "id": "data-type",
    "title": "Data Type",
    "summary": "A classification that specifies what kind of value a variable can hold and what operations can be performed on it. Common types: integer, real/float, char, string, boolean.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Data Type.md"
  },
  {
    "id": "database",
    "title": "Database",
    "summary": "A structured collection of data stored electronically, organised for efficient searching, retrieval, and management. Typically organised into tables with rows (records) and columns (fields).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Database.md"
  },
  {
    "id": "decomposition",
    "title": "Decomposition",
    "summary": "Breaking down a complex problem into smaller, more manageable sub-problems that are easier to understand and solve individually.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Decomposition.md"
  },
  {
    "id": "denary",
    "title": "Denary",
    "summary": "The base-10 number system used by humans in everyday counting, also known as the decimal system.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Denary.md"
  },
  {
    "id": "digital-currency",
    "title": "Digital Currency",
    "summary": "Currency that exists only in digital form, created and managed through computer systems. Includes cryptocurrencies like Bitcoin and central bank digital currencies (CBDCs).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Digital Currency.md"
  },
  {
    "id": "diplomacy",
    "title": "Diplomacy",
    "summary": "Practice of managing international relations through negotiation.",
    "tags": [
      "concepts",
      "international",
      "relations",
      "negotiation"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Diplomacy.md"
  },
  {
    "id": "displacement-reactions",
    "title": "Displacement Reactions",
    "summary": "Reactions where a more reactive element replaces a less reactive one in a compound.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Displacement Reactions.md"
  },
  {
    "id": "displacement",
    "title": "Displacement",
    "summary": "Forced migration of populations due to conflict, persecution, or disasters.",
    "tags": [
      "concepts",
      "humanitarian",
      "migration",
      "conflict"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Displacement.md"
  },
  {
    "id": "drag-force",
    "title": "Drag Force",
    "summary": "Drag Force is resistive force from air or water acting opposite motion.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Drag Force.md"
  },
  {
    "id": "dry-run",
    "title": "Dry Run",
    "summary": "The process of manually executing an algorithm step by step using pen and paper, often with a trace table, to understand its behaviour and find errors without running it on a computer.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Dry Run.md"
  },
  {
    "id": "echo-check",
    "title": "Echo Check",
    "summary": "An error detection method where transmitted data is sent back (echoed) to the sender for comparison with the original.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Echo Check.md"
  },
  {
    "id": "elements",
    "title": "Elements",
    "summary": "Elements are substances made of only one type of Atoms.",
    "tags": [
      "concepts",
      "chemistry",
      "elements",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Elements.md"
  },
  {
    "id": "encryption",
    "title": "Encryption",
    "summary": "The process of converting data into a coded form (ciphertext) to prevent unauthorised access. Uses an encryption key; the original data can only be recovered with the correct decryption key.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Encryption.md"
  },
  {
    "id": "endothermic-reactions",
    "title": "Endothermic Reactions",
    "summary": "Chemical reactions that absorb energy from the surroundings.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Endothermic Reactions.md"
  },
  {
    "id": "energy",
    "title": "Energy",
    "summary": "Capacity to do work, transferred and transformed in physical and chemical processes.",
    "tags": [
      "concepts",
      "physics",
      "chemistry",
      "science"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Energy.md"
  },
  {
    "id": "equilibrium",
    "title": "Equilibrium",
    "summary": "State where opposing forces are balanced, resulting in no net force.",
    "tags": [
      "concepts",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Equilibrium.md"
  },
  {
    "id": "exothermic-reactions",
    "title": "Exothermic Reactions",
    "summary": "Chemical reactions that release energy to the surroundings.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Exothermic Reactions.md"
  },
  {
    "id": "expert-system",
    "title": "Expert System",
    "summary": "A computer system that emulates the decision-making ability of a human expert, using a knowledge base and a set of rules (inference engine) to make diagnoses or recommendations.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Expert System.md"
  },
  {
    "id": "from-clause",
    "title": "FROM Clause",
    "summary": "Part of an SQL query that specifies which table to retrieve data from. Used with SELECT: SELECT FirstName FROM Students.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/FROM Clause.md"
  },
  {
    "id": "fetch-execute-cycle",
    "title": "Fetch-Execute Cycle",
    "summary": "The continuous cycle where the CPU fetches an instruction from memory, decodes it to determine the operation, and executes it. This repeats billions of times per second.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Fetch-Execute Cycle.md"
  },
  {
    "id": "field",
    "title": "Field",
    "summary": "A single column in a database table representing one category of information. Each field has a defined data type (text, number, date, boolean).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Field.md"
  },
  {
    "id": "file-handling",
    "title": "File Handling",
    "summary": "The process of reading from and writing to files on secondary storage. Operations include open, read, write, append, and close. Files can be accessed sequentially or randomly.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/File Handling.md"
  },
  {
    "id": "file-size-calculation",
    "title": "File Size Calculation",
    "summary": "The process of calculating file sizes using bit, nibble, byte, kibibyte (KiB), mebibyte (MiB), gibibyte (GiB), and tebibyte (TiB). Image file size = resolution × colour depth.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/File Size Calculation.md"
  },
  {
    "id": "firewall",
    "title": "Firewall",
    "summary": "A network security system that monitors and controls incoming and outgoing traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Firewall.md"
  },
  {
    "id": "firmware",
    "title": "Firmware",
    "summary": "Software stored permanently in ROM that provides low-level control for a device's hardware. Acts as an interface between hardware and higher-level software. Example: BIOS.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Firmware.md"
  },
  {
    "id": "flowchart",
    "title": "Flowchart",
    "summary": "A diagram that represents an algorithm using standard symbols: ovals for start/stop, parallelograms for input/output, rectangles for processes, diamonds for decisions, and arrows for flow direction.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Flowchart.md"
  },
  {
    "id": "forces",
    "title": "Forces",
    "summary": "Forces are pushes, pulls, or twists that can change motion, direction, or shape.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Forces.md"
  },
  {
    "id": "foreign-key",
    "title": "Foreign Key",
    "summary": "A field in one table that refers to the primary key in another table, used to create relationships (links) between tables.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Foreign Key.md"
  },
  {
    "id": "fossil-fuels",
    "title": "Fossil Fuels",
    "summary": "Non-renewable energy sources formed from ancient organic matter.",
    "tags": [
      "concepts",
      "chemistry",
      "environment"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Fossil Fuels.md"
  },
  {
    "id": "friction",
    "title": "Friction",
    "summary": "Friction is a contact force that opposes motion between surfaces.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Friction.md"
  },
  {
    "id": "fuels",
    "title": "Fuels",
    "summary": "Substances that burn to release energy through combustion.",
    "tags": [
      "concepts",
      "chemistry",
      "physics"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Fuels.md"
  },
  {
    "id": "full-duplex-transmission",
    "title": "Full-Duplex Transmission",
    "summary": "Two-way data transmission where data can travel in both directions simultaneously, e.g., telephone conversation or video call.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Full-Duplex Transmission.md"
  },
  {
    "id": "function",
    "title": "Function",
    "summary": "A type of subroutine that performs a set of actions and returns a value to the calling code. Can be used in expressions since it evaluates to a value.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Function.md"
  },
  {
    "id": "geneva-conventions",
    "title": "Geneva Conventions",
    "summary": "Core treaties of international humanitarian law protecting civilians and non-combatants in war.",
    "tags": [
      "concepts",
      "law",
      "humanitarian",
      "international"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Geneva Conventions.md"
  },
  {
    "id": "global-health",
    "title": "Global Health",
    "summary": "Health issues that transcend national boundaries, requiring international cooperation.",
    "tags": [
      "concepts",
      "health",
      "international",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Global Health.md"
  },
  {
    "id": "gravitational-field-strength",
    "title": "Gravitational Field Strength",
    "summary": "The gravitational force per unit mass at a location.",
    "tags": [
      "concepts",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Gravitational Field Strength.md"
  },
  {
    "id": "gravitational-force",
    "title": "Gravitational Force",
    "summary": "The attractive force between masses due to gravity.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Gravitational Force.md"
  },
  {
    "id": "gravity",
    "title": "Gravity",
    "summary": "Gravity is a non-contact force pulling masses toward each other.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Gravity.md"
  },
  {
    "id": "guiding-principles",
    "title": "Guiding Principles",
    "summary": "UN Guiding Principles on Internal Displacement.",
    "tags": [
      "concepts",
      "idps",
      "rights",
      "un"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Guiding Principles.md"
  },
  {
    "id": "hdd",
    "title": "HDD",
    "summary": "Hard Disk Drive — a storage device using spinning magnetic platters and a read/write arm. Higher capacities at lower cost than SSDs but slower and more fragile.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/HDD.md"
  },
  {
    "id": "http",
    "title": "HTTP",
    "summary": "Hypertext Transfer Protocol — the protocol used for transferring web pages and resources between a web server and a browser. Operates as a request-response protocol.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/HTTP.md"
  },
  {
    "id": "https",
    "title": "HTTPS",
    "summary": "Hypertext Transfer Protocol Secure — HTTP encrypted using SSL/TLS encryption. Protects data in transit and verifies the identity of the website through digital certificates.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/HTTPS.md"
  },
  {
    "id": "half-duplex-transmission",
    "title": "Half-Duplex Transmission",
    "summary": "Two-way data transmission where data can travel in both directions but only one direction at a time, e.g., walkie-talkie.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Half-Duplex Transmission.md"
  },
  {
    "id": "healthcare-in-conflict",
    "title": "Healthcare in Conflict",
    "summary": "Provision of medical services in war zones and areas of armed conflict.",
    "tags": [
      "concepts",
      "healthcare",
      "conflict",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Healthcare in Conflict.md"
  },
  {
    "id": "hexadecimal",
    "title": "Hexadecimal",
    "summary": "A base-16 number system using digits 0-9 and letters A-F, providing a more compact and human-readable way to represent binary values.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Hexadecimal.md"
  },
  {
    "id": "high-level-language",
    "title": "High-Level Language",
    "summary": "A programming language designed to be easy for humans to read and write, using English-like syntax. Examples: Python, Java, C++. Must be translated into machine code before execution.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/High-Level Language.md"
  },
  {
    "id": "human-rights",
    "title": "Human Rights",
    "summary": "Inherent rights of all humans regardless of status.",
    "tags": [
      "concepts",
      "rights",
      "international",
      "law"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Human Rights.md"
  },
  {
    "id": "humanitarian-aid",
    "title": "Humanitarian Aid",
    "summary": "Assistance provided to populations in crisis, including conflict and disaster zones.",
    "tags": [
      "concepts",
      "humanitarian",
      "aid",
      "international"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Humanitarian Aid.md"
  },
  {
    "id": "humanitarian-law",
    "title": "Humanitarian Law",
    "summary": "Legal framework protecting persons affected by armed conflict; synonymous with international humanitarian law.",
    "tags": [
      "concepts",
      "law",
      "humanitarian",
      "conflict"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Humanitarian Law.md"
  },
  {
    "id": "ide",
    "title": "IDE",
    "summary": "Integrated Development Environment — software that provides comprehensive facilities to programmers for writing, testing, and debugging code. Features include code editor, error highlighting, translator, runtime environment, debugger.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/IDE.md"
  },
  {
    "id": "idps",
    "title": "IDPs",
    "summary": "Internally Displaced Persons - displaced within their own country.",
    "tags": [
      "concepts",
      "humanitarian",
      "displacement",
      "internal"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/IDPs.md"
  },
  {
    "id": "ip-address",
    "title": "IP Address",
    "summary": "Internet Protocol address — a unique numerical address assigned to each device on a network, used to identify and locate devices for communication.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/IP Address.md"
  },
  {
    "id": "input-device",
    "title": "Input Device",
    "summary": "A hardware device that allows data to be entered into a computer system, e.g., keyboard, mouse, touchscreen, microphone, sensor.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Input Device.md"
  },
  {
    "id": "integer",
    "title": "Integer",
    "summary": "A data type representing whole numbers (positive, negative, or zero) without fractional parts. Example: 42, -7, 0.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Integer.md"
  },
  {
    "id": "interaction-pairs",
    "title": "Interaction Pairs",
    "summary": "Pairs of forces that arise from interactions between objects.",
    "tags": [
      "concepts",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Interaction Pairs.md"
  },
  {
    "id": "international-humanitarian-law",
    "title": "International Humanitarian Law",
    "summary": "Legal principles governing conduct in armed conflicts to protect civilians and non-combatants.",
    "tags": [
      "concepts",
      "law",
      "humanitarian",
      "conflict"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/International Humanitarian Law.md"
  },
  {
    "id": "international-law",
    "title": "International Law",
    "summary": "Body of rules binding on states in their relations.",
    "tags": [
      "concepts",
      "law",
      "international",
      "relations"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/International Law.md"
  },
  {
    "id": "international-organizations",
    "title": "International Organizations",
    "summary": "Global entities coordinating international cooperation on humanitarian, health, and development issues.",
    "tags": [
      "concepts",
      "international",
      "organizations",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/International Organizations.md"
  },
  {
    "id": "international-relations",
    "title": "International Relations",
    "summary": "Study and practice of relationships between countries.",
    "tags": [
      "concepts",
      "international",
      "diplomacy",
      "relations"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/International Relations.md"
  },
  {
    "id": "internet",
    "title": "Internet",
    "summary": "A global network of interconnected computers and networks that communicate using standardised protocols (TCP/IP). Provides the infrastructure for services like the World Wide Web, email, and VoIP.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Internet.md"
  },
  {
    "id": "interpreter",
    "title": "Interpreter",
    "summary": "A translator that converts high-level language source code into machine code line by line at runtime. Easier for debugging but slower execution since translation happens each time.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Interpreter.md"
  },
  {
    "id": "interrupt",
    "title": "Interrupt",
    "summary": "A signal sent to the processor indicating that an event needs immediate attention. Can be hardware-based (keyboard press, mouse click) or software-based (division by zero).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Interrupt.md"
  },
  {
    "id": "iteration",
    "title": "Iteration",
    "summary": "A control structure that repeats a block of code multiple times. Three types: count-controlled (FOR loop), pre-condition (WHILE loop), and post-condition (REPEAT UNTIL loop).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Iteration.md"
  },
  {
    "id": "library-routine",
    "title": "Library Routine",
    "summary": "A pre-written, tested subroutine available for programmers to use without rewriting. Part of a code library. Examples include mathematical functions, input/output routines, and string handling functions.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Library Routine.md"
  },
  {
    "id": "linear-search",
    "title": "Linear Search",
    "summary": "A search algorithm that checks each element in a list sequentially until the target value is found or the end is reached. Simple but inefficient for large datasets.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Linear Search.md"
  },
  {
    "id": "livelihoods",
    "title": "Livelihoods",
    "summary": "Ways people earn income and sustain themselves.",
    "tags": [
      "concepts",
      "economy",
      "livelihood",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Livelihoods.md"
  },
  {
    "id": "local-economies",
    "title": "Local Economies",
    "summary": "Economic activities and markets in humanitarian settings.",
    "tags": [
      "concepts",
      "economy",
      "humanitarian",
      "aid"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Local Economies.md"
  },
  {
    "id": "logic-circuit",
    "title": "Logic Circuit",
    "summary": "A physical or diagrammatic arrangement of interconnected logic gates that processes binary signals to produce a specific output based on the inputs.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Logic Circuit.md"
  },
  {
    "id": "logic-expression",
    "title": "Logic Expression",
    "summary": "A mathematical notation using Boolean operators (AND, OR, NOT) and variables to describe the behaviour of a logic circuit. Example: (A AND B) OR (NOT C).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Logic Expression.md"
  },
  {
    "id": "logic-gate",
    "title": "Logic Gate",
    "summary": "A physical electronic component that implements a Boolean function. Takes one or more binary inputs and produces a single binary output. The building blocks of digital circuits.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Logic Gate.md"
  },
  {
    "id": "logical-shift",
    "title": "Logical Shift",
    "summary": "An operation that moves all bits in a binary number left or right. Left shift multiplies by 2, right shift divides by 2. Bits that fall off the end are lost.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Logical Shift.md"
  },
  {
    "id": "logistics",
    "title": "Logistics",
    "summary": "Planning and execution of aid supply chains.",
    "tags": [
      "concepts",
      "humanitarian",
      "logistics",
      "supply"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Logistics.md"
  },
  {
    "id": "lossless-compression",
    "title": "Lossless Compression",
    "summary": "A compression method that reduces file size without losing any original data. The original file can be perfectly reconstructed. Used for text files and programs.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Lossless Compression.md"
  },
  {
    "id": "lossy-compression",
    "title": "Lossy Compression",
    "summary": "A compression method that permanently removes some data to reduce file size. Cannot reconstruct the exact original. Used for images (JPEG), sound (MP3), and video.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Lossy Compression.md"
  },
  {
    "id": "low-level-language",
    "title": "Low-Level Language",
    "summary": "A programming language close to the hardware, such as assembly language or machine code. Difficult for humans but gives direct control over hardware.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Low-Level Language.md"
  },
  {
    "id": "mac-address",
    "title": "MAC Address",
    "summary": "Media Access Control address — a unique 48-bit identifier assigned to each network interface card, used for addressing on local networks.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/MAC Address.md"
  },
  {
    "id": "mar",
    "title": "MAR",
    "summary": "Memory Address Register — holds the address of the memory location being accessed for reading or writing data.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/MAR.md"
  },
  {
    "id": "mdr",
    "title": "MDR",
    "summary": "Memory Data Register — holds the actual data being transferred between memory and the CPU during a read or write operation.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/MDR.md"
  },
  {
    "id": "machine-learning",
    "title": "Machine Learning",
    "summary": "A subset of AI where systems learn from data without being explicitly programmed. Algorithms identify patterns in training data and improve performance over time.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Machine Learning.md"
  },
  {
    "id": "maintainable-program",
    "title": "Maintainable Program",
    "summary": "A program written in a way that makes it easy for other programmers to understand, modify, and debug. Achieved through meaningful identifiers, comments, indentation, and modular structure.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Maintainable Program.md"
  },
  {
    "id": "malware",
    "title": "Malware",
    "summary": "Malicious software designed to damage, disrupt, or gain unauthorised access to a computer system. Includes viruses, worms, trojans, ransomware, and spyware.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Malware.md"
  },
  {
    "id": "mass-and-weight",
    "title": "Mass and Weight",
    "summary": "Mass and Weight are different: mass is matter amount, weight is gravitational force.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Mass and Weight.md"
  },
  {
    "id": "medical-aid",
    "title": "Medical Aid",
    "summary": "Provision of healthcare, pharmaceuticals, and medical supplies in crisis settings.",
    "tags": [
      "concepts",
      "health",
      "humanitarian",
      "aid"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Medical Aid.md"
  },
  {
    "id": "medical-supplies",
    "title": "Medical Supplies",
    "summary": "Essential pharmaceuticals, equipment, and materials for healthcare provision.",
    "tags": [
      "concepts",
      "healthcare",
      "supplies",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Medical Supplies.md"
  },
  {
    "id": "mixtures",
    "title": "Mixtures",
    "summary": "Mixtures contain substances that are not chemically bonded together.",
    "tags": [
      "concepts",
      "chemistry",
      "mixtures",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Mixtures.md"
  },
  {
    "id": "molecules",
    "title": "Molecules",
    "summary": "Molecules are groups of two or more atoms bonded together.",
    "tags": [
      "concepts",
      "chemistry",
      "molecules",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Molecules.md"
  },
  {
    "id": "nand-gate",
    "title": "NAND Gate",
    "summary": "A logic gate that is the inverse of AND. Outputs 1 unless both inputs are 1. Any Boolean expression can be built using only NAND gates (functionally complete).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/NAND Gate.md"
  },
  {
    "id": "ngos",
    "title": "NGOs",
    "summary": "Non-governmental organizations providing humanitarian assistance.",
    "tags": [
      "concepts",
      "humanitarian",
      "organizations",
      "ngo"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/NGOs.md"
  },
  {
    "id": "nic",
    "title": "NIC",
    "summary": "Network Interface Card — hardware that connects a computer to a network, providing a physical connection (Ethernet) or wireless connection (Wi-Fi). Has a unique MAC address.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/NIC.md"
  },
  {
    "id": "nor-gate",
    "title": "NOR Gate",
    "summary": "A logic gate that is the inverse of OR. Outputs 1 only when both inputs are 0. Functionally complete — any circuit can be built using only NOR gates.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/NOR Gate.md"
  },
  {
    "id": "not-gate",
    "title": "NOT Gate",
    "summary": "A logic gate with one input that outputs the inverse of the input. If the input is 1, output is 0; if input is 0, output is 1. Symbol: triangle with small circle.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/NOT Gate.md"
  },
  {
    "id": "needs-assessment-in-mun-and-humanitarian-aid",
    "title": "Needs Assessment in MUN and Humanitarian Aid",
    "summary": "Process of evaluating requirements for humanitarian assistance.",
    "tags": [
      "concepts",
      "humanitarian",
      "assessment",
      "aid"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Needs Assessment in MUN and Humanitarian Aid.md"
  },
  {
    "id": "needs-assessment",
    "title": "Needs Assessment",
    "summary": "Systematic process of identifying gaps and prioritizing resources in humanitarian response.",
    "tags": [
      "concepts",
      "assessment",
      "humanitarian",
      "data"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Needs Assessment.md"
  },
  {
    "id": "negotiation",
    "title": "Negotiation",
    "summary": "Dialogue between parties to reach an agreement or resolve a dispute.",
    "tags": [
      "concepts",
      "diplomacy",
      "international",
      "relations"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Negotiation.md"
  },
  {
    "id": "nested-statement",
    "title": "Nested Statement",
    "summary": "A control structure placed inside another control structure of the same type. For example, an IF statement inside another IF statement, or a FOR loop inside another FOR loop.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Nested Statement.md"
  },
  {
    "id": "neutralization-reactions",
    "title": "Neutralization Reactions",
    "summary": "Reactions between acids and bases that produce salt and water.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Neutralization Reactions.md"
  },
  {
    "id": "newtons-laws",
    "title": "Newton's Laws",
    "summary": "Three fundamental laws of motion that describe the relationship between forces and movement.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Newton's Laws.md"
  },
  {
    "id": "normalisation",
    "title": "Normalisation",
    "summary": "The process of organising data in a database to reduce redundancy and improve data integrity by splitting data into related tables.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Normalisation.md"
  },
  {
    "id": "or-gate",
    "title": "OR Gate",
    "summary": "A logic gate with two inputs that outputs 1 when at least one input is 1. Outputs 0 only when both inputs are 0. Symbol: curved arrow-like shape.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/OR Gate.md"
  },
  {
    "id": "order-by-clause",
    "title": "ORDER BY Clause",
    "summary": "Part of an SQL query that sorts the results in ascending (ASC) or descending (DESC) order based on a specified field.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/ORDER BY Clause.md"
  },
  {
    "id": "operating-system",
    "title": "Operating System",
    "summary": "System software that manages computer hardware, runs applications, provides a user interface, handles file management, and manages memory and processes. Examples: Windows, macOS, Linux.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Operating System.md"
  },
  {
    "id": "optical-storage",
    "title": "Optical Storage",
    "summary": "Storage media using lasers to read and write data on reflective surfaces, e.g., CD, DVD, Blu-ray. Used for media distribution and archival storage.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Optical Storage.md"
  },
  {
    "id": "output-device",
    "title": "Output Device",
    "summary": "A hardware device that presents data from a computer system to the user, e.g., monitor, printer, speaker, projector.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Output Device.md"
  },
  {
    "id": "overflow-error",
    "title": "Overflow Error",
    "summary": "An error that occurs when the result of a binary addition exceeds the maximum value that can be stored in the allocated number of bits.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Overflow Error.md"
  },
  {
    "id": "oxidation",
    "title": "Oxidation",
    "summary": "Chemical reaction where a substance combines with oxygen.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Oxidation.md"
  },
  {
    "id": "packet-switching",
    "title": "Packet Switching",
    "summary": "A method of data transmission where data is split into packets that travel independently across the network and are reassembled at the destination.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Packet Switching.md"
  },
  {
    "id": "parallel-transmission",
    "title": "Parallel Transmission",
    "summary": "A method of data transmission where multiple bits are sent simultaneously over multiple wires. Faster over short distances but suffers from data skew over longer distances.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Parallel Transmission.md"
  },
  {
    "id": "parameter",
    "title": "Parameter",
    "summary": "A variable listed in a subroutine definition that receives a value (argument) when the subroutine is called. Allows subroutines to work with different data each time.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Parameter.md"
  },
  {
    "id": "parity-check",
    "title": "Parity Check",
    "summary": "An error detection method where an extra bit is added to each byte to make the total number of 1s either even (even parity) or odd (odd parity).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Parity Check.md"
  },
  {
    "id": "periodic-table",
    "title": "Periodic Table",
    "summary": "The Periodic Table organizes all known Elements by their properties.",
    "tags": [
      "concepts",
      "chemistry",
      "periodic-table",
      "science",
      "y7",
      "school"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Periodic Table.md"
  },
  {
    "id": "pharmaceuticals",
    "title": "Pharmaceuticals",
    "summary": "Drugs and medicines used in healthcare delivery.",
    "tags": [
      "concepts",
      "healthcare",
      "medicine",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Pharmaceuticals.md"
  },
  {
    "id": "phishing",
    "title": "Phishing",
    "summary": "A social engineering attack where fraudulent emails or messages are sent pretending to be from reputable sources to trick recipients into revealing sensitive information.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Phishing.md"
  },
  {
    "id": "physical-changes",
    "title": "Physical Changes",
    "summary": "Reversible changes that alter appearance or state without creating new substances.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Physical Changes.md"
  },
  {
    "id": "post-condition-loop",
    "title": "Post-Condition Loop",
    "summary": "A loop that executes the body at least once before checking the condition. Example: REPEAT ... UNTIL condition.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Post-Condition Loop.md"
  },
  {
    "id": "pre-condition-loop",
    "title": "Pre-Condition Loop",
    "summary": "A loop that checks a condition before each iteration. If the condition is false initially, the loop body may never execute. Example: WHILE condition DO ... ENDWHILE.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Pre-Condition Loop.md"
  },
  {
    "id": "primary-key",
    "title": "Primary Key",
    "summary": "A field that uniquely identifies each record in a database table. Must be unique for every record and cannot be null. Example: StudentID, ProductCode.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Primary Key.md"
  },
  {
    "id": "procedure",
    "title": "Procedure",
    "summary": "A type of subroutine that performs a set of actions but does not return a value. Called by name and may accept parameters.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Procedure.md"
  },
  {
    "id": "products",
    "title": "Products",
    "summary": "New substances formed as a result of a chemical reaction.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Products.md"
  },
  {
    "id": "program-counter",
    "title": "Program Counter",
    "summary": "A register that holds the memory address of the next instruction to be fetched. It increments after each fetch.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Program Counter.md"
  },
  {
    "id": "program-development-life-cycle",
    "title": "Program Development Life Cycle",
    "summary": "The stages of creating a computer program: analysis (understanding the problem), design (planning the solution), coding (writing the program), and testing (verifying it works correctly).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Program Development Life Cycle.md"
  },
  {
    "id": "proxy-server",
    "title": "Proxy Server",
    "summary": "An intermediary server that sits between a client and the internet, forwarding requests. Used for anonymity, content filtering, caching, and bypassing restrictions.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Proxy Server.md"
  },
  {
    "id": "pseudocode",
    "title": "Pseudocode",
    "summary": "A method of describing an algorithm using natural language and structured notation that resembles programming code, without following the strict syntax of any specific language.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Pseudocode.md"
  },
  {
    "id": "quality-assurance",
    "title": "Quality Assurance",
    "summary": "Processes to ensure products meet standards.",
    "tags": [
      "concepts",
      "quality",
      "standards",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Quality Assurance.md"
  },
  {
    "id": "ram",
    "title": "RAM",
    "summary": "Random Access Memory — volatile primary memory that stores data and programs currently in use. Contents are lost when power is turned off. Faster than secondary storage.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/RAM.md"
  },
  {
    "id": "rom",
    "title": "ROM",
    "summary": "Read-Only Memory — non-volatile memory that stores the BIOS/bootstrap program. Contents are permanently written during manufacture and cannot be changed.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/ROM.md"
  },
  {
    "id": "reactants",
    "title": "Reactants",
    "summary": "Starting substances in a chemical reaction that are transformed into products.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Reactants.md"
  },
  {
    "id": "reactivity-series",
    "title": "Reactivity Series",
    "summary": "Ranking of metals by their tendency to react and displace other elements.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Reactivity Series.md"
  },
  {
    "id": "record",
    "title": "Record",
    "summary": "A single row in a database table representing one complete entry, consisting of values for each field. Each record is uniquely identified by a primary key.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Record.md"
  },
  {
    "id": "refugees",
    "title": "Refugees",
    "summary": "Individuals displaced across international borders due to fear of persecution.",
    "tags": [
      "concepts",
      "humanitarian",
      "displacement",
      "rights"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Refugees.md"
  },
  {
    "id": "register",
    "title": "Register",
    "summary": "A small, high-speed storage location inside the CPU used to hold data temporarily during processing. Key registers include PC, MAR, MDR, ACC, and CIR.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Register.md"
  },
  {
    "id": "renewable-fuels",
    "title": "Renewable Fuels",
    "summary": "Sustainable energy sources that can be replenished naturally.",
    "tags": [
      "concepts",
      "chemistry",
      "environment"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Renewable Fuels.md"
  },
  {
    "id": "restoration",
    "title": "Restoration",
    "summary": "Process of returning something to its original state or condition.",
    "tags": [
      "concepts",
      "humanitarian",
      "recovery"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Restoration.md"
  },
  {
    "id": "resultant-force",
    "title": "Resultant Force",
    "summary": "Resultant Force is the single net force equivalent to all forces acting on an object.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Resultant Force.md"
  },
  {
    "id": "rights-protection",
    "title": "Rights Protection",
    "summary": "Mechanisms and actions to safeguard human rights from violation.",
    "tags": [
      "concepts",
      "rights",
      "law",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Rights Protection.md"
  },
  {
    "id": "robot",
    "title": "Robot",
    "summary": "A programmable machine capable of carrying out a series of actions autonomously or semi-autonomously. Combines sensors, processors, and actuators to interact with the physical world.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Robot.md"
  },
  {
    "id": "robotics",
    "title": "Robotics",
    "summary": "The branch of technology dealing with the design, construction, operation, and application of robots. Combines computer science with mechanical and electrical engineering.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "automated-technologies"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Robotics.md"
  },
  {
    "id": "select-statement",
    "title": "SELECT Statement",
    "summary": "An SQL command used to retrieve (query) data from a database. SELECT specifies which fields to display. SELECT * displays all fields.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/SELECT Statement.md"
  },
  {
    "id": "sql",
    "title": "SQL",
    "summary": "Structured Query Language — the standard language for managing and querying relational databases. Used to create, read, update, and delete data.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/SQL.md"
  },
  {
    "id": "ssd",
    "title": "SSD",
    "summary": "Solid State Drive — a storage device using flash memory with no moving parts. Faster, quieter, and more durable than HDDs but typically more expensive per GB.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/SSD.md"
  },
  {
    "id": "ssl/tls",
    "title": "SSL/TLS",
    "summary": "Secure Sockets Layer / Transport Layer Security — cryptographic protocols that provide secure communication over a network by encrypting data and authenticating the server.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet",
      "security"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/SSL/TLS.md"
  },
  {
    "id": "sum-function",
    "title": "SUM Function",
    "summary": "An SQL aggregate function that calculates the total of numeric values in a column. Example: SELECT SUM(Price) FROM Orders.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/SUM Function.md"
  },
  {
    "id": "sample-rate",
    "title": "Sample Rate",
    "summary": "The number of samples taken per second when converting analogue sound to digital. Measured in Hz; CD quality is 44.1 kHz.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Sample Rate.md"
  },
  {
    "id": "selection",
    "title": "Selection",
    "summary": "A control structure that allows a program to choose between different paths of execution based on a condition. Implemented using IF, THEN, ELSE, ELSEIF, CASE/SWITCH statements.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Selection.md"
  },
  {
    "id": "sensor",
    "title": "Sensor",
    "summary": "An input device that measures a physical quantity (temperature, light, pressure, motion) and converts it into a digital signal for processing by a computer.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Sensor.md"
  },
  {
    "id": "sequence",
    "title": "Sequence",
    "summary": "The execution of program instructions in the order they are written, one after another, from top to bottom. The most basic control structure.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Sequence.md"
  },
  {
    "id": "serial-transmission",
    "title": "Serial Transmission",
    "summary": "A method of data transmission where bits are sent one at a time over a single wire. Suitable for long distances; used in USB connections.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Serial Transmission.md"
  },
  {
    "id": "simplex-transmission",
    "title": "Simplex Transmission",
    "summary": "One-way data transmission where data travels in only one direction, e.g., from a sensor to a computer or radio broadcasting.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Simplex Transmission.md"
  },
  {
    "id": "sound-sampling",
    "title": "Sound Sampling",
    "summary": "The process of converting analogue sound into digital data by measuring the amplitude at regular intervals. Higher sample rate and bit depth give higher quality audio.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Sound Sampling.md"
  },
  {
    "id": "standards",
    "title": "Standards",
    "summary": "Established criteria used to ensure consistency, quality, and safety of products and processes.",
    "tags": [
      "concepts",
      "quality",
      "governance"
    ],
    "subject": "General",
    "wiki": "Concepts/Standards.md"
  },
  {
    "id": "string-manipulation",
    "title": "String Manipulation",
    "summary": "Operations performed on string data, including concatenation (joining), substring extraction, length measurement, and character searching and replacing.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/String Manipulation.md"
  },
  {
    "id": "string",
    "title": "String",
    "summary": "A data type representing a sequence of alphanumeric characters and symbols. Usually enclosed in quotation marks. Example: \"Hello World\".",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/String.md"
  },
  {
    "id": "structure-diagram",
    "title": "Structure Diagram",
    "summary": "A diagram that shows the decomposition of a system into subsystems, illustrating the hierarchical relationship between components.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Structure Diagram.md"
  },
  {
    "id": "subroutine",
    "title": "Subroutine",
    "summary": "A named block of code that performs a specific task and can be called from other parts of a program. Two types: procedures (perform actions) and functions (perform actions and return a value).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Subroutine.md"
  },
  {
    "id": "supply-chains",
    "title": "Supply Chains",
    "summary": "Systems for sourcing, producing, and distributing goods.",
    "tags": [
      "concepts",
      "logistics",
      "supply",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Supply Chains.md"
  },
  {
    "id": "surveys",
    "title": "Surveys",
    "summary": "Structured data collection tools used to gather information from target populations.",
    "tags": [
      "concepts",
      "data",
      "assessment",
      "methods"
    ],
    "subject": "General",
    "wiki": "Concepts/Surveys.md"
  },
  {
    "id": "symmetric-encryption",
    "title": "Symmetric Encryption",
    "summary": "Encryption where the same secret key is used to both encrypt and decrypt data. The key must be securely shared between sender and receiver.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Symmetric Encryption.md"
  },
  {
    "id": "system-software",
    "title": "System Software",
    "summary": "Software that manages the hardware and provides a platform for application software to run. Includes the operating system, utilities, and device drivers.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "software"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/System Software.md"
  },
  {
    "id": "table",
    "title": "Table",
    "summary": "A collection of related records in a database, organised in rows and columns. Each row represents a record, each column represents a field.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Table.md"
  },
  {
    "id": "test-data",
    "title": "Test Data",
    "summary": "Data specifically chosen to test a program or algorithm. Includes normal data (valid, expected), abnormal data (valid but unexpected), and boundary data (at the limits of acceptable ranges).",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Test Data.md"
  },
  {
    "id": "thermal-decomposition",
    "title": "Thermal Decomposition",
    "summary": "A chemical reaction where a compound breaks down into simpler substances when heated.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Thermal Decomposition.md"
  },
  {
    "id": "totalling",
    "title": "Totalling",
    "summary": "A programming technique that accumulates a running total by adding each new value to a running sum, typically using a variable initialised to 0.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Totalling.md"
  },
  {
    "id": "trace-table",
    "title": "Trace Table",
    "summary": "A table used to manually step through an algorithm, recording the values of variables at each step to identify logical errors and verify correctness.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Trace Table.md"
  },
  {
    "id": "treaties",
    "title": "Treaties",
    "summary": "Formal agreements between states that create binding obligations under international law.",
    "tags": [
      "concepts",
      "law",
      "international",
      "diplomacy"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/Treaties.md"
  },
  {
    "id": "truth-table",
    "title": "Truth Table",
    "summary": "A table that shows all possible input combinations for a logic expression or circuit and the corresponding output for each combination. n inputs produces 2^n rows.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Truth Table.md"
  },
  {
    "id": "twos-complement",
    "title": "Two's Complement",
    "summary": "A method used to represent negative numbers in binary, where the most significant bit represents a negative value. Enables both positive and negative integers to be stored.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Two's Complement.md"
  },
  {
    "id": "un-agencies",
    "title": "UN Agencies",
    "summary": "United Nations specialized agencies for global issues.",
    "tags": [
      "concepts",
      "un",
      "humanitarian",
      "organizations"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/UN Agencies.md"
  },
  {
    "id": "un-clusters",
    "title": "UN Clusters",
    "summary": "UN-led coordination groups for humanitarian sectors.",
    "tags": [
      "concepts",
      "humanitarian",
      "un",
      "coordination"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/UN Clusters.md"
  },
  {
    "id": "url",
    "title": "URL",
    "summary": "Uniform Resource Locator — the address used to access resources on the World Wide Web. Contains the protocol (http/https), domain name, and optionally path to a specific resource.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/URL.md"
  },
  {
    "id": "usb",
    "title": "USB",
    "summary": "Universal Serial Bus — a standard interface for connecting devices to a computer, supporting serial data transmission, power delivery, and hot-swapping.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-transmission"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/USB.md"
  },
  {
    "id": "unicode",
    "title": "Unicode",
    "summary": "A character encoding standard that uses up to 32 bits per character, capable of representing characters from all major writing systems worldwide including emojis.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "data-representation"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Unicode.md"
  },
  {
    "id": "validation-check",
    "title": "Validation Check",
    "summary": "A process that ensures data entered into a system meets specified criteria before processing. Types include range check, length check, type check, presence check, and format check.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Validation Check.md"
  },
  {
    "id": "variable",
    "title": "Variable",
    "summary": "A named storage location in memory that holds a value which can change during program execution. Has a data type, name, and value.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "programming"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Variable.md"
  },
  {
    "id": "verification",
    "title": "Verification",
    "summary": "The process of checking that data has been accurately copied or transferred from one place to another. Methods include double entry and visual check.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "algorithms"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Verification.md"
  },
  {
    "id": "virtual-memory",
    "title": "Virtual Memory",
    "summary": "A technique that uses part of secondary storage (e.g., HDD/SSD) as if it were RAM when physical RAM is full, allowing more programs to run but at slower speed.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Virtual Memory.md"
  },
  {
    "id": "von-neumann-architecture",
    "title": "Von Neumann Architecture",
    "summary": "The computer architecture where both instructions and data are stored in the same memory, with a single set of buses connecting the CPU to memory. Most modern computers use this design.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "hardware"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Von Neumann Architecture.md"
  },
  {
    "id": "where-clause",
    "title": "WHERE Clause",
    "summary": "Part of an SQL query that filters records based on specified conditions. Example: SELECT Name FROM Products WHERE Price > 100.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "databases"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/WHERE Clause.md"
  },
  {
    "id": "war-crimes",
    "title": "War Crimes",
    "summary": "Serious violations of international humanitarian law during armed conflict.",
    "tags": [
      "concepts",
      "law",
      "conflict",
      "humanitarian"
    ],
    "subject": "MUN & Humanitarian",
    "wiki": "Concepts/War Crimes.md"
  },
  {
    "id": "web-browser",
    "title": "Web Browser",
    "summary": "Application software used to access, retrieve, and display web pages. Interprets HTML, CSS, and JavaScript to render web content. Examples: Chrome, Firefox, Safari.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/Web Browser.md"
  },
  {
    "id": "weight",
    "title": "Weight",
    "summary": "The gravitational force acting on an object due to its mass.",
    "tags": [
      "concepts",
      "physics",
      "forces"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Weight.md"
  },
  {
    "id": "word-equations",
    "title": "Word Equations",
    "summary": "Representations of chemical reactions using words for reactants and products.",
    "tags": [
      "concepts",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Word Equations.md"
  },
  {
    "id": "world-wide-web",
    "title": "World Wide Web",
    "summary": "A collection of interconnected hypertext documents and resources accessed via the internet using HTTP/HTTPS. The web is a service that runs on the internet, not the internet itself.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "internet"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/World Wide Web.md"
  },
  {
    "id": "xor-gate",
    "title": "XOR Gate",
    "summary": "Exclusive OR gate — outputs 1 when exactly one of its two inputs is 1 (inputs are different). Outputs 0 when inputs are the same. Used in binary addition.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "boolean-logic"
    ],
    "subject": "IGCSE Computer Science",
    "wiki": "Concepts/XOR Gate.md"
  },
  {
    "id": "cs-wb-0",
    "title": "Q: Convert the denary number 165 into:",
    "summary": "Convert the denary number 165 into:",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-1",
    "title": "Q: State three uses of the hexadecimal system",
    "summary": "State three uses of the hexadecimal system.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-2",
    "title": "Q: Write down a series of steps that could be used to convert a...",
    "summary": "Write down a series of steps that could be used to convert a denary number into a",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-3",
    "title": "Q: Tick (✓) the appropriate column, in the following table, to ...",
    "summary": "Tick (✓) the appropriate column, in the following table, to indicate whether the named",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-4",
    "title": "Q: Explain the function of each of the following in an operatin...",
    "summary": "Explain the function of each of the following in an operating system.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-5",
    "title": "Q: Has all the data been sent to the printer",
    "summary": "Has all the data been sent to the printer?",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-6",
    "title": "Q: a Which one of the following is NOT a component of an expert...",
    "summary": "a Which one of the following is NOT a component of an expert system? Circle the correct answer.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-7",
    "title": "Q: Identify and describe three stages of the program developmen...",
    "summary": "Identify and describe three stages of the program development lifecycle.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-8",
    "title": "Q: Identify and describe the three methods you could use to des...",
    "summary": "Identify and describe the three methods you could use to design and construct a solution",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-9",
    "title": "Q: Describe the function of each of the following types of pseu...",
    "summary": "Describe the function of each of the following types of pseudocode statement and give an example",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-10",
    "title": "Q: Identify and describe three basic data types",
    "summary": "Identify and describe three basic data types.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-11",
    "title": "Q: Describe each program concept and give an example in a progr...",
    "summary": "Describe each program concept and give an example in a programming language.\b",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-12",
    "title": "Q: State the logic gate each truth table represents",
    "summary": "State the logic gate each truth table represents.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "cs-wb-13",
    "title": "Q: Complete the truth table for this logic circuit",
    "summary": "Complete the truth table for this logic circuit.",
    "tags": [
      "concepts",
      "computer-science",
      "igcse-computer-science",
      "workbook"
    ],
    "subject": "IGCSE Computer Science",
    "wb_question": true
  },
  {
    "id": "chemistry",
    "title": "Chemistry",
    "summary": "Chemistry is the study of matter, the stuff that everything is made of. In this unit, you will learn what matter is made of and how this explains its properties. You will explore how matter changes...",
    "tags": [
      "oxford-science",
      "student-book-7",
      "chemistry",
      "science"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemistry.md"
  },
  {
    "id": "physics",
    "title": "Physics",
    "summary": "Physics is the study of the physical world. In this unit, you will find out about forces and where they come from, and how they explain motion the way objects move. You will learn about light and...",
    "tags": [
      "oxford-science",
      "student-book-7",
      "physics",
      "science"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Physics.md"
  },
  {
    "id": "biology",
    "title": "Biology",
    "summary": "Biology is the study of living things. In this unit, you will learn about you as a human being, the plants and animals around you, and the many tiny organisms that you cannot see.",
    "tags": [
      "oxford-science",
      "student-book-7",
      "biology",
      "science"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Biology.md"
  },
  {
    "id": "element-chemistry",
    "title": "Element (Chemistry)",
    "summary": "Platinum is an example of an element. An element is a substance that cannot be broken down into other substances. You may have heard of some elements, including gold, silver, oxygen, chlorine, and helium.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Element (Chemistry).md"
  },
  {
    "id": "chemical-symbol",
    "title": "Chemical symbol",
    "summary": "Every element has its own chemical symbol. This is a one- or two-letter code for the element. Scientists all over the world use the same Chemical Symbols, no matter what language they speak or write in.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemical symbol.md"
  },
  {
    "id": "atom",
    "title": "Atom",
    "summary": "The circles in Atoms are particles. An atom is the smallest part of an element that can exist.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Atom.md"
  },
  {
    "id": "compound-chemistry",
    "title": "Compound (Chemistry)",
    "summary": "Water is important. But what is water? Water is made from the atoms of two elements, hydrogen and oxygen. This means that water is a compound. A compound is a substance made up of atoms of two or more elements, with the atoms joined together strongly. The properties of a compound are different from the properties of the elements whose atoms are in it.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Compound (Chemistry).md"
  },
  {
    "id": "molecule-chemistry",
    "title": "Molecule (Chemistry)",
    "summary": "Hydrogen atoms go round in pairs (see These two-atom particles are Molecules of hydrogen. A molecule is a group of two or more atoms strongly joined together.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Molecule (Chemistry).md"
  },
  {
    "id": "chemical-formula",
    "title": "Chemical formula",
    "summary": "Every element and compound has its own chemical formula. The chemical formula for a substance shows the relative number of atoms of each element that are in it. ‘Relative number’ means how many atoms of one type there are compared to another type.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Chemical formula.md"
  },
  {
    "id": "relative-number",
    "title": "Relative number",
    "summary": "Every element and compound has its own chemical formula. The chemical formula for a substance shows the relative number of atoms of each element that are in it. ‘Relative number’ means how many atoms of one type there are compared to another type.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Relative number.md"
  },
  {
    "id": "material",
    "title": "Material",
    "summary": "Materials are made up of tiny particles. You cannot see the particles because they are too small. Many materials are Mixtures. Wood, milk, and air are mixtures. The bridge in.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Material.md"
  },
  {
    "id": "particle-chemistry",
    "title": "Particle (Chemistry)",
    "summary": "Materials are made up of tiny particles. You cannot see the particles because they are too small. Many materials are Mixtures. Wood, milk, and air are mixtures. The bridge in.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Particle (Chemistry).md"
  },
  {
    "id": "mixture-chemistry",
    "title": "Mixture (Chemistry)",
    "summary": "Materials are made up of tiny particles. You cannot see the particles because they are too small. Many materials are Mixtures. Wood, milk, and air are mixtures. The bridge in Figure 1 is made from another mixture: steel.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Mixture (Chemistry).md"
  },
  {
    "id": "substance-chemistry",
    "title": "Substance (Chemistry)",
    "summary": "All materials are made up of particles. Most materials are made up of more than one type of particle. However, a substance is made up of one type of particle only..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Substance (Chemistry).md"
  },
  {
    "id": "particle-model-chemistry",
    "title": "Particle Model (Chemistry)",
    "summary": "The properties of a substance describe what it looks like and how it behaves. Every substance has its own properties. The particle model describes the movement and arrangement of particles in a substance. You can use the particle model to explain the properties of a substance.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Particle Model (Chemistry).md"
  },
  {
    "id": "solid-state-of-matter",
    "title": "Solid (State of Matter)",
    "summary": "Most substances can exist in three states: as a solid, a liquid, or a gas. In each state of matter, the particles are the same, but their arrangement, movement, and separation are different..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Solid (State of Matter).md"
  },
  {
    "id": "liquid-state-of-matter",
    "title": "Liquid (State of Matter)",
    "summary": "Most substances can exist in three states: as a solid, a liquid, or a gas. In each state of matter, the particles are the same, but their arrangement, movement, and separation are different..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Liquid (State of Matter).md"
  },
  {
    "id": "gas-state-of-matter",
    "title": "Gas (State of Matter)",
    "summary": "Most substances can exist in three states: as a solid, a liquid, or a gas. In each state of matter, the particles are the same, but their arrangement, movement, and separation are different..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Gas (State of Matter).md"
  },
  {
    "id": "states-of-matter-chemistry",
    "title": "States of Matter (Chemistry)",
    "summary": "Water can exist in three states: as a solid, a liquid, or a gas. These are the states of matter. In each of the three states, the water particles are identical (the same). But the properties of ice, liquid water, and steam are different. These pages explain why.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/States of Matter (Chemistry).md"
  },
  {
    "id": "mass-physics",
    "title": "Mass (Physics)",
    "summary": "The iron weights are heavy. They have a mass of 20 kg. Aluminium weights of the same size are less heavy. They have a mass of only 7 kg. Mass is the amount of matter (stuff) in an object. It is measured in grams (g) or kilograms (kg).",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Mass (Physics).md"
  },
  {
    "id": "volume-physics",
    "title": "Volume (Physics)",
    "summary": "The volume of an object is the amount of space it takes up. In Volume is measured in cm3.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Volume (Physics).md"
  },
  {
    "id": "density-physics",
    "title": "Density (Physics)",
    "summary": "The density of a substance is its mass in a certain volume. It tells you how heavy something is for its size. Iron has a greater density than aluminium, so iron weights are heavier than aluminium weights of the same size.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Density (Physics).md"
  },
  {
    "id": "melting-chemistry",
    "title": "Melting (Chemistry)",
    "summary": "When a substance changes from the solid to liquid state, it melts. Melting is the change from solid to liquid. Freezing is the change from liquid to solid.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Melting (Chemistry).md"
  },
  {
    "id": "freezing-chemistry",
    "title": "Freezing (Chemistry)",
    "summary": "When a substance changes from the solid to liquid state, it melts. Melting is the change from solid to liquid. Freezing is the change from liquid to solid.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Freezing (Chemistry).md"
  },
  {
    "id": "change-of-state-chemistry",
    "title": "Change of State (Chemistry)",
    "summary": "Melting is the change of state from a solid to a liquid. Freezing is the change of state from a liquid to a solid. Melting and freezing are reversible..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Change of State (Chemistry).md"
  },
  {
    "id": "reversible",
    "title": "Reversible",
    "summary": "Melting and freezing are examples of Changes of State. Changes of state are reversible. For example, ice melts to make liquid water, but ice forms again if the water is cooled to 0°C.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Reversible.md"
  },
  {
    "id": "conserved",
    "title": "Conserved",
    "summary": "No particles are added or removed when a substance melts or freezes. This means that its mass does not change. Scientists say that mass is conserved when a substance melts.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Conserved.md"
  },
  {
    "id": "melting-point",
    "title": "Melting point",
    "summary": "The temperature at which a substance melts is its melting point. Melting points give us information about the states of substances at different temperatures. - Below its melting point, a substance is in the solid state. - Above its melting point, a substance may be in the liquid or gas state. You need more data to work out which.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Melting point.md"
  },
  {
    "id": "boiling-chemistry",
    "title": "Boiling (Chemistry)",
    "summary": "When a substance boils, it changes state from liquid to gas. Boiling happens when a liquid is heated to a certain temperature, called its boiling point..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Boiling (Chemistry).md"
  },
  {
    "id": "boiling-point",
    "title": "Boiling point",
    "summary": "Boiling happens if enough Energy is transferred (moved) to the particles. The particles in some substances hold together more strongly than in other substances. This means that different substances need different amounts of energy to boil. Therefore, different substances boil at different temperatures. The temperature a substance boils at is its boiling point.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Boiling point.md"
  },
  {
    "id": "evaporation-chemistry",
    "title": "Evaporation (Chemistry)",
    "summary": "When a substance evaporates, it changes state from liquid to gas. Evaporation happens below the melting point..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Evaporation (Chemistry).md"
  },
  {
    "id": "evaporating",
    "title": "Evaporating",
    "summary": "A substance can change from the liquid to the gas state by evaporating or boiling. Table 1 shows some differences between these two processes. Table 1 differences between evaporating and boiling. Process.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Evaporating.md"
  },
  {
    "id": "condensing",
    "title": "Condensing",
    "summary": "The changes in the arrangement and movement of the particles resulted in liquid water. This change of state from gas to liquid is called condensing or condensation. It can happen at any temperature below a substance's boiling point.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Condensing.md"
  },
  {
    "id": "condensation-chemistry",
    "title": "Condensation (Chemistry)",
    "summary": "The changes in the arrangement and movement of the particles resulted in liquid water. This change of state from gas to liquid is called condensing or condensation. It can happen at any temperature below a substance's boiling point.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Condensation (Chemistry).md"
  },
  {
    "id": "subliming",
    "title": "Subliming",
    "summary": "Where does stage smoke come from? It comes from solid carbon dioxide. Carbon dioxide is solid at temperatures below -78.5°C. At this temperature and above, solid carbon dioxide changes state to become a gas. Carbon dioxide does not normally exist as a liquid. This change of state from solid to gas is called subliming or sublimation. Water particles from the air condense around carbon dioxide particles. Tiny drops of liquid water form. It is this liquid water that you see as stage smoke (see Figure 3).",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Subliming.md"
  },
  {
    "id": "sublimation-chemistry",
    "title": "Sublimation (Chemistry)",
    "summary": "Where does stage smoke come from? It comes from solid carbon dioxide. Carbon dioxide is solid at temperatures below -78.5°C. At this temperature and above, solid carbon dioxide changes state to become a gas. Carbon dioxide does not normally exist as a liquid. This change of state from solid to gas is called subliming or sublimation. Water particles from the air condense around carbon dioxide particles. Tiny drops of liquid water form. It is this liquid water that you see as stage smoke (see Figure 3).",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Sublimation (Chemistry).md"
  },
  {
    "id": "concentration-chemistry",
    "title": "Concentration (Chemistry)",
    "summary": "In diffusion, particles move from an area of high concentration to an area of low concentration..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Concentration (Chemistry).md"
  },
  {
    "id": "diffusion-science",
    "title": "Diffusion (Science)",
    "summary": "In diffusion, particles move from an area of high concentration to an area of low concentration..",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Diffusion (Science).md"
  },
  {
    "id": "acid",
    "title": "Acid",
    "summary": "They all taste sour. This is because they contain acids. Vomit includes an acid from the stomach that helps digest foods. Vinegar contains ethanoic acid. Lemons contain citric acid.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Acid.md"
  },
  {
    "id": "alkali",
    "title": "Alkali",
    "summary": "Alkalis are the chemical opposite of acids. Soap solutions and toothpaste are alkalis. Most alkalis feel soapy. You must never taste or touch solutions in the lab.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Alkali.md"
  },
  {
    "id": "corrosive",
    "title": "Corrosive",
    "summary": "The bottle in The symbol shows that the solution in the bottle is corrosive. It could burn your skin and eyes.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Corrosive.md"
  },
  {
    "id": "solute",
    "title": "Solute",
    "summary": "The amount of water makes a difference, too. Both the bottles in Hydrochloric acid is a solution of hydrogen chloride in water. Hydrogen chloride is the solute – a substance that dissolves in a liquid to make a solution.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Solute.md"
  },
  {
    "id": "concentrated-chemistry",
    "title": "Concentrated (Chemistry)",
    "summary": "Acid A has more hydrogen chloride per litre than acid B. Acid A is concentrated. Acid B is dilute. The concentrated acid burns skin and eyes. The dilute acid hurts if it gets into a cut, and might make your skin slightly red, but has no other hazards.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Concentrated (Chemistry).md"
  },
  {
    "id": "dilute-chemistry",
    "title": "Dilute (Chemistry)",
    "summary": "Acid A has more hydrogen chloride per litre than acid B. Acid A is concentrated. Acid B is dilute. The concentrated acid burns skin and eyes. The dilute acid hurts if it gets into a cut, and might make your skin slightly red, but has no other hazards.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Dilute (Chemistry).md"
  },
  {
    "id": "indicator-chemistry",
    "title": "Indicator (Chemistry)",
    "summary": "You can use an indicator to find out whether a solution is acidic or alkaline. An indicator contains a dye (colour). The dye turns a different colour in acidic and alkaline solutions.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Indicator (Chemistry).md"
  },
  {
    "id": "litmus",
    "title": "Litmus",
    "summary": "At school, you might use litmus indicator. Litmus is a solution of dyes from lichens. Paper can be soaked in litmus solution to make litmus paper. - Red litmus turns blue in alkaline solutions. - Blue litmus turns red in acidic solutions (see.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Litmus.md"
  },
  {
    "id": "universal-indicator",
    "title": "Universal indicator",
    "summary": "Instead, you need universal indicator. Universal indicator is a mixture of dyes. It changes colour to show how acidic or alkaline a solution is.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Universal indicator.md"
  },
  {
    "id": "ph-scale",
    "title": "PH scale",
    "summary": "The pH scale is a measure of how acidic or alkaline a solution is. On the pH scale: - an acid has a pH of less than 7 – the lower the pH, the more acidic the solution - an alkaline solution has a pH of more than 7 – the higher the pH, the more alkaline the solution.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/PH scale.md"
  },
  {
    "id": "neutral-chemistry",
    "title": "Neutral (Chemistry)",
    "summary": "Some solutions are neutral. This means they are neither acidic nor alkaline. The pH of a neutral solution is exactly 7.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Neutral (Chemistry).md"
  },
  {
    "id": "salt-chemistry",
    "title": "Salt (Chemistry)",
    "summary": "A salt is a compound that forms when an acid reacts with a metal element or compound. The hydrogen atoms of the acid are replaced by atoms of the metal element. Figures 1 and 2 show two salts.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Salt (Chemistry).md"
  },
  {
    "id": "metal",
    "title": "Metal",
    "summary": "The architects chose copper for the museum because of its properties. Copper is a metal. It has an orange-brown colour and, like most metals, it is shiny. Copper is easy to shape into thin sheets.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Metal.md"
  },
  {
    "id": "non-metal",
    "title": "Non-metal",
    "summary": "Sulfur is a non-metal element. It is not shiny, and does not conduct electricity. It is brittle, so breaks easily if it falls.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Non-metal.md"
  },
  {
    "id": "metalloid",
    "title": "Metalloid",
    "summary": "The elements near the red line in the Periodic Table, like germanium and silicon, are metalloids. Their properties are between those of metals and non-metals. Most metalloids are shiny. They are semiconductors of electricity. This means they are between conductors and insulators.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Metalloid.md"
  },
  {
    "id": "acid-rain",
    "title": "Acid rain",
    "summary": "Acid rain damages trees, like in Figure 2. Acid rain also makes lakes acidic.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Acid rain.md"
  },
  {
    "id": "group-periodic-table",
    "title": "Group (Periodic Table)",
    "summary": "In the Periodic Table, the columns are called groups. For example, the elements beryllium (Be) and magnesium (Mg) are in Group 2.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Group (Periodic Table).md"
  },
  {
    "id": "period-periodic-table",
    "title": "Period (Periodic Table)",
    "summary": "The rows of the Periodic Table are called periods.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Period (Periodic Table).md"
  },
  {
    "id": "group-1",
    "title": "Group 1",
    "summary": "The Group 1 elements are also called the alkali metals.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Group 1.md"
  },
  {
    "id": "reactive",
    "title": "Reactive",
    "summary": "The Group 1 elements are very reactive. This means that they easily take part in chemical reactions. The Group 1 elements have exciting chemical reactions with water. The reactions make hydrogen gas and an alkaline solution. For example:.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Reactive.md"
  },
  {
    "id": "group-7",
    "title": "Group 7",
    "summary": "Chlorine is in Group 7 of the Periodic Table. The Group 7 elements are also called halogens.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Group 7.md"
  },
  {
    "id": "halogen",
    "title": "Halogen",
    "summary": "Chlorine is in Group 7 of the Periodic Table. The Group 7 elements are also called halogens.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Halogen.md"
  },
  {
    "id": "group-0",
    "title": "Group 0",
    "summary": "They all make use of elements in the same group of the Periodic Table, Group 0. Group 0 includes helium, neon, argon, krypton, xenon, and radon. The elements of Group 0 are also called the noble gases.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Group 0.md"
  },
  {
    "id": "noble-gases",
    "title": "Noble gases",
    "summary": "They all make use of elements in the same group of the Periodic Table, Group 0. Group 0 includes helium, neon, argon, krypton, xenon, and radon. The elements of Group 0 are also called the noble gases.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Noble gases.md"
  },
  {
    "id": "unreactive",
    "title": "Unreactive",
    "summary": "The noble gases take part in very few Chemical Reactions. Scientists say they are unreactive. From top to bottom of the group, the noble gases get slightly more reactive. - Helium is at the top of Group 0. As far as we know, it never takes part in chemical reactions. - Xenon is at the bottom of Group 0. It is very unreactive. However, it does form Compounds with fluorine and oxygen.",
    "tags": [
      "science",
      "student-book-7",
      "chemistry"
    ],
    "subject": "Chemistry",
    "wiki": "Concepts/Unreactive.md"
  },
  {
    "id": "speed-physics",
    "title": "Speed (Physics)",
    "summary": "Speed describes how far an object travels in a particular time. We measure speed in metres per second (m/s) in science..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Speed (Physics).md"
  },
  {
    "id": "metres-per-second-m-s",
    "title": "Metres per second (m/s)",
    "summary": "Speed describes how far an object travels in a particular time. We measure speed in metres per second (m/s) in science..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Metres per second (m-s).md"
  },
  {
    "id": "instantaneous-speed",
    "title": "Instantaneous speed",
    "summary": "The speed that the runner is travelling at any time during the race is the instantaneous speed. This is the speed that you see on the speedometer in a car. You can work out the average speed by dividing the total distance by the total time that it took to run the race. This average speed makes it easier to compare how fast different people, boats, or cars travel.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Instantaneous speed.md"
  },
  {
    "id": "average-speed",
    "title": "Average speed",
    "summary": "The speed that the runner is travelling at any time during the race is the instantaneous speed. This is the speed that you see on the speedometer in a car. You can work out the average speed by dividing the total distance by the total time that it took to run the race. This average speed makes it easier to compare how fast different people, boats, or cars travel.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Average speed.md"
  },
  {
    "id": "relative-motion",
    "title": "Relative motion",
    "summary": "Figure 3 shows an example of relative motion. Relative motion means how fast one thing is travelling compared with another. For example, being on a moving train looking at a stationary (still) one feels the same as being on a stationary train looking at a moving one. Speed is relative. If two cars are moving at the same speed in the same direction, their relative speed is zero. We usually measure speed relative to the ground.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Relative motion.md"
  },
  {
    "id": "acceleration",
    "title": "Acceleration",
    "summary": "A distance-time graph shows a journey over time. We can take values for distance and time from the graph to calculate speed. Acceleration describes how quickly speed is changing..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Acceleration.md"
  },
  {
    "id": "gas-pressure",
    "title": "Gas pressure",
    "summary": "When you blow up a balloon,there are millions of air moleculeshitting the inside of the balloon. The collisions (hits) between the airmolecules and the balloon producegas pressure (air pressure). Lots ofcollisions per second make a high gas pressure. This is because there is a big force over a small area. Gas pressure is exerted (applied) in all directions.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Gas pressure.md"
  },
  {
    "id": "compressed",
    "title": "Compressed",
    "summary": "When you blow up a bicycle tyre, you increase the gas pressure. Asyou blow more gas into a container, the gas becomes compressed. There are more molecules in the same space, so there are morecollisions. The pressure is bigger. You need a strong container tohold a compressed gas.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Compressed.md"
  },
  {
    "id": "atmospheric-pressure",
    "title": "Atmospheric pressure",
    "summary": "### What is atmospheric pressure? How does it change with height?.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Atmospheric pressure.md"
  },
  {
    "id": "density-physics",
    "title": "Density (Physics)",
    "summary": "Take a look at Figure 5. Theatmospheric pressure at sea level is bigger than the atmospheric pressure high up a mountain. Gravitypulls the air particles towards Earth. Where the particles are closer,there are more collisions. The pressure is higher. Density is howclose the particles are in a substance. Gas has a higher density atsea level.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Density (Physics).md"
  },
  {
    "id": "liquid-pressure",
    "title": "Liquid pressure",
    "summary": "Liquid pressure occurs when water Molecules push against each other and on surfaces. Liquids cannot be compressed like gases..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Liquid pressure.md"
  },
  {
    "id": "incompressible",
    "title": "Incompressible",
    "summary": "If you put water in a syringe, cover the end, and try to compress the liquid, you will find it impossible. Liquids are incompressible. This is because the particles in a liquid are touching each other and there is very little space between them. Liquids pass on any pressure applied to them.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Incompressible.md"
  },
  {
    "id": "upthrust",
    "title": "Upthrust",
    "summary": "Upthrust actson any objectthat is floating, or is submerged (underwater) in afluid like a liquidor gas. Figure 5 explains upthrust.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Upthrust.md"
  },
  {
    "id": "pivot",
    "title": "Pivot",
    "summary": "A moment (Nm) is a turning force about a pivot. The law of moments explains this relationship..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pivot.md"
  },
  {
    "id": "moment",
    "title": "Moment",
    "summary": "A moment (Nm) is a turning force about a pivot. The law of moments explains this relationship..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Moment.md"
  },
  {
    "id": "law-of-moments",
    "title": "Law of moments",
    "summary": "A moment (Nm) is a turning force about a pivot. The law of moments explains this relationship..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Law of moments.md"
  },
  {
    "id": "centre-of-gravity",
    "title": "Centre of Gravity",
    "summary": "All the weight of an object seems to act through a point called the centre of gravity (or centre of mass). If the centre of gravity is above the pivot, there is no turning force (see Figure 5b). If the centre of gravity is to the left or right of the pivot, there will be a turning force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Centre of Gravity.md"
  },
  {
    "id": "centre-of-mass",
    "title": "Centre of mass",
    "summary": "All the weight of an object seems to act through a point called the centre of gravity (or centre of mass). If the centre of gravity is above the pivot, there is no turning force (see Figure 5b). If the centre of gravity is to the left or right of the pivot, there will be a turning force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Centre of mass.md"
  },
  {
    "id": "source-physics",
    "title": "Source (Physics)",
    "summary": "What happens when someone looks at a book? A source of light, like a light bulb, emits (gives out) light. This light reflects off the book and into their eye. They see the book when the light is absorbed in their eye.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Source (Physics).md"
  },
  {
    "id": "emit",
    "title": "Emit",
    "summary": "What happens when someone looks at a book? A source of light, like a light bulb, emits (gives out) light. This light reflects off the book and into their eye. They see the book when the light is absorbed in their eye.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Emit.md"
  },
  {
    "id": "reflect",
    "title": "Reflect",
    "summary": "What happens when someone looks at a book? A source of light, like a light bulb, emits (gives out) light. This light reflects off the book and into their eye. They see the book when the light is absorbed in their eye.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Reflect.md"
  },
  {
    "id": "absorb",
    "title": "Absorb",
    "summary": "What happens when someone looks at a book? A source of light, like a light bulb, emits (gives out) light. This light reflects off the book and into their eye. They see the book when the light is absorbed in their eye.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Absorb.md"
  },
  {
    "id": "ray-physics",
    "title": "Ray (Physics)",
    "summary": "We draw lines called rays to model what beams (lines) of light do. You can see this in Figure 1.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Ray (Physics).md"
  },
  {
    "id": "luminous",
    "title": "Luminous",
    "summary": "Objects that give out light are luminous. Most objects that you look at are non-luminous. They do not emit light. You can see them because they reflect light into your eyes. Light spreads out, just like Sound.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Luminous.md"
  },
  {
    "id": "non-luminous",
    "title": "Non-luminous",
    "summary": "Objects that give out light are luminous. Most objects that you look at are non-luminous. They do not emit light. You can see them because they reflect light into your eyes. Light spreads out, just like Sound.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Non-luminous.md"
  },
  {
    "id": "transmit",
    "title": "Transmit",
    "summary": "When someone looks through a window, light travels through the glass and into their eye. The glass transmits the light. When light travels through glass, Perspex, or surface water, most of the light goes through. These materials are transparent – you can see through them. Transparent materials still absorb a small amount of light. In very deep water, like in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Transmit.md"
  },
  {
    "id": "transparent",
    "title": "Transparent",
    "summary": "When someone looks through a window, light travels through the glass and into their eye. The glass transmits the light. When light travels through glass, Perspex, or surface water, most of the light goes through. These materials are transparent – you can see through them. Transparent materials still absorb a small amount of light. In very deep water, like in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Transparent.md"
  },
  {
    "id": "translucent",
    "title": "Translucent",
    "summary": "Materials like tissue paper or frosted glass (see Light can travel through them but it is scattered (spread far apart), so you cannot see through them clearly.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Translucent.md"
  },
  {
    "id": "opaque",
    "title": "Opaque",
    "summary": "Materials that do not transmit light are opaque. Opaque materials produce shadows. You can predict the size and shape of shadows because light travels in straight lines.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Opaque.md"
  },
  {
    "id": "light-time",
    "title": "Light-time",
    "summary": "It takes light about eight minutes to reach Earth from the Sun, a distance of 150 000 000 (150 million) km (see The speed of light is about 300 000 km/s. Sound travels about a million times slower than light (0.34 km/s in air). Astronomers use ‘light-time’ to measure distances in space. - A light-minute is the distance that light travels in one minute. - A light-year is how far light travels in a year.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Light-time.md"
  },
  {
    "id": "image-physics",
    "title": "Image (Physics)",
    "summary": "When you look in the mirror, you might see someone who looks just like you behind the mirror. There is an image in the mirror.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Image (Physics).md"
  },
  {
    "id": "virtual",
    "title": "Virtual",
    "summary": "Light travels in straight lines. The brain uses this fact to work out where the light appears to be coming from. This is where you see the image. It is a virtual image because light has not travelled from it to the eye. You can see how this works in Figure 2.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Virtual.md"
  },
  {
    "id": "plane",
    "title": "Plane",
    "summary": "When something is reflected in a flat, or plane, mirror the image is: - the same shape and size as the real object - as far behind the mirror as the real object is in front of the mirror.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Plane.md"
  },
  {
    "id": "normal-physics",
    "title": "Normal (Physics)",
    "summary": "There is an imaginary line at an angle of 90° to the mirror. This is called the normal. You measure angles from the normal to the rays of light. You can see how to do this in Figure 3.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Normal (Physics).md"
  },
  {
    "id": "angle-of-incidence",
    "title": "Angle of incidence",
    "summary": "The angle between the incident ray (the ray coming in) and the normal is the angle of incidence. The angle between the normal and the reflected ray (the ray coming out) is the angle of reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Angle of incidence.md"
  },
  {
    "id": "angle-of-reflection",
    "title": "Angle of reflection",
    "summary": "The angle between the incident ray (the ray coming in) and the normal is the angle of incidence. The angle between the normal and the reflected ray (the ray coming out) is the angle of reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Angle of reflection.md"
  },
  {
    "id": "incident-ray",
    "title": "Incident ray",
    "summary": "The angle between the incident ray (the ray coming in) and the normal is the angle of incidence. The angle between the normal and the reflected ray (the ray coming out) is the angle of reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Incident ray.md"
  },
  {
    "id": "reflected-ray",
    "title": "Reflected ray",
    "summary": "The angle between the incident ray (the ray coming in) and the normal is the angle of incidence. The angle between the normal and the reflected ray (the ray coming out) is the angle of reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Reflected ray.md"
  },
  {
    "id": "law-of-reflection",
    "title": "Law of reflection",
    "summary": "When light is reflected off a mirror, the angle of incidence is equal to the angle of reflection. This is the law of reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Law of reflection.md"
  },
  {
    "id": "refraction",
    "title": "Refraction",
    "summary": "The pencil reflects light. The light travels from the pencil through the water. It then travels through the air into your eye. As the light leaves the water, the direction it is travelling in changes. This is called refraction.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Refraction.md"
  },
  {
    "id": "medium-physics",
    "title": "Medium (Physics)",
    "summary": "The dolphins you see in Elephants stamp their feet when a lion comes near them. This warning sound travels through the ground to other elephants. Sound needs a medium like a solid, liquid, or gas to travel through. It cannot travel through empty space (known as a vacuum) because there are no particles to vibrate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Medium (Physics).md"
  },
  {
    "id": "parallel",
    "title": "Parallel",
    "summary": "When light enters a glass block, it slows down. When it comes out, it speeds up again. Its direction changes twice. Light bends *towards* the normal when it goes into the glass. It bends *away* from the normal when it comes out. The rays going into the block and the rays coming out are parallel (the same distance apart at every point).",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Parallel.md"
  },
  {
    "id": "lens-optics",
    "title": "Lens (Optics)",
    "summary": "There are two lenses in your body. The lenses in your eyes are convex or converging lenses. They focus the light and allow you to see. The light is refracted as it goes into the lens and as it comes back out.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Lens (Optics).md"
  },
  {
    "id": "convex",
    "title": "Convex",
    "summary": "There are two lenses in your body. The lenses in your eyes are convex or converging lenses. They focus the light and allow you to see. The light is refracted as it goes into the lens and as it comes back out.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Convex.md"
  },
  {
    "id": "converging",
    "title": "Converging",
    "summary": "There are two lenses in your body. The lenses in your eyes are convex or converging lenses. They focus the light and allow you to see. The light is refracted as it goes into the lens and as it comes back out.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Converging.md"
  },
  {
    "id": "focus",
    "title": "Focus",
    "summary": "Refraction changes the direction that a ray of light travels in. Lenses focus light..",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Focus.md"
  },
  {
    "id": "optic-nerve",
    "title": "Optic nerve",
    "summary": "The image is inverted (upside down). However, your brain makes sense of it so that you see an image of the tree that is the right way up. The retina is a light-sensitive material. This means that it reacts quickly to light. This is because it contains Cells that respond to light. These cells are called photoreceptors. When light hits a photoreceptor, Chemical Reactions produce an electrical impulse. This electrical impulse travels up the optic nerve to your brain.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Optic nerve.md"
  },
  {
    "id": "pupil",
    "title": "Pupil",
    "summary": "Light enters the camera through the pinhole, just like it does through your pupil. You see a representation of the object on a screen.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pupil.md"
  },
  {
    "id": "retina",
    "title": "Retina",
    "summary": "When someone looks at a tree, like in Figure 2, an image of the tree is formed on the retina of their eye.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Retina.md"
  },
  {
    "id": "iris",
    "title": "Iris",
    "summary": "The iris is the coloured part of your eye. You can see an iris in Figure 1. Everyone’s iris is unique, like a fingerprint.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Iris.md"
  },
  {
    "id": "inverted",
    "title": "Inverted",
    "summary": "The image is inverted (upside down). However, your brain makes sense of it so that you see an image of the tree that is the right way up. The retina is a light-sensitive material. This means that it reacts quickly to light. This is because it contains Cells that respond to light. These cells are called photoreceptors. When light hits a photoreceptor, Chemical Reactions produce an electrical impulse. This electrical impulse travels up the optic nerve to your brain.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Inverted.md"
  },
  {
    "id": "photoreceptor",
    "title": "Photoreceptor",
    "summary": "The image is inverted (upside down). However, your brain makes sense of it so that you see an image of the tree that is the right way up. The retina is a light-sensitive material. This means that it reacts quickly to light. This is because it contains Cells that respond to light. These cells are called photoreceptors. When light hits a photoreceptor, Chemical Reactions produce an electrical impulse. This electrical impulse travels up the optic nerve to your brain.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Photoreceptor.md"
  },
  {
    "id": "camera",
    "title": "Camera",
    "summary": "A camera produces an image, just like your eye. The hole at the front of the camera is the aperture. You can see how a camera works in Figure 3.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Camera.md"
  },
  {
    "id": "aperture",
    "title": "Aperture",
    "summary": "A camera produces an image, just like your eye. The hole at the front of the camera is the aperture. You can see how a camera works in Figure 3.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Aperture.md"
  },
  {
    "id": "pixel",
    "title": "Pixel",
    "summary": "At the back of a digital camera (see This is called a charge-coupled device (CCD). When light hits each pixel, it produces a charge. The light produces an electrical, not chemical, effect. When you take a picture, this charge is moved off each of the pixels and stored. This is why there is a slight delay (short wait) before you can take another picture.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pixel.md"
  },
  {
    "id": "charge-coupled-device-ccd",
    "title": "Charge-coupled device (CCD)",
    "summary": "At the back of a digital camera (see This is called a charge-coupled device (CCD). When light hits each pixel, it produces a charge. The light produces an electrical, not chemical, effect. When you take a picture, this charge is moved off each of the pixels and stored. This is why there is a slight delay (short wait) before you can take another picture.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Charge-coupled device (CCD).md"
  },
  {
    "id": "prism",
    "title": "Prism",
    "summary": "White light is made up of seven different bands of light. Each one is a different colour. You can use a prism to split (divide) white light into a spectrum. This is called dispersion. The spectrum of white light is continuous. This means there are no gaps between the colours. Sir Isaac Newton first did the experiment you can see in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Prism.md"
  },
  {
    "id": "spectrum-physics",
    "title": "Spectrum (Physics)",
    "summary": "White light is made up of seven different bands of light. Each one is a different colour. You can use a prism to split (divide) white light into a spectrum. This is called dispersion. The spectrum of white light is continuous. This means there are no gaps between the colours. Sir Isaac Newton first did the experiment you can see in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Spectrum (Physics).md"
  },
  {
    "id": "dispersion",
    "title": "Dispersion",
    "summary": "White light is made up of seven different bands of light. Each one is a different colour. You can use a prism to split (divide) white light into a spectrum. This is called dispersion. The spectrum of white light is continuous. This means there are no gaps between the colours. Sir Isaac Newton first did the experiment you can see in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Dispersion.md"
  },
  {
    "id": "primary-colour",
    "title": "Primary colour",
    "summary": "The eye can identify three colours of light, called the primary colours of light. These are red, green, and blue.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Primary colour.md"
  },
  {
    "id": "secondary-colour",
    "title": "Secondary colour",
    "summary": "When you mix two primary colours, you get secondary colours of light. These are cyan, yellow, and magenta.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Secondary colour.md"
  },
  {
    "id": "filter",
    "title": "Filter",
    "summary": "A red filter takes away colours from white light. It transmits red light and absorbs the rest. It does not change the colour of light. You can see how filters work in Figure 3.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Filter.md"
  },
  {
    "id": "push",
    "title": "Push",
    "summary": "The rocket in It moves away from the surface of Earth very quickly. There is a force pushing the rocket up and a force pulling it down. A force can be a push or a pull.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Push.md"
  },
  {
    "id": "pull",
    "title": "Pull",
    "summary": "The rocket in It moves away from the surface of Earth very quickly. There is a force pushing the rocket up and a force pulling it down. A force can be a push or a pull.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pull.md"
  },
  {
    "id": "contact-force",
    "title": "Contact force",
    "summary": "Some forces act when you are touching something. These are called contact forces. Friction and air resistance are contact forces. Support forces, like upthrust (a force that pushes up), are also contact forces.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Contact force.md"
  },
  {
    "id": "air-resistance",
    "title": "Air resistance",
    "summary": "A snowboarder jumping through the air will experience air resistance. Water resistance and air resistance are drag forces. If you think about the particles in the air and in the water, you can explain drag forces.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Air resistance.md"
  },
  {
    "id": "non-contact-force",
    "title": "Non-contact force",
    "summary": "The force of gravity acts on a tennis ball travelling through the air. Earth pulls the ball down even though it is not touching it. Gravity is a non-contact force. The force between magnets is another non-contact force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Non-contact force.md"
  },
  {
    "id": "interaction-pair",
    "title": "Interaction pair",
    "summary": "Forces always come in pairs, called Interaction Pairs. In Figure 3: - Gravity pulls the child down. This is the force of Earth on the child. - The child pulls Earth up. This is the force of the child on Earth.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Interaction pair.md"
  },
  {
    "id": "newton-meter",
    "title": "Newton meter",
    "summary": "You can measure force with a newton meter (sometimes called a spring balance). You can see a newton meter in Figure 4. All forces are measured in newtons (N).",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Newton meter.md"
  },
  {
    "id": "deform",
    "title": "Deform",
    "summary": "When a golf club hits a golf ball, like in Forces can compress (squash), stretch, twist (turn), or bend objects. When you apply forces to an object, you can deform it. Even solid objects can change shape.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Deform.md"
  },
  {
    "id": "compress",
    "title": "Compress",
    "summary": "When a golf club hits a golf ball, like in Forces can compress (squash), stretch, twist (turn), or bend objects. When you apply forces to an object, you can deform it. Even solid objects can change shape.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Compress.md"
  },
  {
    "id": "stretch",
    "title": "Stretch",
    "summary": "When a golf club hits a golf ball, like in Forces can compress (squash), stretch, twist (turn), or bend objects. When you apply forces to an object, you can deform it. Even solid objects can change shape.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Stretch.md"
  },
  {
    "id": "support-force",
    "title": "Support force",
    "summary": "Solid materials, like a chair or the floor, are only compressed a very small amount when you apply a force to them. The support force from a chair or the floor is called the reaction force or the normal force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Support force.md"
  },
  {
    "id": "reaction-force",
    "title": "Reaction force",
    "summary": "Solid materials, like a chair or the floor, are only compressed a very small amount when you apply a force to them. The support force from a chair or the floor is called the reaction force or the normal force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Reaction force.md"
  },
  {
    "id": "extension",
    "title": "Extension",
    "summary": "Bungee cords, springs, and even lift cables (wires) all stretch when you apply a force to them. The amount that they stretch is called the extension.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Extension.md"
  },
  {
    "id": "tension",
    "title": "Tension",
    "summary": "A bungee cord stretches as the jumper falls. When the bungee cord has stretched as far as it will go, it pulls them back up. This force is called tension.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Tension.md"
  },
  {
    "id": "elastic-limit",
    "title": "Elastic limit",
    "summary": "At some point, the spring will *not* go back to its original length when you remove the force. This point is called the spring’s elastic limit.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Elastic limit.md"
  },
  {
    "id": "lubrication",
    "title": "Lubrication",
    "summary": "One way to reduce friction is by using oil or grease. This is called lubrication. When you oil the chain of your bike, the surfaces move past each other more easily. Snowboarders wax their boards to reduce the friction between their board and the snow.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Lubrication.md"
  },
  {
    "id": "water-resistance",
    "title": "Water resistance",
    "summary": "The dolphins and the surfer will both experience water resistance.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Water resistance.md"
  },
  {
    "id": "streamlined",
    "title": "Streamlined",
    "summary": "Speed cyclists will tuck their arms in close to their body as they cycle. They will even make sure that their thumbs are as close to the handlebars as possible. This makes them more streamlined, which reduces the force of air resistance.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Streamlined.md"
  },
  {
    "id": "magnetic-force",
    "title": "Magnetic force",
    "summary": "Magnets exert a magnetic force on magnetic materials or other magnets without touching them. If you rub a balloon, you can pick up bits of paper with it or make your hair stand on end. You can see this happening in Figure 1. This is an electric or electrostatic force. Magnetic and electrostatic forces are non-contact forces that can be attractive or repulsive.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Magnetic force.md"
  },
  {
    "id": "electrostatic-force",
    "title": "Electrostatic force",
    "summary": "Magnets exert a magnetic force on magnetic materials or other magnets without touching them. If you rub a balloon, you can pick up bits of paper with it or make your hair stand on end. You can see this happening in Figure 1. This is an electric or electrostatic force. Magnetic and electrostatic forces are non-contact forces that can be attractive or repulsive.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Electrostatic force.md"
  },
  {
    "id": "field-physics",
    "title": "Field (Physics)",
    "summary": "In physics, a field is a special region in which something experiences a force. In a magnetic field, magnetic things experience a force. In a gravitational field, things with mass experience a force.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Field (Physics).md"
  },
  {
    "id": "mass-physics",
    "title": "Mass (Physics)",
    "summary": "Weight is a force, so it is measured in newtons (N). Mass is the amount of ‘stuff’ something is made up of. It is a measure of how hard it is to get something to move. Mass is measured in kilograms (kg).",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Mass (Physics).md"
  },
  {
    "id": "balanced-forces-physics",
    "title": "Balanced Forces (Physics)",
    "summary": "When the forces acting on an object are the same size but act in opposite directions, they are balanced. You can think of balanced forces as two teams at each end of a rope, pulling. If each team pulls with the same force, the rope does not move because the forces cancel out. The object is in equilibrium.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Balanced Forces (Physics).md"
  },
  {
    "id": "equilibrium-physics",
    "title": "Equilibrium (Physics)",
    "summary": "When the forces acting on an object are the same size but act in opposite directions, they are balanced. You can think of balanced forces as two teams at each end of a rope, pulling. If each team pulls with the same force, the rope does not move because the forces cancel out. The object is in equilibrium.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Equilibrium (Physics).md"
  },
  {
    "id": "unbalanced-forces-physics",
    "title": "Unbalanced Forces (Physics)",
    "summary": "The forces acting on it are unbalanced – they are not the same size. This means that they do not cancel out. The driving force from the engine is shown in blue. The resistive forces from air resistance and Friction are shown in red.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Unbalanced Forces (Physics).md"
  },
  {
    "id": "driving-force",
    "title": "Driving force",
    "summary": "The forces acting on it are unbalanced – they are not the same size. This means that they do not cancel out. The driving force from the engine is shown in blue. The resistive forces from air resistance and Friction are shown in red.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Driving force.md"
  },
  {
    "id": "resistive-force",
    "title": "Resistive force",
    "summary": "The forces acting on it are unbalanced – they are not the same size. This means that they do not cancel out. The driving force from the engine is shown in blue. The resistive forces from air resistance and Friction are shown in red.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Resistive force.md"
  },
  {
    "id": "oscillation-physics",
    "title": "Oscillation (Physics)",
    "summary": "In science, a wave is an oscillation or vibration that transfers energy or information. A wave can also be an undulation on the surface of water. Matter does not get transferred by waves. Waves have many uses. For example, microwaves cook food and sound waves help you communicate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Oscillation (Physics).md"
  },
  {
    "id": "vibration-physics",
    "title": "Vibration (Physics)",
    "summary": "In science, a wave is an oscillation or vibration that transfers energy or information. A wave can also be an undulation on the surface of water. Matter does not get transferred by waves. Waves have many uses. For example, microwaves cook food and sound waves help you communicate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Vibration (Physics).md"
  },
  {
    "id": "energy-physics",
    "title": "Energy (Physics)",
    "summary": "In science, a wave is an oscillation or vibration that transfers energy or information. A wave can also be an undulation on the surface of water. Matter does not get transferred by waves. Waves have many uses. For example, microwaves cook food and sound waves help you communicate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Energy (Physics).md"
  },
  {
    "id": "undulation",
    "title": "Undulation",
    "summary": "In science, a wave is an oscillation or vibration that transfers energy or information. A wave can also be an undulation on the surface of water. Matter does not get transferred by waves. Waves have many uses. For example, microwaves cook food and sound waves help you communicate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Undulation.md"
  },
  {
    "id": "amplitude-physics",
    "title": "Amplitude (Physics)",
    "summary": "All waves have three important features: amplitude, frequency, and wavelength. You can see these in Figure 1. - Amplitude is the distance from the middle of the wave to the top or bottom of the wave. - Frequency is the number of waves that pass a particular point per second. - Wavelength is the distance from one point on a wave to the same point on the next wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Amplitude (Physics).md"
  },
  {
    "id": "frequency-physics",
    "title": "Frequency (Physics)",
    "summary": "All waves have three important features: amplitude, frequency, and wavelength. You can see these in Figure 1. - Amplitude is the distance from the middle of the wave to the top or bottom of the wave. - Frequency is the number of waves that pass a particular point per second. - Wavelength is the distance from one point on a wave to the same point on the next wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Frequency (Physics).md"
  },
  {
    "id": "wavelength-physics",
    "title": "Wavelength (Physics)",
    "summary": "All waves have three important features: amplitude, frequency, and wavelength. You can see these in Figure 1. - Amplitude is the distance from the middle of the wave to the top or bottom of the wave. - Frequency is the number of waves that pass a particular point per second. - Wavelength is the distance from one point on a wave to the same point on the next wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Wavelength (Physics).md"
  },
  {
    "id": "transverse",
    "title": "Transverse",
    "summary": "You can make waves on a Slinky spring in two different ways. 1. You can move your hand at right angles to the spring. This produces a transverse wave (see Figure 2). Figure 2You can make a transverse wave on a Slinky spring. Full text alternative to the content 2. You can also push and pull the spring. This produces a longitudinal wave (see Figure 3). There are compressions and rarefactions in a longitudinal wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Transverse.md"
  },
  {
    "id": "longitudinal",
    "title": "Longitudinal",
    "summary": "You can make waves on a Slinky spring in two different ways. 1. You can move your hand at right angles to the spring. This produces a transverse wave (see Figure 2). Figure 2You can make a transverse wave on a Slinky spring. Full text alternative to the content 2. You can also push and pull the spring. This produces a longitudinal wave (see Figure 3). There are compressions and rarefactions in a longitudinal wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Longitudinal.md"
  },
  {
    "id": "compression",
    "title": "Compression",
    "summary": "You can make waves on a Slinky spring in two different ways. 1. You can move your hand at right angles to the spring. This produces a transverse wave (see Figure 2). Figure 2You can make a transverse wave on a Slinky spring. Full text alternative to the content 2. You can also push and pull the spring. This produces a longitudinal wave (see Figure 3). There are compressions and rarefactions in a longitudinal wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Compression.md"
  },
  {
    "id": "rarefaction",
    "title": "Rarefaction",
    "summary": "You can make waves on a Slinky spring in two different ways. 1. You can move your hand at right angles to the spring. This produces a transverse wave (see Figure 2). Figure 2You can make a transverse wave on a Slinky spring. Full text alternative to the content 2. You can also push and pull the spring. This produces a longitudinal wave (see Figure 3). There are compressions and rarefactions in a longitudinal wave.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Rarefaction.md"
  },
  {
    "id": "reflection-physics",
    "title": "Reflection (Physics)",
    "summary": "Waves bounce off surfaces and barriers, just like a ball bounces off a wall. This is called reflection.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Reflection (Physics).md"
  },
  {
    "id": "superpose",
    "title": "Superpose",
    "summary": "When two waves are put together, they superpose. This means that they add up or cancel out. If the waves are in step, they will add together. You get a single wave with *more* height than you had before. If they are not in step, then they cancel each other out. The height of the single wave is *less* than you had before.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Superpose.md"
  },
  {
    "id": "vacuum",
    "title": "Vacuum",
    "summary": "The dolphins you see in Elephants stamp their feet when a lion comes near them. This warning sound travels through the ground to other elephants. Sound needs a medium like a solid, liquid, or gas to travel through. It cannot travel through empty space (known as a vacuum) because there are no particles to vibrate.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Vacuum.md"
  },
  {
    "id": "speed-of-sound",
    "title": "Speed of sound",
    "summary": "The speed of sound in a medium depends on the arrangement of particles in that medium. Table 1 shows the speed of sound in different types of medium. The particle arrangements help us to explain the different speeds of sound. For example, the particles in a solid are very close together, so vibrations are passed along more quickly than in a gas. Table 1 The speed of sound in different types of medium. State.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Speed of sound.md"
  },
  {
    "id": "speed-of-light",
    "title": "Speed of light",
    "summary": "Light travels much faster than sound. The speed of light is 300 000 000 (300 million) m/s. This is almost one million times faster than sound. You can notice this difference during a thunderstorm. Thunder and lightning are produced at the same time. You see the lightning almost immediately. However, it takes a longer time for the sound of thunder to reach you. Light can also travel through a vacuum. This is because it does not need a medium to travel through.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Speed of light.md"
  },
  {
    "id": "microphone",
    "title": "Microphone",
    "summary": "You can attach a microphone to an oscilloscope, like the one in The microphone produces an electrical signal that represents the sound wave. The wave that appears on the screen is transverse. However, the sound waves you make when you talk are longitudinal.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Microphone.md"
  },
  {
    "id": "oscilloscope",
    "title": "Oscilloscope",
    "summary": "You can attach a microphone to an oscilloscope, like the one in The microphone produces an electrical signal that represents the sound wave. The wave that appears on the screen is transverse. However, the sound waves you make when you talk are longitudinal.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Oscilloscope.md"
  },
  {
    "id": "loudness",
    "title": "Loudness",
    "summary": "Sounds made by volcanic eruptions are so loud that they can be heard thousands of miles away. Sound intensity determines loudness and is measured in decibels (dB). The decibel scale shown in Table 1 is not like a ruler. Each increase of 10 dB increases the intensity of sound by ten times. Table 1 Examples of sounds and their loudness in decibels. 0 dB.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Loudness.md"
  },
  {
    "id": "pitch-sound",
    "title": "Pitch (Sound)",
    "summary": "Some singers can produce higher-pitched notes than others. The pitch of a note depends on the frequency of the sound wave. High-pitched sounds have a high frequency and low-pitched sounds have a low frequency. Frequency is measured in hertz (Hz) or kilohertz (kHz), and 1000 Hz = 1 kHz.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pitch (Sound).md"
  },
  {
    "id": "pinna",
    "title": "Pinna",
    "summary": "The ear detects sound waves. The part of the ear that you can see is called the pinna.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Pinna.md"
  },
  {
    "id": "eardrum",
    "title": "Eardrum",
    "summary": "Your hearing can be damaged if a sharp object makes a hole in your eardrum. However, your eardrum will grow back. A build-up of ear wax can also be damaging. Very loud sounds or head injuries can damage your hearing forever.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Eardrum.md"
  },
  {
    "id": "cochlea",
    "title": "Cochlea",
    "summary": "As the fluid (liquid) inside the cochlea moves, the hairs inside the cochlea also move. Specialized Cells at the base of the hairs (see Figure 2) change this movement into electrical signals. When these signals reach the brain, they are turned into sounds.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Cochlea.md"
  },
  {
    "id": "outer-ear",
    "title": "Outer ear",
    "summary": "Table 1 Parts of the ear. Outer ear.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Outer ear.md"
  },
  {
    "id": "audible-range",
    "title": "Audible range",
    "summary": "Most people can only hear a particular range of frequencies, called the audible range. You have the largest audible range when you are young: 20–20 000 Hz. Your audible range changes as you get older. You will find it more difficult to hear high-frequency sounds.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Audible range.md"
  },
  {
    "id": "infrasound",
    "title": "Infrasound",
    "summary": "Table 2 shows that bats, dogs, and goldfish all have completely different audible ranges to humans. Lots of animals can hear frequencies that are much higher than the frequencies we can hear. - Frequencies below 20 Hz are called infrasound. - Frequencies above 20 000 Hz are called ultrasound.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Infrasound.md"
  },
  {
    "id": "ultrasound",
    "title": "Ultrasound",
    "summary": "Table 2 shows that bats, dogs, and goldfish all have completely different audible ranges to humans. Lots of animals can hear frequencies that are much higher than the frequencies we can hear. - Frequencies below 20 Hz are called infrasound. - Frequencies above 20 000 Hz are called ultrasound.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Ultrasound.md"
  },
  {
    "id": "echo",
    "title": "Echo",
    "summary": "When sound reflects off a surface it produces an echo. Sound takes time to travel. There is a time delay (short wait) between making a sound and hearing an echo. Soft surfaces like curtains, or specially designed surfaces like those in.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Echo.md"
  },
  {
    "id": "transmitter",
    "title": "Transmitter",
    "summary": "Ultrasound is sound with a frequency above 20 000 Hz. An ultrasonic transmitter produces a beam, or line, of ultrasound. You can produce a narrow beam of ultrasound more easily than a narrow beam of sound waves.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Transmitter.md"
  },
  {
    "id": "receiver",
    "title": "Receiver",
    "summary": "When radiographers make images of unborn babies (see The ultrasonic receiver detects the echo. It uses the time it takes for the echo to return to build up an image of the fetus.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Receiver.md"
  },
  {
    "id": "sonar",
    "title": "Sonar",
    "summary": "This is called sonar. A transmitter under the ship sends out a beam of ultrasound. This travels through the water and reflects off the seabed. A receiver detects the reflection. It uses the time taken to work out the depth of the water.",
    "tags": [
      "science",
      "student-book-7",
      "physics"
    ],
    "subject": "Physics",
    "wiki": "Concepts/Sonar.md"
  },
  {
    "id": "multicellular-organism",
    "title": "Multicellular organism",
    "summary": "**Multicellular organisms** consist of many cells working together..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Multicellular organism.md"
  },
  {
    "id": "tissue-biology",
    "title": "Tissue (Biology)",
    "summary": "The second level of organization is a tissue. A tissue is a group of similar cells that work together to perform a certain function.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Tissue (Biology).md"
  },
  {
    "id": "organ-biology",
    "title": "Organ (Biology)",
    "summary": "The third level of organization is an organ. An organ is made up of a group of different tissues that work together to perform a certain function.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Organ (Biology).md"
  },
  {
    "id": "organ-system-biology",
    "title": "Organ System (Biology)",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Organ System (Biology).md"
  },
  {
    "id": "skeletal-system",
    "title": "Skeletal system",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Skeletal system.md"
  },
  {
    "id": "muscular-system",
    "title": "Muscular system",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Muscular system.md"
  },
  {
    "id": "gas-exchange-system",
    "title": "Gas exchange system",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Gas exchange system.md"
  },
  {
    "id": "digestive-system-biology",
    "title": "Digestive System (Biology)",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Digestive System (Biology).md"
  },
  {
    "id": "circulatory-system",
    "title": "Circulatory system",
    "summary": "The fourth level of organization is an organ system. An organ system is a group of different organs that work together to perform a certain function. Some examples of animal organ systems include: - skeletal system (bones) – gives body shape, allows movement, protects organs - muscular system (muscles) – responsible for movement - gas exchange system (lungs) – takes in oxygen, removes carbon dioxide - digestive system (stomach, intestines) – breaks down and takes in food Molecules - circulatory system (heart, veins, arteries) – transports substances around the body in the blood.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Circulatory system.md"
  },
  {
    "id": "bone-biology",
    "title": "Bone (Biology)",
    "summary": "Although bones in a museum are old and dry, the bones in your body are different. Bone is a living tissue with a blood supply. It is growing and changing all the time. Just like other parts of your body, it can repair itself when damaged, like the broken bone in Figure 1. Calcium and other minerals make the bone strong. Exercise and a balanced diet are important to keep your bones healthy.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Bone (Biology).md"
  },
  {
    "id": "skeleton-biology",
    "title": "Skeleton (Biology)",
    "summary": "Together, all the bones in your body make up your skeleton. They join together to form a frame. The average adult human skeleton consists of 206 bones, some of which are labelled in Figure 2. Your skeleton is part of your muscular skeletal system.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Skeleton (Biology).md"
  },
  {
    "id": "muscular-skeletal-system",
    "title": "Muscular skeletal system",
    "summary": "Together, all the bones in your body make up your skeleton. They join together to form a frame. The average adult human skeleton consists of 206 bones, some of which are labelled in Figure 2. Your skeleton is part of your muscular skeletal system.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Muscular skeletal system.md"
  },
  {
    "id": "bone-marrow",
    "title": "Bone marrow",
    "summary": "Some bones inside your body are not solid. For example, the long bones in your arms and legs. In the middle of these bones is a soft tissue called bone marrow. You can see this in Figure 3. The bone marrow produces red and white blood cells. Red blood cells carry oxygen around the body. White blood cells protect against infection.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Bone marrow.md"
  },
  {
    "id": "muscle-biology",
    "title": "Muscle (Biology)",
    "summary": "Without muscles and joints, we would all look like statues. Muscles move bones, and joints allow the skeleton to bend. Together, muscle and joint movement is called biomechanics.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Muscle (Biology).md"
  },
  {
    "id": "joint-biology",
    "title": "Joint (Biology)",
    "summary": "Joints help us move in different directions..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Joint (Biology).md"
  },
  {
    "id": "biomechanics",
    "title": "Biomechanics",
    "summary": "Without muscles and joints, we would all look like statues. Muscles move bones, and joints allow the skeleton to bend. Together, muscle and joint movement is called biomechanics.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Biomechanics.md"
  },
  {
    "id": "ligament-biology",
    "title": "Ligament (Biology)",
    "summary": "Most joints consist of two bones held together by ligaments.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Ligament (Biology).md"
  },
  {
    "id": "cartilage",
    "title": "Cartilage",
    "summary": "If your bones moved against each other, they would rub, causing lots of pain. Eventually, the bone would wear away. To stop this happening, the ends of bones in a joint are covered with cartilage. This is a strong, smooth tissue. Fluid (liquid) in the joint keeps the cartilage slippery. This allows the bones to move without rubbing together.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Cartilage.md"
  },
  {
    "id": "tendon-biology",
    "title": "Tendon (Biology)",
    "summary": "To move, your muscles get shorter – they contract. Muscles are attached to bones by tendons. When a muscle contracts, it pulls on a bone. If the bone is part of a joint, the bone will move.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Tendon (Biology).md"
  },
  {
    "id": "antagonistic-muscles",
    "title": "Antagonistic muscles",
    "summary": "At each joint, a pair of muscles works together to cause movement. These are called antagonistic muscles. When one muscle contracts, the other muscle relaxes.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Antagonistic muscles.md"
  },
  {
    "id": "diaphragm",
    "title": "Diaphragm",
    "summary": "When you breathe, muscles in your chest get shorter. They contract. This model can show you what is happening inside your lungs when you breathe in and out. The jar represents your chest. The balloons represent your lungs. The rubber sheet represents a muscle called the diaphragm.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Diaphragm.md"
  },
  {
    "id": "lung-volume",
    "title": "Lung volume",
    "summary": "When you breathe out into the plastic tube, air from your lungs takes the place of the water in the bottle. If you breathe out as much as you can, the volume of water pushed out of the bottle is equal to how much air your lungs can hold.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Lung volume.md"
  },
  {
    "id": "asthma",
    "title": "Asthma",
    "summary": "Regular exercise can help increase your lung volume. A large lung volume means that more oxygen can enter your body. Smoking, diseases such as asthma, and old age can reduce lung volume.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Asthma.md"
  },
  {
    "id": "gas-exchange-biology",
    "title": "Gas Exchange (Biology)",
    "summary": "The transfer of gases in body systems is called **gas exchange**..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Gas Exchange (Biology).md"
  },
  {
    "id": "lungs",
    "title": "Lungs",
    "summary": "Gas exchange takes place inside your lungs. Lungs are made of soft tissue that expands when you breathe in – this allows you to take in lots of oxygen. Your lungs are protected by your ribs. These are hard and strong bones that make up your ribcage.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Lungs.md"
  },
  {
    "id": "ribcage",
    "title": "Ribcage",
    "summary": "Gas exchange takes place inside your lungs. Lungs are made of soft tissue that expands when you breathe in – this allows you to take in lots of oxygen. Your lungs are protected by your ribs. These are hard and strong bones that make up your ribcage.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Ribcage.md"
  },
  {
    "id": "alveolus",
    "title": "Alveolus",
    "summary": "There are millions of alveoli (singular: alveolus) in your lungs. They create a large surface area. They have thin walls that are only one cell thick. These features help gas exchange occur quickly and easily.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Alveolus.md"
  },
  {
    "id": "inhale",
    "title": "Inhale",
    "summary": "When you breathe in, you inhale to take in oxygen. The oxygen is used in respiration to transfer Energy. Respiration produces carbon dioxide. This needs to be removed from the body. When you breathe out, you exhale to remove carbon dioxide.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Inhale.md"
  },
  {
    "id": "exhale",
    "title": "Exhale",
    "summary": "When you breathe in, you inhale to take in oxygen. The oxygen is used in respiration to transfer Energy. Respiration produces carbon dioxide. This needs to be removed from the body. When you breathe out, you exhale to remove carbon dioxide.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Exhale.md"
  },
  {
    "id": "pie-chart",
    "title": "Pie chart",
    "summary": "The pie charts in Figure 3 show how much of each gas is present in inhaled air and exhaled air.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Pie chart.md"
  },
  {
    "id": "glucose",
    "title": "Glucose",
    "summary": "All the cells inside your body need glucose and oxygen for Respiration. Glucose enters the body through the food you eat. It moves by diffusion from an area of higher concentration inside the small intestine to an area of lower concentration in the blood. Oxygen enters the body when it is breathed into your lungs. It moves by diffusion from an area of higher concentration inside the lungs to an area of lower concentration in the blood. These substances are carried around your body in your blood, and then passed on to the cells that need them.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Glucose.md"
  },
  {
    "id": "aerobic-respiration-biology",
    "title": "Aerobic Respiration (Biology)",
    "summary": "To transfer the energy stored in food, glucose reacts with oxygen in a chemical reaction called aerobic respiration. This reaction transfers energy to your cells. The waste products carbon dioxide and water are also formed.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Aerobic Respiration (Biology).md"
  },
  {
    "id": "mitochondria",
    "title": "Mitochondria",
    "summary": "Respiration happens inside tiny structures inside your cells called mitochondria. All cells contain mitochondria. However, different cells contain different amounts. Muscle cells carry out lots of respiration, so they contain lots of mitochondria.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Mitochondria.md"
  },
  {
    "id": "plasma",
    "title": "Plasma",
    "summary": "Glucose and oxygen are carried in the blood. - During digestion, carbohydrates are broken down, releasing glucose molecules. The molecules are absorbed into the blood through the wall of the small intestine. - Glucose dissolves in the liquid part of your blood called plasma. It then diffuses into the cells that need it for respiration. - When you breathe in, oxygen fills the alveoli in your lungs. The oxygen then diffuses into your blood. - Oxygen joins to haemoglobin (a red protein) in your red blood cells. When it reaches a cell that needs oxygen, the oxygen diffuses into the cell.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Plasma.md"
  },
  {
    "id": "haemoglobin",
    "title": "Haemoglobin",
    "summary": "Glucose and oxygen are carried in the blood. - During digestion, carbohydrates are broken down, releasing glucose molecules. The molecules are absorbed into the blood through the wall of the small intestine. - Glucose dissolves in the liquid part of your blood called plasma. It then diffuses into the cells that need it for respiration. - When you breathe in, oxygen fills the alveoli in your lungs. The oxygen then diffuses into your blood. - Oxygen joins to haemoglobin (a red protein) in your red blood cells. When it reaches a cell that needs oxygen, the oxygen diffuses into the cell.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Haemoglobin.md"
  },
  {
    "id": "anaerobic-respiration-biology",
    "title": "Anaerobic Respiration (Biology)",
    "summary": "Anaerobic respiration is a type of respiration that does not use oxygen. Your body uses this type of respiration to transfer energy from glucose when there is not enough oxygen for aerobic respiration to take place.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Anaerobic Respiration (Biology).md"
  },
  {
    "id": "oxygen-debt",
    "title": "Oxygen debt",
    "summary": "The extra oxygen you inhale (breathe in) breaks down the lactic acid. The oxygen needed for this process is called the oxygen debt.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Oxygen debt.md"
  },
  {
    "id": "microorganism",
    "title": "Microorganism",
    "summary": "Anaerobic respiration also takes place in plants and in some microorganisms when there is no oxygen available. For example, the roots of plants in soils with too much water respire anaerobically.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Microorganism.md"
  },
  {
    "id": "fermentation",
    "title": "Fermentation",
    "summary": "Anaerobic respiration in some microorganisms produces ethanol and carbon dioxide, instead of lactic acid. This process is called fermentation. Fermentation is a type of anaerobic respiration because the microorganism respires without oxygen.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Fermentation.md"
  },
  {
    "id": "organism",
    "title": "Organism",
    "summary": "All living things, often called organisms, are made of cells. Cells are the building blocks of life. They are the smallest units found in an organism. Organisms like bacteria are made up of only one cell. Larger organisms, like you, are made up of millions of cells that are joined together.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Organism.md"
  },
  {
    "id": "cell-biology",
    "title": "Cell (Biology)",
    "summary": "All living things, often called organisms, are made of cells. Cells are the building blocks of life. They are the smallest units found in an organism. Organisms like bacteria are made up of only one cell. Larger organisms, like you, are made up of millions of cells that are joined together.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Cell (Biology).md"
  },
  {
    "id": "microscope-biology",
    "title": "Microscope (Biology)",
    "summary": "Cells were first seen around 350 years ago. Robert Hooke, a scientist, used a microscope to look at a thin slice of cork (a type of tree bark). He saw tiny room-like structures which he called ‘cells’. You can see these cells in Figure 1. They are plant cells.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Microscope (Biology).md"
  },
  {
    "id": "lens-optics",
    "title": "Lens (Optics)",
    "summary": "To see a tiny object in detail, you need to use a microscope. A microscope magnifies images using lenses (singular: lens). Looking carefully and in detail at an object is called making an observation. To make an observation with a microscope, the object needs to be thin. This is so that Light can travel through it. Sometimes, you might need to add coloured dye. This is to make the object easier to see, like the different types of blood cell in Figure 2.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Lens (Optics).md"
  },
  {
    "id": "observation-science",
    "title": "Observation (Science)",
    "summary": "To see a tiny object in detail, you need to use a microscope. A microscope magnifies images using lenses (singular: lens). Looking carefully and in detail at an object is called making an observation. To make an observation with a microscope, the object needs to be thin. This is so that Light can travel through it. Sometimes, you might need to add coloured dye. This is to make the object easier to see, like the different types of blood cell in Figure 2.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Observation (Science).md"
  },
  {
    "id": "nucleus",
    "title": "Nucleus",
    "summary": "You can see some animal cells in Figure 1. They have an irregular shape. They contain four parts: a nucleus, a cell membrane, cytoplasm, and many mitochondria (singular: mitochondrion).",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Nucleus.md"
  },
  {
    "id": "cell-membrane",
    "title": "Cell membrane",
    "summary": "You can see some animal cells in Figure 1. They have an irregular shape. They contain four parts: a nucleus, a cell membrane, cytoplasm, and many mitochondria (singular: mitochondrion).",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Cell membrane.md"
  },
  {
    "id": "cytoplasm",
    "title": "Cytoplasm",
    "summary": "You can see some animal cells in Figure 1. They have an irregular shape. They contain four parts: a nucleus, a cell membrane, cytoplasm, and many mitochondria (singular: mitochondrion).",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Cytoplasm.md"
  },
  {
    "id": "cell-wall",
    "title": "Cell wall",
    "summary": "Plant cells, like the one in This allows them to fit together like bricks. They contain seven parts. Like animal cells, they contain a nucleus, a cell membrane, cytoplasm, and many mitochondria. They also contain three extra parts: a cell wall, a vacuole, and chloroplasts.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Cell wall.md"
  },
  {
    "id": "vacuole",
    "title": "Vacuole",
    "summary": "If plants are not watered regularly, they will wilt and eventually die. Inside the cells, water fills up the vacuole. This pushes out against the cell wall and makes the cell firm. This helps the plant stand up straight. If the plant does not have enough water, the vacuole gets smaller and the cells become soft. This causes the plant to wilt. You can see a wilted plant in Figure 3.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Vacuole.md"
  },
  {
    "id": "chloroplast",
    "title": "Chloroplast",
    "summary": "Plant cells, like the one in This allows them to fit together like bricks. They contain seven parts. Like animal cells, they contain a nucleus, a cell membrane, cytoplasm, and many mitochondria. They also contain three extra parts: a cell wall, a vacuole, and chloroplasts.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Chloroplast.md"
  },
  {
    "id": "specialized-cell-biology",
    "title": "Specialized Cell (Biology)",
    "summary": "Most cells in your body contain a nucleus, cell membrane, cytoplasm, and mitochondria. However, many cells have different shapes and structures. These special features allow the cells to carry out a particular job. These cells are called specialized cells.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Specialized Cell (Biology).md"
  },
  {
    "id": "adaptations-biology",
    "title": "Adaptations (Biology)",
    "summary": "The special features are called adaptations. If you look carefully at a specialized cell, its shape and special features can provide clues about what it does.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Adaptations (Biology).md"
  },
  {
    "id": "nerve-cell",
    "title": "Nerve cell",
    "summary": "Nerve cells carry electrical impulses around the body.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Nerve cell.md"
  },
  {
    "id": "red-blood-cell",
    "title": "Red blood cell",
    "summary": "Red blood cells transport oxygen around the body. They contain haemoglobin. This is a red pigment that joins to oxygen. Unlike most animal cells, red blood cells do not have a nucleus. They are small and round and curve in on both sides. Their shape increases their surface area and helps them carry oxygen.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Red blood cell.md"
  },
  {
    "id": "muscle-cell",
    "title": "Muscle cell",
    "summary": "Skeletal muscle cells are made up of long, fibrous protein filaments. These filaments are able to slide past each other, which shortens the cell. The main role of these cells is to contract, pulling the bones of the skeleton. This action results in movement.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Muscle cell.md"
  },
  {
    "id": "leaf-cell",
    "title": "Leaf cell",
    "summary": "Leaf cells near the top of a leaf carry out Photosynthesis. The cells are long and thin. They are packed with chloroplasts. Their shape gives them a large surface area. This is perfect for taking in Energy from the sun.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Leaf cell.md"
  },
  {
    "id": "root-hair-cell",
    "title": "Root hair cell",
    "summary": "Root hair cells take in water and nutrients from the soil. The root hairs create a large surface area for taking in water and nutrients. As there is no Light underground, root hair cells do not have chloroplasts. They do not carry out photosynthesis. You can see the parts of a root hair cell in Figure 5.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Root hair cell.md"
  },
  {
    "id": "diffusion-science",
    "title": "Diffusion (Science)",
    "summary": "Diffusion is the movement of particles from a place where they are at a high concentration to a place where they are at a low concentration. The concentration of a substance means the number of particles of that substance present in a volume, or space.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Diffusion (Science).md"
  },
  {
    "id": "particle-chemistry",
    "title": "Particle (Chemistry)",
    "summary": "Diffusion is the movement of particles from a place where they are at a high concentration to a place where they are at a low concentration. The concentration of a substance means the number of particles of that substance present in a volume, or space.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Particle (Chemistry).md"
  },
  {
    "id": "concentration-chemistry",
    "title": "Concentration (Chemistry)",
    "summary": "Diffusion is the movement of particles from a place where they are at a high concentration to a place where they are at a low concentration. The concentration of a substance means the number of particles of that substance present in a volume, or space.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Concentration (Chemistry).md"
  },
  {
    "id": "oxygen",
    "title": "Oxygen",
    "summary": "All the cells inside your body need glucose and oxygen for Respiration. Glucose enters the body through the food you eat. It moves by diffusion from an area of higher concentration inside the small intestine to an area of lower concentration in the blood. Oxygen enters the body when it is breathed into your lungs. It moves by diffusion from an area of higher concentration inside the lungs to an area of lower concentration in the blood. These substances are carried around your body in your blood, and then passed on to the cells that need them.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Oxygen.md"
  },
  {
    "id": "carbon-dioxide",
    "title": "Carbon dioxide",
    "summary": "Carbon dioxide is a waste product made inside cells during respiration. This substance moves by diffusion out of the cells into the blood. It is carried around your body in your blood to your lungs, and then breathed out.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Carbon dioxide.md"
  },
  {
    "id": "unicellular-organism",
    "title": "Unicellular organism",
    "summary": "A unicellular organism is an organism that is made up of just one cell. Unicellular organisms are not plants or animals because these are made up of many cells.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Unicellular organism.md"
  },
  {
    "id": "amoeba",
    "title": "Amoeba",
    "summary": "An amoeba is a unicellular organism that has no fixed shape. They look a bit like a blob of jelly. They can be found in fresh water, salt water, wet soil, and even inside animals.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Amoeba.md"
  },
  {
    "id": "binary-fission",
    "title": "Binary fission",
    "summary": "To reproduce, an amoeba divides in half to form two identical cells. This is called binary fission.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Binary fission.md"
  },
  {
    "id": "euglena",
    "title": "Euglena",
    "summary": "A euglena is a microscopic unicellular organism found in fresh water.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Euglena.md"
  },
  {
    "id": "flagellum",
    "title": "Flagellum",
    "summary": "Euglenas have an eye spot to sense Light. They also have a flagellum. This is like a tail. By moving the flagellum, the euglena can 'swim' towards the light to photosynthesize. This allows the euglena to make as much food as possible.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Flagellum.md"
  },
  {
    "id": "algae",
    "title": "Algae",
    "summary": "Plants and algae are called producers because they make their own food. They change materials found in their environment into glucose, a carbohydrate, using sunlight.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Algae.md"
  },
  {
    "id": "producer-biology",
    "title": "Producer (Biology)",
    "summary": "Plants and algae are called producers because they make their own food. They change materials found in their environment into glucose, a carbohydrate, using sunlight.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Producer (Biology).md"
  },
  {
    "id": "consumer-biology",
    "title": "Consumer (Biology)",
    "summary": "Animals are called consumers because they have to eat other organisms to survive. These can be plants or other animals. They break down the organism during digestion. This releases nutrients, which are then used by the body.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Consumer (Biology).md"
  },
  {
    "id": "photosynthesis-biology",
    "title": "Photosynthesis (Biology)",
    "summary": "Leaves are adapted for photosynthesis. Each part of a leaf has a special function that helps it carry out photosynthesis. Most leaves: - are green – they contain chlorophyll, which absorbs (takes in) sunlight - are thin – this allows gases to diffuse (move) into and out of the leaf easily - have a large surface area – to absorb as much Light as possible - have veins – they contain vessels (with tubes to carry water, and other tubes to carry sugars).",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Photosynthesis (Biology).md"
  },
  {
    "id": "chlorophyll",
    "title": "Chlorophyll",
    "summary": "Photosynthesis mainly takes place inside chloroplasts in the leaf cells. However, a small amount happens in the stem. Leaves and stems are green because they contain the green pigment (dye) chlorophyll. Chlorophyll uses light from the Sun. The Energy transferred from the Sun is needed for the plant to change carbon dioxide and water into glucose and oxygen.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Chlorophyll.md"
  },
  {
    "id": "chloroplasts",
    "title": "Chloroplasts",
    "summary": "The lower surface of a green leaf is lighter than the top. This is because the cells in the bottom of the leaf contain fewer chloroplasts, which means there is less chlorophyll. Most sunlight hits the top of the leaf. Therefore, this is where the chloroplasts need to be to absorb as much sunlight as possible.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Chloroplasts.md"
  },
  {
    "id": "stomata",
    "title": "Stomata",
    "summary": "On the lower surface of the leaf, there are tiny holes called stomata (singular: stoma). Stomata allow gases to diffuse into and out of the leaf. - Carbon dioxide diffuses in. Carbon dioxide is a reactant in photosynthesis. It takes part in and changes during the reaction. - Oxygen diffuses out. Oxygen is a product of photosynthesis.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Stomata.md"
  },
  {
    "id": "guard-cells",
    "title": "Guard Cells",
    "summary": "These cells open the stomata during the day, and close them at night.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Guard Cells.md"
  },
  {
    "id": "nitrate",
    "title": "Nitrate",
    "summary": "Plants need nitrates, phosphates, and magnesium to grow into a healthy plant. Fertilizers add minerals to the soil..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Nitrate.md"
  },
  {
    "id": "phosphate",
    "title": "Phosphate",
    "summary": "Plants need nitrates, phosphates, and magnesium to grow into a healthy plant. Fertilizers add minerals to the soil..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Phosphate.md"
  },
  {
    "id": "magnesium",
    "title": "Magnesium",
    "summary": "Plants need nitrates, phosphates, and magnesium to grow into a healthy plant. Fertilizers add minerals to the soil..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Magnesium.md"
  },
  {
    "id": "deficiency",
    "title": "Deficiency",
    "summary": "If a plant does not get enough minerals, it will not grow well. This is called a mineral deficiency. Different mineral deficiencies have different symptoms (signs of a problem): - Nitrate deficiency – plant has poor growth, and older leaves become yellow (see - Phosphorus deficiency – plant has poor root growth, and younger leaves look purple (see - Magnesium deficiency – plant leaves turn yellow (see.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Deficiency.md"
  },
  {
    "id": "fertilizer",
    "title": "Fertilizer",
    "summary": "When plants grow, they remove minerals from the soil. These would normally be replaced when the plant dies, or when leaves drop off. However, when crops are cut and gathered, this cannot happen. To prevent future crops suffering from a mineral deficiency, farmers add chemicals to the soil to replace missing minerals – these chemicals are called fertilizers.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Fertilizer.md"
  },
  {
    "id": "petal",
    "title": "Petal",
    "summary": "Most wind-pollinated plants, like the one in Figure 4: - have small petals that are brown or green - do not produce nectar - produce large amounts of very Light pollen that is easily carried by the wind - have anthers and stigmas which hang out of the flower. This makes it easier for the plant to release pollen and to catch pollen from other plants.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Petal.md"
  },
  {
    "id": "anther",
    "title": "Anther",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Anther.md"
  },
  {
    "id": "stigma",
    "title": "Stigma",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Stigma.md"
  },
  {
    "id": "pollen",
    "title": "Pollen",
    "summary": "Pollen fertilizes the ovule in pollination..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Pollen.md"
  },
  {
    "id": "stamen",
    "title": "Stamen",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Stamen.md"
  },
  {
    "id": "style",
    "title": "Style",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Style.md"
  },
  {
    "id": "carpel",
    "title": "Carpel",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Carpel.md"
  },
  {
    "id": "filament",
    "title": "Filament",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Filament.md"
  },
  {
    "id": "ovary",
    "title": "Ovary",
    "summary": "Figure 1 shows that inside a flower there are male and female parts: - The stamen is the male reproductive part – it contains an anther and a filament. - The carpel is the female reproductive part – it contains a stigma, style, and ovary.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Ovary.md"
  },
  {
    "id": "ovule",
    "title": "Ovule",
    "summary": "Pollen fertilizes the ovule in pollination..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Ovule.md"
  },
  {
    "id": "gamete",
    "title": "Gamete",
    "summary": "The anther produces pollen grains and the ovary contains ovules. Pollen and ovules are gametes. Gametes are reproductive Cells that join together to create a new organism.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Gamete.md"
  },
  {
    "id": "pollination-biology",
    "title": "Pollination (Biology)",
    "summary": "A new plant begins with fertilization. Pollen grains, like those in For this to happen, pollen from the anther needs to transfer to the stigma. This is called pollination.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Pollination (Biology).md"
  },
  {
    "id": "seed-dispersal",
    "title": "Seed dispersal",
    "summary": "Seeds are dispersed (spread) away from each other and from the parent plant. This is so they have space to grow. It is also so they do not compete for resources such as nutrients. Nearly all seeds are found inside fruits. This increases the number of ways they can be dispersed. The main methods of seed dispersal are: - wind - animal - water - explosive.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Seed dispersal.md"
  },
  {
    "id": "nutrient",
    "title": "Nutrient",
    "summary": "Eating a balanced diet helps us stay healthy. A balanced diet includes six nutrients: carbohydrates, lipids, proteins, vitamins, minerals, and water. A balanced diet also includes fibre. These substances help our bodies in different ways..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Nutrient.md"
  },
  {
    "id": "carbohydrate",
    "title": "Carbohydrate",
    "summary": "Eating a balanced diet helps us stay healthy. A balanced diet includes six nutrients: carbohydrates, lipids, proteins, vitamins, minerals, and water. A balanced diet also includes fibre. These substances help our bodies in different ways..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Carbohydrate.md"
  },
  {
    "id": "lipid",
    "title": "Lipid",
    "summary": "To test for lipids in a solid piece of food, you use a piece of filter paper. 1. Rub some of the food onto a piece of filter paper. 2. Hold the paper up to the Light. 3. If the paper has gone translucent (that is, you can see through it), the food contains lipids.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Lipid.md"
  },
  {
    "id": "protein",
    "title": "Protein",
    "summary": "Eating a balanced diet helps us stay healthy. A balanced diet includes six nutrients: carbohydrates, lipids, proteins, vitamins, minerals, and water. A balanced diet also includes fibre. These substances help our bodies in different ways..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Protein.md"
  },
  {
    "id": "vitamin",
    "title": "Vitamin",
    "summary": "Eating a balanced diet helps us stay healthy. A balanced diet includes six nutrients: carbohydrates, lipids, proteins, vitamins, minerals, and water. A balanced diet also includes fibre. These substances help our bodies in different ways..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Vitamin.md"
  },
  {
    "id": "mineral",
    "title": "Mineral",
    "summary": "Eating a balanced diet helps us stay healthy. A balanced diet includes six nutrients: carbohydrates, lipids, proteins, vitamins, minerals, and water. A balanced diet also includes fibre. These substances help our bodies in different ways..",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Mineral.md"
  },
  {
    "id": "fibre",
    "title": "Fibre",
    "summary": "We also need fibre to help keep food moving through the gut (your digestive system).",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Fibre.md"
  },
  {
    "id": "balanced-diet",
    "title": "Balanced diet",
    "summary": "To remain healthy, you must eat a balanced diet. This means eating food containing the right nutrients in the correct amounts.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Balanced diet.md"
  },
  {
    "id": "digestion-biology",
    "title": "Digestion (Biology)",
    "summary": "The digestive system is a group of organs that work together to break down food. The nutrients in most of the food you eat are large molecules, like lipids and proteins. During digestion, these large molecules are broken down into small nutrient molecules. These nutrients can then pass into the blood where they are used by the body.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Digestion (Biology).md"
  },
  {
    "id": "stomach",
    "title": "Stomach",
    "summary": "You may sometimes notice your stomach making noises. This is a sign that you need to eat. You know that food contains nutrients. But how does your body get nutrients out of food?.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Stomach.md"
  },
  {
    "id": "small-intestine",
    "title": "Small intestine",
    "summary": "The small nutrient molecules produced during digestion pass into the blood through the wall of the small intestine. They then move around the body.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Small intestine.md"
  },
  {
    "id": "large",
    "title": "Large",
    "summary": "The digestive system is a group of organs that work together to break down food. The nutrients in most of the food you eat are large molecules, like lipids and proteins. During digestion, these large molecules are broken down into small nutrient molecules. These nutrients can then pass into the blood where they are used by the body. Figure 1 shows this process.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Large.md"
  },
  {
    "id": "food-test",
    "title": "Food test",
    "summary": "A different chemical test exists for each type of nutrient. For most food tests, you will need a solution of the food. To prepare a food solution: 1. break up the food using a pestle and mortar 2. add a few drops of water and mix well.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Food test.md"
  },
  {
    "id": "starch",
    "title": "Starch",
    "summary": "To test for starch, you use iodine solution. Iodine solution is an orange-yellow liquid. 1. Add a few drops of iodine solution to the food solution. 2. If the solution turns a dark blue-black colour, like in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Starch.md"
  },
  {
    "id": "iodine",
    "title": "Iodine",
    "summary": "To test for starch, you use iodine solution. Iodine solution is an orange-yellow liquid. 1. Add a few drops of iodine solution to the food solution. 2. If the solution turns a dark blue-black colour, like in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Iodine.md"
  },
  {
    "id": "sugar",
    "title": "Sugar",
    "summary": "To test for simple sugars such as glucose, you use Benedict’s solution. Benedict’s solution is a blue liquid. 1. Add a few drops of Benedict’s solution to the food solution. 2. Heat the test tube in a water bath. 3. If the solution turns orange-red, like in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Sugar.md"
  },
  {
    "id": "benedict-s-solution",
    "title": "Benedict’s solution",
    "summary": "To test for simple sugars such as glucose, you use Benedict’s solution. Benedict’s solution is a blue liquid. 1. Add a few drops of Benedict’s solution to the food solution. 2. Heat the test tube in a water bath. 3. If the solution turns orange-red, like in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Benedict’s solution.md"
  },
  {
    "id": "biuret-solution",
    "title": "Biuret solution",
    "summary": "To test for protein, you use biuret solution. This is a pale blue liquid. 1. Add a few drops of biuret solution to your food solution. 2. If the solution turns purple, like in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Biuret solution.md"
  },
  {
    "id": "malnourishment",
    "title": "Malnourishment",
    "summary": "You may have seen pictures of people who are either extremely overweight or underweight. Both of these conditions can be caused by malnourishment. These people may have eaten the wrong amount or the wrong types of food. An unhealthy diet can cause health issues.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Malnourishment.md"
  },
  {
    "id": "starvation",
    "title": "Starvation",
    "summary": "Some people do not eat enough food. In extreme cases, this is called starvation. If the energy in the food you eat is less than the energy you use, you will lose body mass and become underweight. Underweight people: - often suffer from health problems, such as a weak immune system - do not have energy to do things, and are often tired - are likely to suffer from a lack of vitamins or minerals.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Starvation.md"
  },
  {
    "id": "obese",
    "title": "Obese",
    "summary": "Some people eat too much, or eat too many fatty foods. If the energy in the food you eat is more than the energy you use, you increase your body mass. This is stored as fat under the skin. If a person becomes extremely overweight, they are obese. Overweight people have a greater risk of: - heart disease - stroke - diabetes - some cancer.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Obese.md"
  },
  {
    "id": "bacteria",
    "title": "Bacteria",
    "summary": "Your large intestine contains bacteria. Bacteria feed on the fibre in your diet. They make important vitamins such as vitamin K. (Vitamin K is a group of vitamins that the body needs for blood clotting, helping wounds to repair.) These vitamins are then absorbed into your body and help keep you healthy.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Bacteria.md"
  },
  {
    "id": "enzyme-biology",
    "title": "Enzyme (Biology)",
    "summary": "Your teeth begin the process of digestion. They break down food into smaller pieces. The digestive juices in your gut contain enzymes. Enzymes are special proteins that can break down large Molecules of nutrients into small molecules.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Enzyme (Biology).md"
  },
  {
    "id": "catalyst-chemistry",
    "title": "Catalyst (Chemistry)",
    "summary": "Enzymes are biological catalysts – they speed up digestion. However, catalysts do not get used up.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Catalyst (Chemistry).md"
  },
  {
    "id": "carbohydrase",
    "title": "Carbohydrase",
    "summary": "Different types of enzyme break down different nutrients. The three main types of digestive enzymes are carbohydrase, protease, and lipase.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Carbohydrase.md"
  },
  {
    "id": "protease",
    "title": "Protease",
    "summary": "Different types of enzyme break down different nutrients. The three main types of digestive enzymes are carbohydrase, protease, and lipase.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Protease.md"
  },
  {
    "id": "lipase",
    "title": "Lipase",
    "summary": "Different types of enzyme break down different nutrients. The three main types of digestive enzymes are carbohydrase, protease, and lipase.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Lipase.md"
  },
  {
    "id": "bile",
    "title": "Bile",
    "summary": "Lipase is an enzyme that breaks down lipids into fatty acids and glycerol (see Lipids are digested in the small intestine. It is helped by bile, a substance made in the liver. Bile breaks down lipids into small drops that are easier for the lipase enzymes to work on.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Bile.md"
  },
  {
    "id": "drug",
    "title": "Drug",
    "summary": "Drugs are chemical substances that affect the way your body works. They change the Chemical Reactions that take place. As a result, some drugs can seriously harm you. These drugs are illegal in many countries, which means you are breaking the law if you take them.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Drug.md"
  },
  {
    "id": "medicinal-drug",
    "title": "Medicinal drug",
    "summary": "Medicinal drugs are used in medicine. They benefit your health in some way. They may be used to treat the symptoms of a condition. For example, paracetamol reduces pain. Other drugs can make you better. For example, the antibiotic pills in.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Medicinal drug.md"
  },
  {
    "id": "alcohol",
    "title": "Alcohol",
    "summary": "Alcohol contains the chemical compound ethanol. When a person drinks alcohol, ethanol enters their blood. It then travels to their brain, where it affects their nervous system. You can read the harmful effects of alcohol in Figure 2.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Alcohol.md"
  },
  {
    "id": "ethanol",
    "title": "Ethanol",
    "summary": "Alcohol contains the chemical compound ethanol. When a person drinks alcohol, ethanol enters their blood. It then travels to their brain, where it affects their nervous system. You can read the harmful effects of alcohol in Figure 2.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Ethanol.md"
  },
  {
    "id": "depressant",
    "title": "Depressant",
    "summary": "Alcohol is a depressant. This means it slows down reactions in the body. Drinking large volumes of alcohol can also cause stomach ulcers, heart disease, and brain and liver damage. This is because the liver breaks down harmful chemicals, including ethanol, into waste Products. Waste products are then removed from the body.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Depressant.md"
  },
  {
    "id": "tobacco",
    "title": "Tobacco",
    "summary": "Cigarettes contain tobacco. Tobacco smoke contains: - tar – a sticky, black substance that builds up in the lungs and narrows the airways - nicotine – a drug (called a stimulant) that speeds up the nervous system, making the heart beat faster and narrowing blood vessels - carbon monoxide – a poisonous gas that stops the blood from carrying as much oxygen as it should.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Tobacco.md"
  },
  {
    "id": "tar",
    "title": "Tar",
    "summary": "Cigarettes contain tobacco. Tobacco smoke contains: - tar – a sticky, black substance that builds up in the lungs and narrows the airways - nicotine – a drug (called a stimulant) that speeds up the nervous system, making the heart beat faster and narrowing blood vessels - carbon monoxide – a poisonous gas that stops the blood from carrying as much oxygen as it should.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Tar.md"
  },
  {
    "id": "nicotine",
    "title": "Nicotine",
    "summary": "Cigarettes contain tobacco. Tobacco smoke contains: - tar – a sticky, black substance that builds up in the lungs and narrows the airways - nicotine – a drug (called a stimulant) that speeds up the nervous system, making the heart beat faster and narrowing blood vessels - carbon monoxide – a poisonous gas that stops the blood from carrying as much oxygen as it should.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Nicotine.md"
  },
  {
    "id": "stimulant",
    "title": "Stimulant",
    "summary": "Cigarettes contain tobacco. Tobacco smoke contains: - tar – a sticky, black substance that builds up in the lungs and narrows the airways - nicotine – a drug (called a stimulant) that speeds up the nervous system, making the heart beat faster and narrowing blood vessels - carbon monoxide – a poisonous gas that stops the blood from carrying as much oxygen as it should.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Stimulant.md"
  },
  {
    "id": "carbon-monoxide",
    "title": "Carbon monoxide",
    "summary": "Cigarettes contain tobacco. Tobacco smoke contains: - tar – a sticky, black substance that builds up in the lungs and narrows the airways - nicotine – a drug (called a stimulant) that speeds up the nervous system, making the heart beat faster and narrowing blood vessels - carbon monoxide – a poisonous gas that stops the blood from carrying as much oxygen as it should.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Carbon monoxide.md"
  },
  {
    "id": "passive-smoking",
    "title": "Passive smoking",
    "summary": "People who smoke will more likely develop conditions such as breathing problems, cancer, heart attacks, and strokes. Breathing in other people’s smoke can also cause harm. This is called passive smoking.",
    "tags": [
      "science",
      "student-book-7",
      "biology"
    ],
    "subject": "Biology",
    "wiki": "Concepts/Passive smoking.md"
  }
];
