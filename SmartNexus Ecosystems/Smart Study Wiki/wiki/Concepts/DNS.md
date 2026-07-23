# DNS

**Summary**: Domain Name System -- the hierarchical, distributed naming system that translates human-readable domain names (www.example.com) into machine-readable IP addresses (93.184.216.34). Essential for the usability of the Internet, acting as its "phone book."
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is DNS?

The **Domain Name System (DNS)** is a distributed database that maps domain names to IP addresses. Every device on the Internet has a numeric **IP address** (e.g., `93.184.216.34`). Humans find names like `www.example.com` much easier to remember and type. DNS bridges the gap.

DNS is often called the **phone book of the Internet**: you look up a name to find the number, rather than having to remember every number directly.

## Why DNS is Needed

| Without DNS | With DNS |
|-------------|----------|
| Users would need to remember `142.250.187.228` | Users type `google.com` |
| If a server changes IP address, everyone must be told the new number | Only the DNS record is updated; users see no change |
| Impossible to browse the web meaningfully | Domain names are human-readable, brandable, and memorable |

## How DNS Works: The Resolution Process

When you type `www.example.com` into a browser, the following resolution takes place:

### Step 1: Check Local Cache

The browser checks its own cache. If the IP address was recently resolved, it is returned immediately. The operating system cache is also checked.

### Step 2: Query the DNS Resolver (ISP's Recursive DNS Server)

If not cached locally, the request goes to a **DNS resolver** -- typically provided by your ISP or a public DNS service (Google 8.8.8.8, Cloudflare 1.1.1.1). This server does the legwork on your behalf.

### Step 3: Root DNS Servers

The resolver queries a **root DNS server**. There are 13 root server clusters worldwide. The root server does not know the IP address but knows which **Top-Level Domain (TLD) server** to ask next -- e.g., it directs `.com` queries to the .com TLD servers.

### Step 4: TLD DNS Servers

The resolver queries the TLD server for `.com`. The TLD server knows which **authoritative DNS server** handles `example.com` and returns that server's address.

### Step 5: Authoritative DNS Server

The resolver queries the authoritative DNS server for `example.com`. This server holds the actual DNS records for the domain and returns the IP address.

### Step 6: Response to Browser

The resolver returns the IP address to the browser. The browser can now open an HTTP connection to that IP address. The resolver caches the result for future queries.

```
Browser → Local Cache → ISP Resolver → Root DNS (.)
                                          ↓
                                    TLD Server (.com)
                                          ↓
                                  Authoritative DNS (example.com) → IP returned
```

## DNS Hierarchy

```
                      Root DNS Servers
                      /      |       \
                     /       |        \
            .com TLD       .org TLD    .uk TLD
            /     \           |           |
           /       \          |           |
    example.com  google.com  wikipedia.org  bbc.co.uk
```

## DNS Record Types

| Record Type | Purpose | Example |
|-------------|---------|---------|
| **A** | Maps domain to IPv4 address | `example.com → 93.184.216.34` |
| **AAAA** | Maps domain to IPv6 address | `example.com → 2606:2800:220:1:248:1893:25c8:1946` |
| **CNAME** | Alias -- maps one name to another | `www.example.com → example.com` |
| **MX** | Mail server for the domain | `example.com → mail.example.com` |
| **NS** | Authoritative name server for the domain | `example.com → ns1.example.com` |

## Public DNS Services

| Provider | Primary DNS | Secondary DNS |
|----------|-------------|---------------|
| Google Public DNS | `8.8.8.8` | `8.8.4.4` |
| Cloudflare | `1.1.1.1` | `1.0.0.1` |
| OpenDNS | `208.67.222.222` | `208.67.220.220` |

These are often faster and more reliable than ISP-provided DNS servers. Cloudflare's 1.1.1.1 was specifically chosen because it is easy to remember.

---

## Sources

- **BBC Bitesize GCSE Computer Science** — DNS and Domain Names, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — The Internet and Its Uses, Cambridge Assessment International Education
- **CK-12 Computer Science** — Networking, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[Internet]] -- The network infrastructure DNS supports
- [[IP Address]] -- The numeric addresses DNS translates to
- [[HTTP]] -- Protocol for web pages; depends on DNS for name resolution
- [[URL]] -- Web addresses that include domain names
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "There is one big DNS server that knows every domain" | DNS is **distributed** across millions of servers worldwide. No single server holds all records. |
| "DNS lookup is instant" | A cold (uncached) DNS lookup can take 100--500 ms as multiple queries propagate up and down the hierarchy. Cached lookups are near-instant. |
| "The root servers control the Internet" | Root servers only point to TLD servers. They do not store domain IP addresses and cannot redirect traffic arbitrarily. |
| "Changing DNS servers makes your Internet faster" | It only speeds up the **name resolution** step. Once the IP is known, browsing speed depends on your connection, not DNS. |
| "DNS is only for web browsing" | DNS is used by every Internet service that uses domain names: email (MX records), messaging apps, VPNs, gaming servers. |
