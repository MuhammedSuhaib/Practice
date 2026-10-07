# MCP

In HTTP, it follows TCP = 1 response at a time.
Transmission Control Protocol (TCP) is a communications standard that enables application programs and computing devices to exchange messages over a network.

> **⚠️ Correction:** This is true for **HTTP/1.1**, but **HTTP/2 and HTTP/3** support **multiplexing** (multiple simultaneous requests/responses over a single TCP connection).

TCP connection will be closed after every request.
That was the way how our APIs, normal REST APIs, work.
Means REST APIs = TCP.

> **⚠️ Correction:** REST APIs use **HTTP/HTTPS**, which runs **on top of** TCP. They're not the same thing. TCP is the transport layer; HTTP is the application layer protocol.

Then we also have WebSockets for real-time communications.
WebSocket (ws) connection maintains the TCP protocol throughout the session.
This is called duplex or bi-directional connection.
BUT OUR MCP RUNS ON JSON-RPC 2.0 PROTOCOL.
JSON-RPC is just a JSON format with 4 key-value pairs, namely:
```json
{
  "jsonrpc": "version here",
  "method": "func to call",
  "params": "arguments",
  "id": 1
}
```
---
ID isn't used to make different users unique; it is used to differentiate different requests. But to make users unique, it uses TCP connection.
JSON-RPC IS BOTH STREAMABLE (WHEN NO ID) AND REQUEST-RESPONSE (WHEN ID IS PRESENT).

# REST APIs
APIs that follow HTTP/HTTPS protocol.

# SQLModel
In simple terms, it just validates and creates tables.
 Why using MCP integrations takes time when we have to integrate any site (e.g., Google, FB, etc.)?
But MCP servers created tools for us like frozen parathas - just fry and eat.
Whereas the old way we did it like: buy flour, knead, roll, and then fry - like our standard API integrations way.
We have 3 things:
- MCP Host: e.g., IDE, API servers, etc.
- MCP Client: Manages all
- MCP Server: Receives request
If we pass ID in MCP request, then it'll be a request that the server has to respond to. If not, then it will be treated as a notification.
It has the version jsonrpc: 2.0.
We can't request MCP server directly; it first passes to our server, then the MCP server receives it.
