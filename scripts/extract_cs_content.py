#!/usr/bin/env python3
"""Extract CS coursebook content and create wiki concept pages + game questions from workbooks."""

import fitz, re, json, os
from pathlib import Path
from datetime import datetime

ROOT = Path(__file__).resolve().parent.parent
CONCEPTS_DIR = ROOT / "wiki" / "Concepts"
PAPERS_DIR = ROOT / "wiki" / "Papers"
now = datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")

TAG = "igcse-computer-science"

# Chapter page ranges from TOC
CHAPTERS = [
    (1, "Data Representation", 10, 44),
    (2, "Data Transmission", 45, 64),
    (3, "Hardware", 65, 88),
    (4, "Software", 78, 104),
    (5, "The Internet and Its Uses", 94, 134),
    (6, "Automated and Emerging Technologies", 135, 152),
    (7, "Algorithm Design and Problem Solving", 153, 194),
    (8, "Programming", 196, 292),
    (9, "Databases", 295, 322),
    (10, "Boolean Logic", 324, 350),
]

# Key concepts per chapter with summaries from the coursebook
COURSEBOOK_PATH = 'sources/computer science/Cambridge IGCSE™ and O Level Computer Science Coursebook with Digital Access (2 Years) (Cambridge In.pdf'

def strip_wikilinks(text):
    return re.sub(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]", r"\1", text)

def clean_text(text):
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# Main concept definitions extracted from the coursebook
CONCEPTS = []

def add_concept(title, summary, tags_extra=None):
    tags = ["concepts", "computer-science", "igcse-computer-science"]
    if tags_extra:
        tags.extend(tags_extra)
    CONCEPTS.append({
        "title": title,
        "summary": summary,
        "tags": tags,
        "subject": "IGCSE Computer Science",
    })

# ============================================================
# Chapter 1: Data Representation
# ============================================================
add_concept("Binary", "A base-2 number system using only 0 and 1, the fundamental numbering system used by computers to represent all data and instructions.",
    ["data-representation"])
add_concept("Hexadecimal", "A base-16 number system using digits 0-9 and letters A-F, providing a more compact and human-readable way to represent binary values.",
    ["data-representation"])
add_concept("Denary", "The base-10 number system used by humans in everyday counting, also known as the decimal system.",
    ["data-representation"])
add_concept("Binary Addition", "The process of adding two binary numbers together following rules where 0+0=0, 1+0=1, 1+1=0 carry 1, and 1+1+1=1 carry 1.",
    ["data-representation"])
add_concept("Overflow Error", "An error that occurs when the result of a binary addition exceeds the maximum value that can be stored in the allocated number of bits.",
    ["data-representation"])
add_concept("Two's Complement", "A method used to represent negative numbers in binary, where the most significant bit represents a negative value. Enables both positive and negative integers to be stored.",
    ["data-representation"])
add_concept("Logical Shift", "An operation that moves all bits in a binary number left or right. Left shift multiplies by 2, right shift divides by 2. Bits that fall off the end are lost.",
    ["data-representation"])
add_concept("ASCII", "American Standard Code for Information Interchange — a 7-bit character encoding standard that represents 128 characters including letters, digits, and symbols.",
    ["data-representation"])
add_concept("Unicode", "A character encoding standard that uses up to 32 bits per character, capable of representing characters from all major writing systems worldwide including emojis.",
    ["data-representation"])
add_concept("Bitmap Image", "An image represented as a grid of pixels where each pixel's colour is stored as a binary value. Higher resolution means more pixels and larger file size.",
    ["data-representation"])
add_concept("Colour Depth", "The number of bits used to represent the colour of each pixel in a bitmap image. Higher colour depth allows more colours but increases file size.",
    ["data-representation"])
add_concept("Sound Sampling", "The process of converting analogue sound into digital data by measuring the amplitude at regular intervals. Higher sample rate and bit depth give higher quality audio.",
    ["data-representation"])
add_concept("Sample Rate", "The number of samples taken per second when converting analogue sound to digital. Measured in Hz; CD quality is 44.1 kHz.",
    ["data-representation"])
add_concept("Data Compression", "The process of reducing the size of a file by encoding data more efficiently. Can be lossless (no data lost) or lossy (some data permanently removed).",
    ["data-representation"])
add_concept("Lossless Compression", "A compression method that reduces file size without losing any original data. The original file can be perfectly reconstructed. Used for text files and programs.",
    ["data-representation"])
add_concept("Lossy Compression", "A compression method that permanently removes some data to reduce file size. Cannot reconstruct the exact original. Used for images (JPEG), sound (MP3), and video.",
    ["data-representation"])
add_concept("File Size Calculation", "The process of calculating file sizes using bit, nibble, byte, kibibyte (KiB), mebibyte (MiB), gibibyte (GiB), and tebibyte (TiB). Image file size = resolution × colour depth.",
    ["data-representation"])

# ============================================================
# Chapter 2: Data Transmission
# ============================================================
add_concept("Data Packet", "A unit of data transmitted over a network, consisting of a header (containing source/destination addresses, packet number) and a payload (the actual data being sent).",
    ["data-transmission"])
add_concept("Packet Switching", "A method of data transmission where data is split into packets that travel independently across the network and are reassembled at the destination.",
    ["data-transmission"])
add_concept("Serial Transmission", "A method of data transmission where bits are sent one at a time over a single wire. Suitable for long distances; used in USB connections.",
    ["data-transmission"])
add_concept("Parallel Transmission", "A method of data transmission where multiple bits are sent simultaneously over multiple wires. Faster over short distances but suffers from data skew over longer distances.",
    ["data-transmission"])
add_concept("Simplex Transmission", "One-way data transmission where data travels in only one direction, e.g., from a sensor to a computer or radio broadcasting.",
    ["data-transmission"])
add_concept("Half-Duplex Transmission", "Two-way data transmission where data can travel in both directions but only one direction at a time, e.g., walkie-talkie.",
    ["data-transmission"])
add_concept("Full-Duplex Transmission", "Two-way data transmission where data can travel in both directions simultaneously, e.g., telephone conversation or video call.",
    ["data-transmission"])
add_concept("USB", "Universal Serial Bus — a standard interface for connecting devices to a computer, supporting serial data transmission, power delivery, and hot-swapping.",
    ["data-transmission"])
add_concept("Parity Check", "An error detection method where an extra bit is added to each byte to make the total number of 1s either even (even parity) or odd (odd parity).",
    ["data-transmission"])
add_concept("Checksum", "An error detection method where a calculated value is sent alongside data. The receiver recalculates and compares; a mismatch indicates an error.",
    ["data-transmission"])
add_concept("Automatic Repeat Request (ARQ)", "An error control method where the receiver acknowledges correctly received data and requests retransmission if an error is detected.",
    ["data-transmission"])
add_concept("Echo Check", "An error detection method where transmitted data is sent back (echoed) to the sender for comparison with the original.",
    ["data-transmission"])
add_concept("Encryption", "The process of converting data into a coded form (ciphertext) to prevent unauthorised access. Uses an encryption key; the original data can only be recovered with the correct decryption key.",
    ["data-transmission"])
add_concept("Symmetric Encryption", "Encryption where the same secret key is used to both encrypt and decrypt data. The key must be securely shared between sender and receiver.",
    ["data-transmission"])
add_concept("Asymmetric Encryption", "Encryption using a pair of keys: a public key for encryption and a private key for decryption. Enables secure communication without pre-sharing a secret key.",
    ["data-transmission"])

# ============================================================
# Chapter 3: Hardware
# ============================================================
add_concept("CPU", "Central Processing Unit — the brain of the computer that processes instructions, performs calculations, and controls the flow of data. Contains the ALU, CU, and registers.",
    ["hardware"])
add_concept("ALU", "Arithmetic Logic Unit — a component of the CPU that performs arithmetic operations (addition, subtraction) and logical operations (AND, OR, NOT).",
    ["hardware"])
add_concept("Control Unit", "A component of the CPU that manages the execution of instructions by sending control signals to other parts of the computer, directing the flow of data.",
    ["hardware"])
add_concept("Von Neumann Architecture", "The computer architecture where both instructions and data are stored in the same memory, with a single set of buses connecting the CPU to memory. Most modern computers use this design.",
    ["hardware"])
add_concept("Fetch-Execute Cycle", "The continuous cycle where the CPU fetches an instruction from memory, decodes it to determine the operation, and executes it. This repeats billions of times per second.",
    ["hardware"])
add_concept("Register", "A small, high-speed storage location inside the CPU used to hold data temporarily during processing. Key registers include PC, MAR, MDR, ACC, and CIR.",
    ["hardware"])
add_concept("Program Counter", "A register that holds the memory address of the next instruction to be fetched. It increments after each fetch.",
    ["hardware"])
add_concept("MAR", "Memory Address Register — holds the address of the memory location being accessed for reading or writing data.",
    ["hardware"])
add_concept("MDR", "Memory Data Register — holds the actual data being transferred between memory and the CPU during a read or write operation.",
    ["hardware"])
add_concept("ACC", "Accumulator — a register that stores the results of calculations performed by the ALU.",
    ["hardware"])
add_concept("CIR", "Current Instruction Register — holds the instruction currently being decoded and executed by the CPU.",
    ["hardware"])
add_concept("Clock Speed", "The speed at which a CPU processes instructions, measured in hertz (Hz). A higher clock speed means more cycles per second and faster processing.",
    ["hardware"])
add_concept("Cache Memory", "A small amount of very fast memory located on or near the CPU that stores frequently accessed data and instructions to reduce the need to access slower RAM.",
    ["hardware"])
add_concept("Core", "An independent processing unit within a CPU. Multi-core processors can execute multiple instructions simultaneously, improving performance for multitasking.",
    ["hardware"])
add_concept("RAM", "Random Access Memory — volatile primary memory that stores data and programs currently in use. Contents are lost when power is turned off. Faster than secondary storage.",
    ["hardware"])
add_concept("ROM", "Read-Only Memory — non-volatile memory that stores the BIOS/bootstrap program. Contents are permanently written during manufacture and cannot be changed.",
    ["hardware"])
add_concept("Virtual Memory", "A technique that uses part of secondary storage (e.g., HDD/SSD) as if it were RAM when physical RAM is full, allowing more programs to run but at slower speed.",
    ["hardware"])
add_concept("SSD", "Solid State Drive — a storage device using flash memory with no moving parts. Faster, quieter, and more durable than HDDs but typically more expensive per GB.",
    ["hardware"])
add_concept("HDD", "Hard Disk Drive — a storage device using spinning magnetic platters and a read/write arm. Higher capacities at lower cost than SSDs but slower and more fragile.",
    ["hardware"])
add_concept("Optical Storage", "Storage media using lasers to read and write data on reflective surfaces, e.g., CD, DVD, Blu-ray. Used for media distribution and archival storage.",
    ["hardware"])
add_concept("Cloud Storage", "Remote data storage accessed via the internet where files are stored on servers managed by a third-party provider. Offers accessibility, scalability, and off-site backup.",
    ["hardware"])
add_concept("Sensor", "An input device that measures a physical quantity (temperature, light, pressure, motion) and converts it into a digital signal for processing by a computer.",
    ["hardware"])
add_concept("Input Device", "A hardware device that allows data to be entered into a computer system, e.g., keyboard, mouse, touchscreen, microphone, sensor.",
    ["hardware"])
add_concept("Output Device", "A hardware device that presents data from a computer system to the user, e.g., monitor, printer, speaker, projector.",
    ["hardware"])
add_concept("NIC", "Network Interface Card — hardware that connects a computer to a network, providing a physical connection (Ethernet) or wireless connection (Wi-Fi). Has a unique MAC address.",
    ["hardware"])
add_concept("MAC Address", "Media Access Control address — a unique 48-bit identifier assigned to each network interface card, used for addressing on local networks.",
    ["hardware"])
add_concept("IP Address", "Internet Protocol address — a unique numerical address assigned to each device on a network, used to identify and locate devices for communication.",
    ["hardware"])

# ============================================================
# Chapter 4: Software
# ============================================================
add_concept("System Software", "Software that manages the hardware and provides a platform for application software to run. Includes the operating system, utilities, and device drivers.",
    ["software"])
add_concept("Application Software", "Software designed to perform specific tasks for the user, such as word processors, spreadsheets, web browsers, and games. Runs on top of system software.",
    ["software"])
add_concept("Operating System", "System software that manages computer hardware, runs applications, provides a user interface, handles file management, and manages memory and processes. Examples: Windows, macOS, Linux.",
    ["software"])
add_concept("Interrupt", "A signal sent to the processor indicating that an event needs immediate attention. Can be hardware-based (keyboard press, mouse click) or software-based (division by zero).",
    ["software"])
add_concept("High-Level Language", "A programming language designed to be easy for humans to read and write, using English-like syntax. Examples: Python, Java, C++. Must be translated into machine code before execution.",
    ["software"])
add_concept("Low-Level Language", "A programming language close to the hardware, such as assembly language or machine code. Difficult for humans but gives direct control over hardware.",
    ["software"])
add_concept("Compiler", "A translator that converts the entire high-level language source code into machine code at once, producing a standalone executable file. The translation only happens once.",
    ["software"])
add_concept("Interpreter", "A translator that converts high-level language source code into machine code line by line at runtime. Easier for debugging but slower execution since translation happens each time.",
    ["software"])
add_concept("Assembler", "A translator that converts assembly language into machine code. Assembly language uses mnemonics; the assembler translates them into binary machine code.",
    ["software"])
add_concept("IDE", "Integrated Development Environment — software that provides comprehensive facilities to programmers for writing, testing, and debugging code. Features include code editor, error highlighting, translator, runtime environment, debugger.",
    ["software"])
add_concept("Firmware", "Software stored permanently in ROM that provides low-level control for a device's hardware. Acts as an interface between hardware and higher-level software. Example: BIOS.",
    ["software"])
add_concept("Bootstrap", "The initial program (stored in ROM) that runs when a computer is powered on, loading the operating system from secondary storage into RAM.",
    ["software"])

# ============================================================
# Chapter 5: The Internet and Its Uses
# ============================================================
add_concept("Internet", "A global network of interconnected computers and networks that communicate using standardised protocols (TCP/IP). Provides the infrastructure for services like the World Wide Web, email, and VoIP.",
    ["internet"])
add_concept("World Wide Web", "A collection of interconnected hypertext documents and resources accessed via the internet using HTTP/HTTPS. The web is a service that runs on the internet, not the internet itself.",
    ["internet"])
add_concept("URL", "Uniform Resource Locator — the address used to access resources on the World Wide Web. Contains the protocol (http/https), domain name, and optionally path to a specific resource.",
    ["internet"])
add_concept("HTTP", "Hypertext Transfer Protocol — the protocol used for transferring web pages and resources between a web server and a browser. Operates as a request-response protocol.",
    ["internet"])
add_concept("HTTPS", "Hypertext Transfer Protocol Secure — HTTP encrypted using SSL/TLS encryption. Protects data in transit and verifies the identity of the website through digital certificates.",
    ["internet"])
add_concept("DNS", "Domain Name System — the system that translates human-readable domain names (e.g., www.example.com) into IP addresses that computers use to locate each other on the internet.",
    ["internet"])
add_concept("Web Browser", "Application software used to access, retrieve, and display web pages. Interprets HTML, CSS, and JavaScript to render web content. Examples: Chrome, Firefox, Safari.",
    ["internet"])
add_concept("Cookie", "A small text file stored on a user's computer by a website, used to remember preferences, track sessions, and personalise the browsing experience.",
    ["internet"])
add_concept("Digital Currency", "Currency that exists only in digital form, created and managed through computer systems. Includes cryptocurrencies like Bitcoin and central bank digital currencies (CBDCs).",
    ["internet"])
add_concept("Cyber Security", "The practice of protecting computer systems, networks, and data from unauthorised access, attacks, damage, or theft. Encompasses prevention, detection, and response.",
    ["internet", "security"])
add_concept("Phishing", "A social engineering attack where fraudulent emails or messages are sent pretending to be from reputable sources to trick recipients into revealing sensitive information.",
    ["internet", "security"])
add_concept("Malware", "Malicious software designed to damage, disrupt, or gain unauthorised access to a computer system. Includes viruses, worms, trojans, ransomware, and spyware.",
    ["internet", "security"])
add_concept("DDoS Attack", "Distributed Denial of Service — an attack where multiple compromised systems flood a target server with traffic, overwhelming it and preventing legitimate users from accessing the service.",
    ["internet", "security"])
add_concept("Firewall", "A network security system that monitors and controls incoming and outgoing traffic based on predetermined security rules, acting as a barrier between trusted and untrusted networks.",
    ["internet", "security"])
add_concept("Proxy Server", "An intermediary server that sits between a client and the internet, forwarding requests. Used for anonymity, content filtering, caching, and bypassing restrictions.",
    ["internet"])
add_concept("SSL/TLS", "Secure Sockets Layer / Transport Layer Security — cryptographic protocols that provide secure communication over a network by encrypting data and authenticating the server.",
    ["internet", "security"])

# ============================================================
# Chapter 6: Automated and Emerging Technologies
# ============================================================
add_concept("Automated System", "A combination of hardware and software designed to operate with minimal human intervention. Uses sensors for input, microprocessors for processing, and actuators for output.",
    ["automated-technologies"])
add_concept("Actuator", "An output device that converts electrical signals from a computer into physical movement or action. Examples: motors, pumps, valves, solenoids.",
    ["automated-technologies"])
add_concept("Robot", "A programmable machine capable of carrying out a series of actions autonomously or semi-autonomously. Combines sensors, processors, and actuators to interact with the physical world.",
    ["automated-technologies"])
add_concept("Robotics", "The branch of technology dealing with the design, construction, operation, and application of robots. Combines computer science with mechanical and electrical engineering.",
    ["automated-technologies"])
add_concept("Artificial Intelligence", "The simulation of human intelligence processes by computer systems, including learning, reasoning, problem-solving, perception, and language understanding.",
    ["automated-technologies"])
add_concept("Machine Learning", "A subset of AI where systems learn from data without being explicitly programmed. Algorithms identify patterns in training data and improve performance over time.",
    ["automated-technologies"])
add_concept("Expert System", "A computer system that emulates the decision-making ability of a human expert, using a knowledge base and a set of rules (inference engine) to make diagnoses or recommendations.",
    ["automated-technologies"])

# ============================================================
# Chapter 7: Algorithm Design and Problem Solving
# ============================================================
add_concept("Algorithm", "A step-by-step sequence of instructions designed to solve a specific problem or perform a task. Must be clear, unambiguous, and terminate after a finite number of steps.",
    ["algorithms"])
add_concept("Program Development Life Cycle", "The stages of creating a computer program: analysis (understanding the problem), design (planning the solution), coding (writing the program), and testing (verifying it works correctly).",
    ["algorithms"])
add_concept("Decomposition", "Breaking down a complex problem into smaller, more manageable sub-problems that are easier to understand and solve individually.",
    ["algorithms"])
add_concept("Structure Diagram", "A diagram that shows the decomposition of a system into subsystems, illustrating the hierarchical relationship between components.",
    ["algorithms"])
add_concept("Flowchart", "A diagram that represents an algorithm using standard symbols: ovals for start/stop, parallelograms for input/output, rectangles for processes, diamonds for decisions, and arrows for flow direction.",
    ["algorithms"])
add_concept("Pseudocode", "A method of describing an algorithm using natural language and structured notation that resembles programming code, without following the strict syntax of any specific language.",
    ["algorithms"])
add_concept("Trace Table", "A table used to manually step through an algorithm, recording the values of variables at each step to identify logical errors and verify correctness.",
    ["algorithms"])
add_concept("Validation Check", "A process that ensures data entered into a system meets specified criteria before processing. Types include range check, length check, type check, presence check, and format check.",
    ["algorithms"])
add_concept("Verification", "The process of checking that data has been accurately copied or transferred from one place to another. Methods include double entry and visual check.",
    ["algorithms"])
add_concept("Linear Search", "A search algorithm that checks each element in a list sequentially until the target value is found or the end is reached. Simple but inefficient for large datasets.",
    ["algorithms"])
add_concept("Binary Search", "A search algorithm that works on sorted lists by repeatedly dividing the search interval in half. Much faster than linear search but requires the data to be pre-sorted.",
    ["algorithms"])
add_concept("Bubble Sort", "A sorting algorithm that repeatedly steps through a list, compares adjacent elements, and swaps them if they are in the wrong order. Continues until no more swaps are needed.",
    ["algorithms"])
add_concept("Dry Run", "The process of manually executing an algorithm step by step using pen and paper, often with a trace table, to understand its behaviour and find errors without running it on a computer.",
    ["algorithms"])
add_concept("Test Data", "Data specifically chosen to test a program or algorithm. Includes normal data (valid, expected), abnormal data (valid but unexpected), and boundary data (at the limits of acceptable ranges).",
    ["algorithms"])

# ============================================================
# Chapter 8: Programming
# ============================================================
add_concept("Variable", "A named storage location in memory that holds a value which can change during program execution. Has a data type, name, and value.",
    ["programming"])
add_concept("Constant", "A named storage location in memory that holds a value which cannot be changed during program execution. Declared once and stays fixed.",
    ["programming"])
add_concept("Data Type", "A classification that specifies what kind of value a variable can hold and what operations can be performed on it. Common types: integer, real/float, char, string, boolean.",
    ["programming"])
add_concept("Integer", "A data type representing whole numbers (positive, negative, or zero) without fractional parts. Example: 42, -7, 0.",
    ["programming"])
add_concept("String", "A data type representing a sequence of alphanumeric characters and symbols. Usually enclosed in quotation marks. Example: \"Hello World\".",
    ["programming"])
add_concept("Boolean", "A data type that can hold only one of two values: TRUE or FALSE. Used for conditions and logical operations.",
    ["programming"])
add_concept("Sequence", "The execution of program instructions in the order they are written, one after another, from top to bottom. The most basic control structure.",
    ["programming"])
add_concept("Selection", "A control structure that allows a program to choose between different paths of execution based on a condition. Implemented using IF, THEN, ELSE, ELSEIF, CASE/SWITCH statements.",
    ["programming"])
add_concept("Iteration", "A control structure that repeats a block of code multiple times. Three types: count-controlled (FOR loop), pre-condition (WHILE loop), and post-condition (REPEAT UNTIL loop).",
    ["programming"])
add_concept("Count-Controlled Loop", "A loop that repeats a specific number of times, using a counter variable that increments or decrements on each iteration. Example: FOR i ← 1 TO 10.",
    ["programming"])
add_concept("Pre-Condition Loop", "A loop that checks a condition before each iteration. If the condition is false initially, the loop body may never execute. Example: WHILE condition DO ... ENDWHILE.",
    ["programming"])
add_concept("Post-Condition Loop", "A loop that executes the body at least once before checking the condition. Example: REPEAT ... UNTIL condition.",
    ["programming"])
add_concept("Totalling", "A programming technique that accumulates a running total by adding each new value to a running sum, typically using a variable initialised to 0.",
    ["programming"])
add_concept("Counting", "A programming technique that tracks how many times an event occurs by incrementing a counter variable each time the event happens.",
    ["programming"])
add_concept("String Manipulation", "Operations performed on string data, including concatenation (joining), substring extraction, length measurement, and character searching and replacing.",
    ["programming"])
add_concept("Subroutine", "A named block of code that performs a specific task and can be called from other parts of a program. Two types: procedures (perform actions) and functions (perform actions and return a value).",
    ["programming"])
add_concept("Procedure", "A type of subroutine that performs a set of actions but does not return a value. Called by name and may accept parameters.",
    ["programming"])
add_concept("Function", "A type of subroutine that performs a set of actions and returns a value to the calling code. Can be used in expressions since it evaluates to a value.",
    ["programming"])
add_concept("Parameter", "A variable listed in a subroutine definition that receives a value (argument) when the subroutine is called. Allows subroutines to work with different data each time.",
    ["programming"])
add_concept("Array", "A data structure that stores multiple values of the same data type under a single identifier, accessed using an index. Elements are stored contiguously in memory. Indices typically start at 0 or 1.",
    ["programming"])
add_concept("2D Array", "A two-dimensional array that stores data in a grid-like structure with rows and columns. Accessed using two indices (row, column). Can represent tables, matrices, and game boards.",
    ["programming"])
add_concept("Library Routine", "A pre-written, tested subroutine available for programmers to use without rewriting. Part of a code library. Examples include mathematical functions, input/output routines, and string handling functions.",
    ["programming"])
add_concept("Maintainable Program", "A program written in a way that makes it easy for other programmers to understand, modify, and debug. Achieved through meaningful identifiers, comments, indentation, and modular structure.",
    ["programming"])
add_concept("File Handling", "The process of reading from and writing to files on secondary storage. Operations include open, read, write, append, and close. Files can be accessed sequentially or randomly.",
    ["programming"])
add_concept("Arithmetic Operator", "Symbols used in programming to perform mathematical calculations. Includes: + (addition), - (subtraction), * (multiplication), / (division), MOD (remainder), DIV (integer division).",
    ["programming"])
add_concept("Nested Statement", "A control structure placed inside another control structure of the same type. For example, an IF statement inside another IF statement, or a FOR loop inside another FOR loop.",
    ["programming"])

# ============================================================
# Chapter 9: Databases
# ============================================================
add_concept("Database", "A structured collection of data stored electronically, organised for efficient searching, retrieval, and management. Typically organised into tables with rows (records) and columns (fields).",
    ["databases"])
add_concept("Table", "A collection of related records in a database, organised in rows and columns. Each row represents a record, each column represents a field.",
    ["databases"])
add_concept("Record", "A single row in a database table representing one complete entry, consisting of values for each field. Each record is uniquely identified by a primary key.",
    ["databases"])
add_concept("Field", "A single column in a database table representing one category of information. Each field has a defined data type (text, number, date, boolean).",
    ["databases"])
add_concept("Primary Key", "A field that uniquely identifies each record in a database table. Must be unique for every record and cannot be null. Example: StudentID, ProductCode.",
    ["databases"])
add_concept("Foreign Key", "A field in one table that refers to the primary key in another table, used to create relationships (links) between tables.",
    ["databases"])
add_concept("SQL", "Structured Query Language — the standard language for managing and querying relational databases. Used to create, read, update, and delete data.",
    ["databases"])
add_concept("SELECT Statement", "An SQL command used to retrieve (query) data from a database. SELECT specifies which fields to display. SELECT * displays all fields.",
    ["databases"])
add_concept("FROM Clause", "Part of an SQL query that specifies which table to retrieve data from. Used with SELECT: SELECT FirstName FROM Students.",
    ["databases"])
add_concept("WHERE Clause", "Part of an SQL query that filters records based on specified conditions. Example: SELECT Name FROM Products WHERE Price > 100.",
    ["databases"])
add_concept("ORDER BY Clause", "Part of an SQL query that sorts the results in ascending (ASC) or descending (DESC) order based on a specified field.",
    ["databases"])
add_concept("SUM Function", "An SQL aggregate function that calculates the total of numeric values in a column. Example: SELECT SUM(Price) FROM Orders.",
    ["databases"])
add_concept("COUNT Function", "An SQL aggregate function that returns the number of records matching a query. Example: SELECT COUNT(*) FROM Students WHERE Grade = 'A'.",
    ["databases"])
add_concept("Normalisation", "The process of organising data in a database to reduce redundancy and improve data integrity by splitting data into related tables.",
    ["databases"])

# ============================================================
# Chapter 10: Boolean Logic
# ============================================================
add_concept("Boolean Logic", "A form of algebra where all values are either TRUE (1) or FALSE (0). Used in computer circuits, programming conditions, and search queries.",
    ["boolean-logic"])
add_concept("Logic Gate", "A physical electronic component that implements a Boolean function. Takes one or more binary inputs and produces a single binary output. The building blocks of digital circuits.",
    ["boolean-logic"])
add_concept("NOT Gate", "A logic gate with one input that outputs the inverse of the input. If the input is 1, output is 0; if input is 0, output is 1. Symbol: triangle with small circle.",
    ["boolean-logic"])
add_concept("AND Gate", "A logic gate with two inputs that outputs 1 only when both inputs are 1. Otherwise outputs 0. Symbol: D-shaped with flat side on the right.",
    ["boolean-logic"])
add_concept("OR Gate", "A logic gate with two inputs that outputs 1 when at least one input is 1. Outputs 0 only when both inputs are 0. Symbol: curved arrow-like shape.",
    ["boolean-logic"])
add_concept("NAND Gate", "A logic gate that is the inverse of AND. Outputs 1 unless both inputs are 1. Any Boolean expression can be built using only NAND gates (functionally complete).",
    ["boolean-logic"])
add_concept("NOR Gate", "A logic gate that is the inverse of OR. Outputs 1 only when both inputs are 0. Functionally complete — any circuit can be built using only NOR gates.",
    ["boolean-logic"])
add_concept("XOR Gate", "Exclusive OR gate — outputs 1 when exactly one of its two inputs is 1 (inputs are different). Outputs 0 when inputs are the same. Used in binary addition.",
    ["boolean-logic"])
add_concept("Truth Table", "A table that shows all possible input combinations for a logic expression or circuit and the corresponding output for each combination. n inputs produces 2^n rows.",
    ["boolean-logic"])
add_concept("Logic Expression", "A mathematical notation using Boolean operators (AND, OR, NOT) and variables to describe the behaviour of a logic circuit. Example: (A AND B) OR (NOT C).",
    ["boolean-logic"])
add_concept("Logic Circuit", "A physical or diagrammatic arrangement of interconnected logic gates that processes binary signals to produce a specific output based on the inputs.",
    ["boolean-logic"])

print(f"Created {len(CONCEPTS)} concept definitions")

# Save concept list for later use by file-creation script
with open('/tmp/cs_concepts.json', 'w') as f:
    json.dump(CONCEPTS, f, indent=2)

print("Saved to /tmp/cs_concepts.json")
