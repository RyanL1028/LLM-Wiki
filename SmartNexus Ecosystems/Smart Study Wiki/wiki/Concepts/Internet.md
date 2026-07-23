# Internet

**Summary**: A global network of interconnected computers and networks that communicate using standardised protocols (TCP/IP). Provides the infrastructure for services like the World Wide Web, email, VoIP, and file transfer. Data travels in packets via packet switching across routers worldwide.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is the Internet?

The **Internet** is a global system of interconnected computer networks -- a "network of networks." It links billions of devices worldwide using the **TCP/IP protocol suite**, a standard set of communication rules that allows different types of computers and networks to exchange data.

The Internet is **not** owned or controlled by any single organisation. It is a distributed network maintained through cooperation between Internet Service Providers (ISPs), network operators, and standards bodies (such as the IETF and ICANN).

## Internet vs World Wide Web

A critical distinction for IGCSE:

| | Internet | World Wide Web (WWW) |
|---|---|---|
| **What it is** | The physical/electronic **infrastructure** -- cables, routers, switches, satellites, and the TCP/IP protocols | A **service** that runs on top of the Internet |
| **Analogy** | The road network (roads, traffic lights, road rules) | The delivery trucks that drive on the roads |
| **Created** | 1960s (ARPANET) | 1989 (Tim Berners-Lee at CERN) |
| **Uses** | Many services: WWW, email (SMTP), file transfer (FTP), VoIP, online gaming, streaming | One specific service: accessing hyperlinked web pages via HTTP/HTTPS |

The Internet existed for ~20 years before the World Wide Web was invented. You can use the Internet without using the Web (e.g., sending email via SMTP, or using a messaging app that does not use HTTP).

## How Data Travels: Packets

Data sent over the Internet is broken into small chunks called **packets**. Each packet is typically 64--1500 bytes.

### Packet Structure

Every packet contains two main parts:

| Part | Contents |
|------|----------|
| **Header** | Source IP address, destination IP address, sequence number (packet order), protocol, time-to-live (TTL) |
| **Payload** | A portion of the actual data being transmitted |

### Why Packets?

- **Efficiency**: If one packet is corrupted or lost, only that packet needs to be resent -- not the entire file
- **Sharing**: Packets from many different users and applications can share the same network lines
- **Resilience**: Packets can take different routes if one path is congested or broken

## Packet Switching

**Packet switching** is the method by which data travels across the Internet:

1. The sending computer breaks the data into packets
2. Each packet is sent to a router (the first "hop")
3. The router reads the destination IP address from the header and decides which neighbouring router to forward the packet to
4. Each packet travels **independently** -- different packets may take different routes
5. At the destination, packets are **reassembled** into the original order using the sequence numbers

### Advantages of Packet Switching

- **No dedicated connection**: Unlike circuit switching (traditional phone calls), packet switching does not require a dedicated physical path
- **Robust**: If one route fails, packets can be rerouted dynamically
- **Efficient use of bandwidth**: The network carries packets from many sources simultaneously

### Disadvantages

- Packets may arrive **out of order** (must be reassembled)
- **Latency** (delay) can vary -- problematic for real-time applications like VoIP and gaming
- Packets can be **lost** and must be retransmitted

## Key Internet Protocols (TCP/IP Stack)

| Layer | Protocol | Purpose |
|-------|----------|---------|
| Application | HTTP, HTTPS, FTP, SMTP, DNS | Services that applications use |
| Transport | TCP, UDP | End-to-end communication, error checking (TCP), or speed (UDP) |
| Internet | IP (IPv4, IPv6) | Addressing and routing packets across networks |
| Network Access | Ethernet, Wi-Fi, fibre | Physical transmission of bits |

**TCP (Transmission Control Protocol)**: Ensures reliable delivery -- packets are acknowledged, lost packets are retransmitted, and data arrives in order. Used for web pages, email, file downloads.

**UDP (User Datagram Protocol)**: No guarantee of delivery or ordering. Faster but less reliable. Used for streaming, VoIP, online gaming where speed matters more than perfect accuracy.

---

## Sources

- **BBC Bitesize GCSE Computer Science** — Internet and Networking, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — The Internet and Its Uses, Cambridge Assessment International Education
- **CK-12 Computer Science** — Networking, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[World Wide Web]] -- The web of hyperlinked pages built on top of the Internet
- [[HTTP]] -- Protocol for transferring web pages
- [[HTTPS]] -- Secure, encrypted version of HTTP
- [[DNS]] -- Translates domain names to IP addresses
- [[IP Address]] -- Numerical label that identifies each device on the Internet
- [[Data Packet]] -- Structure and contents of a network packet in detail
- [[Packet Switching]] -- How packets are routed across the Internet
- [[URL]] -- Uniform Resource Locator for web addresses
- [[Web Browser]] -- Software used to access the World Wide Web
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "The Internet and the World Wide Web are the same thing" | The Internet is the infrastructure; the Web is a service on top of it. Email, VoIP, and online gaming use the Internet but are not part of the Web. |
| "The Internet is stored somewhere -- like a big server" | The Internet is a network of networks, not a central repository. It has no single physical location. |
| "Packets from the same message all take the same route" | Each packet is routed independently. Different packets of the same message can (and often do) take entirely different physical paths. |
| "The Internet was invented by one person" | It evolved from multiple projects (ARPANET, packet switching research). Many people contributed. Tim Berners-Lee invented the World Wide Web, not the Internet. |
| "Wi-Fi is the Internet" | Wi-Fi is a wireless local network technology. It connects devices to a router, which may (or may not) be connected to the Internet. |
