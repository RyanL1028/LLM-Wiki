# HTTP

**Summary**: Hypertext Transfer Protocol -- the request-response protocol used to transfer web pages, images, and other resources between a web browser (client) and a web server. HTTP is stateless; HTTPS adds SSL/TLS encryption for secure communication.
**Tags**: #igcse #computer-science
**Created**: 2026-05-08T14:03:00Z
**Last Updated**: 2026-07-16

---

## What is HTTP?

**Hypertext Transfer Protocol (HTTP)** is an application-layer protocol that governs how web browsers (clients) communicate with web servers. It follows a simple **request-response** model:

1. The client (browser) sends an **HTTP request** to a server
2. The server processes the request and sends back an **HTTP response**
3. The connection is closed (in HTTP/1.0) or may be reused (in HTTP/1.1 onwards)

HTTP is **stateless**: each request-response pair is independent. The server does not retain information about previous requests from the same client. This is why websites use [[Cookie|cookies]] and sessions to maintain state (e.g., keeping a user logged in).

## The Client-Server Model

```
+---------+     HTTP Request (GET /index.html)    +----------+
| Browser | ----------------------------------->  |  Web     |
| (Client)|                                       |  Server  |
|         |  <----------------------------------- |          |
+---------+     HTTP Response (200 OK + HTML)     +----------+
```

## HTTP Methods

HTTP defines methods (sometimes called verbs) that specify the action the client wants to perform:

| Method | Purpose | Example |
|--------|---------|---------|
| **GET** | Retrieve a resource from the server | Requesting a web page, image, or stylesheet |
| **POST** | Submit data to the server (creates or updates) | Submitting a login form, uploading a file, sending a comment |
| **PUT** | Replace a resource on the server | Updating a user profile |
| **DELETE** | Remove a resource from the server | Deleting a post |
| **HEAD** | Like GET but returns only headers, not body | Checking if a page exists without downloading it |

For IGCSE, the key methods to know are **GET** (retrieving data) and **POST** (submitting data).

## HTTP Request Structure

An HTTP GET request for `www.example.com/page.html` looks like:

```
GET /page.html HTTP/1.1
Host: www.example.com
User-Agent: Mozilla/5.0
Accept: text/html
```

- **Request line**: Method (GET), resource path (/page.html), HTTP version
- **Headers**: Additional information (host, browser type, accepted formats)
- **Body** (POST only): The submitted data (e.g., form values)

## HTTP Response Structure

```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<html>...</html>
```

- **Status line**: HTTP version, status code, reason phrase
- **Headers**: Information about the response (content type, length)
- **Body**: The actual content (HTML, image data, JSON, etc.)

### Common HTTP Status Codes

| Code | Meaning | Description |
|------|---------|-------------|
| **200** | OK | Request succeeded; response body contains the resource |
| **301** | Moved Permanently | Resource has moved to a new URL |
| **404** | Not Found | The requested resource does not exist on the server |
| **500** | Internal Server Error | The server encountered an error and cannot fulfil the request |

## HTTP vs HTTPS

**HTTPS (Hypertext Transfer Protocol Secure)** is HTTP with **SSL/TLS encryption** added. It uses port 443 instead of port 80.

| Feature | HTTP | HTTPS |
|---------|------|-------|
| Encryption | None -- data sent as plain text | Encrypted via SSL/TLS |
| URL prefix | `http://` | `https://` |
| Default port | 80 | 443 |
| Security | Vulnerable to eavesdropping and man-in-the-middle attacks | Protects against interception and tampering |
| Padlock icon | No | Yes (in browser address bar) |
| SEO | Google deprioritises HTTP sites | Preferred by Google |

HTTPS should always be used for:
- Online banking and financial transactions
- E-commerce (entering credit card details)
- Login pages (passwords)
- Any site handling personal/sensitive data

## SSL/TLS: How HTTPS Works

SSL (Secure Sockets Layer) and its successor TLS (Transport Layer Security) provide:

1. **Encryption**: Data is encrypted so that even if intercepted, it cannot be read
2. **Authentication**: Digital certificates verify the server's identity, preventing impersonation
3. **Data Integrity**: Ensures data has not been modified in transit

### Simplified TLS Handshake

1. Browser connects to server and requests a secure connection
2. Server sends its **digital certificate** (containing its public key, verified by a Certificate Authority)
3. Browser verifies the certificate is valid and trusted
4. Browser and server agree on encryption settings and exchange session keys
5. All subsequent communication is encrypted with the session key

The padlock icon in the browser indicates an active HTTPS connection with a valid certificate.

---

## Sources

- **BBC Bitesize GCSE Computer Science** — HTTP and Web Protocols, BBC (free educational resource)
- **Cambridge IGCSE Computer Science 0478** — The Internet and Its Uses, Cambridge Assessment International Education
- **CK-12 Computer Science** — Web Technologies, CK-12 Foundation (free, CC BY-NC 3.0)

## Related Notes

- [[HTTPS]] -- Secure HTTP in detail
- [[SSL-TLS]] -- The encryption layer that makes HTTPS secure
- [[Internet]] -- The network infrastructure HTTP runs on
- [[World Wide Web]] -- The web of hyperlinked pages accessed via HTTP
- [[URL]] -- The address format used in HTTP requests
- [[Web Browser]] -- The client software that sends HTTP requests
- [[DNS]] -- Resolves domain names before HTTP connections
- [[Cookie]] -- How websites maintain state across HTTP requests
- [[CS-Index]]

---

## Common Misconceptions

| Misconception | Reality |
|---|---|
| "HTTPS means the website is safe and trustworthy" | HTTPS only means the connection is encrypted and the server's identity is verified. A phishing website with a valid certificate would still have HTTPS. |
| "HTTP and HTTPS are completely different protocols" | HTTPS is HTTP over an encrypted TLS connection. The protocol itself is the same; the transport layer underneath is different. |
| "GET and POST are interchangeable" | GET requests include data in the URL (visible, length-limited, bookmarkable, cacheable). POST includes data in the request body (not visible in URL, no length limit, not bookmarkable, not cacheable). Use GET for retrieval, POST for submission. |
| "A 404 error means the server is down" | A 404 means the specific resource was not found. The server itself is reachable and responding (if it were down, you would get no response at all or a timeout). |
