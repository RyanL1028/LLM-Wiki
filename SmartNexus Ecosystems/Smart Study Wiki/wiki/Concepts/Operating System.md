# Operating System

**Summary**: System software that manages computer hardware, runs applications, provides a user interface, handles file management, and manages memory and processes. Acts as an intermediary between hardware and application software. Examples: Windows, macOS, Linux, Android, iOS.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is an Operating System?

An **operating system (OS)** is the most fundamental piece of software on a computer. It manages all hardware resources (CPU, memory, storage, input/output devices), provides a platform for application software to run, and offers a user interface. Without an OS, each application would have to include its own code for every type of hardware and every basic function -- a practical impossibility.

The OS acts as a **layer of abstraction** between hardware and applications: programs interact with the OS using standardised interfaces, and the OS translates those requests into hardware-specific commands via device drivers.

## Functions of an Operating System

### 1. Provide a User Interface

The OS provides a way for users to interact with the computer:

| Interface | Description | Example |
|-----------|-------------|---------|
| **GUI (Graphical User Interface)** | Visual interface with windows, icons, menus, pointer (WIMP). Designed for ease of use. | Windows desktop, macOS Finder, GNOME on Linux |
| **CLI (Command Line Interface)** | Text-based interface where users type commands. More powerful for automation and scripting. | Windows Command Prompt, bash on Linux/macOS |

Most modern operating systems provide both. The CLI is preferred by developers and system administrators for its scriptability and efficiency.

### 2. Manage Hardware and Peripherals (Device Drivers)

The OS uses **device drivers** -- specialised programs that translate OS commands into the specific instructions a hardware device understands. Each piece of hardware (printer, graphics card, keyboard, network adapter) requires a driver.

- The OS provides a **standard interface** for applications (e.g., "print this document")
- The driver translates that request for the specific printer model
- This means applications do not need to know how every printer works

### 3. Manage Memory

The OS allocates RAM to programs and ensures they do not interfere with each other:

- Each program gets its own **address space** -- it cannot access memory allocated to other programs
- The OS tracks which parts of RAM are free and which are in use
- **Virtual memory**: when RAM is full, less-used pages are moved to disk (see [[RAM]] for virtual memory and thrashing)
- Memory is reclaimed when a program closes

### 4. Manage Processes

A **process** is a program in execution. Modern operating systems run many processes simultaneously.

- **Multitasking**: The OS rapidly switches between processes, giving each a small time slice on the CPU. This creates the illusion of simultaneous execution on a single-core CPU.
- **Scheduling**: The OS decides which process runs next based on priority, fairness, and resource needs
- **Interrupt handling**: Hardware and software interrupts allow the OS to respond to events (keyboard presses, timer ticks, I/O completion)
- **Process isolation**: A crash in one process does not affect others (the OS terminates only the misbehaving process)

See [[Interrupt]] for more on how interrupts work.

### 5. Manage Files

The OS provides a structured way to store and retrieve data:

- Creates, reads, writes, renames, copies, and deletes files
- Organises files into a **hierarchical directory structure** (folders/directories)
- Manages metadata: file name, size, type, creation/modification dates, permissions
- Controls access: read, write, and execute permissions for users and groups
- Manages **free space** on storage devices

### 6. Manage Security

The OS enforces security through:

- **User accounts**: Each user has a unique identity with a password or other authentication
- **Access control**: Users have different privilege levels (administrator vs standard user)
- **Authentication**: Verifying a user's identity at login
- **Firewall integration**: Controlling network traffic
- **Encryption**: Protecting stored data (e.g., BitLocker on Windows, FileVault on macOS)

### 7. Provide a Platform for Applications

The OS provides **APIs (Application Programming Interfaces)** that applications use to access system services -- opening files, drawing windows, playing sounds, connecting to networks. This means application developers do not need to write low-level hardware access code.

## Examples of Operating Systems

| OS | Type | Primary Use |
|----|------|-------------|
| **Microsoft Windows** | Proprietary | Desktop PCs, laptops, business environments |
| **macOS** | Proprietary (Unix-based) | Apple Mac desktops and laptops |
| **Linux** (Ubuntu, Fedora, Debian, etc.) | Open source (Unix-like) | Servers, developers, Android is Linux-based |
| **Android** | Open source (Linux kernel) | Smartphones, tablets |
| **iOS** | Proprietary | iPhones, iPads |
| **Chrome OS** | Proprietary (Linux kernel) | Chromebooks (web-focused) |

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Operating Systems, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — Software, Cambridge Assessment International Education
- **CK-12 Computer Science** — System Software, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[System Software]] -- OS is the core of system software
- [[Application Software]] -- Programs that run on top of the OS
- [[Interrupt]] -- How the OS responds to hardware/software events
- [[RAM]] -- Memory the OS manages and allocates
- [[Virtual Memory]] -- The OS's disk-based RAM extension
- [[File Handling]] -- How programs interact with the OS file system
- [[Firmware]] -- Low-level software between OS and hardware
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "The OS is the same as the GUI" | The GUI is just one component of the OS. The OS kernel, memory manager, process scheduler, and device drivers operate with or without a GUI. |
| "Linux is an operating system" | Linux is technically a **kernel**. A full OS (like Ubuntu or Fedora) is the Linux kernel plus GNU utilities and other software -- hence "GNU/Linux". |
| "The OS runs on top of applications" | Applications run on top of the OS. The OS is the foundation, directly controlling the hardware. |
| "More RAM means the OS does less memory management" | The OS always manages memory regardless of how much is available. More RAM reduces the need for virtual memory but does not eliminate memory management. |
| "Closing a window always stops the program" | On many systems, closing the window does not necessarily terminate the process -- some programs continue running in the background. |
