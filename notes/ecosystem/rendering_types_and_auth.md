# 🖥️ Rendering Types & Authentication

## 📦 Rendering Strategies

### 🔵 CSR — Client-Side Rendering (not static)

- Rendered in the browser.
- Starts as empty HTML → JavaScript builds the UI.
- Slower first load.
- **Examples:** React SPA, Vite React, Vue SPA.

### 🟢 SSR — Server-Side Rendering (not static)

- Rendered on the server **per request**.
- Fresh data on every load.
- Requires a live server.
- **Examples:** Next.js (SSR), Nuxt (SSR), Remix.

### 🟡 SSG — Static Site Generation (static)

- Rendered **once at build time** into plain HTML files.
- Super fast and cheap to host.
- Old content stays until a **rebuild**.
- **Examples:** Docusaurus, Next.js (SSG), Astro.

> **GitHub Pages** = SSG only | **Docusaurus** = SSG

---

## 🚧 Functions in SSG

SSG = **no backend at runtime**.

### ❌ Does NOT work in SSG

- Auth on server (sessions)
- Per-request DB queries
- Server-only APIs
- Secure secrets

### ✅ Does work in SSG

- Clicks, forms, modals
- Client-side fetch to APIs
- State, routing, UI logic

---

## 🛠️ Minimal Flow: Docusaurus (SSG) + Python Backend

### 1️⃣ Frontend (Docusaurus / browser)

```javascript
// login
await fetch("https://api.example.com/login", {
  method: "POST",
  credentials: "include", // IMPORTANT
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email, password })
});

// protected call
const res = await fetch("https://api.example.com/me", {
  credentials: "include"
});
const user = await res.json();
```

### 2️⃣ Backend (FastAPI – session cookie)

```python
from fastapi import FastAPI, Response, Request

app = FastAPI()

@app.post("/login")
def login(data: dict, response: Response):
    user = verify_user(data)  # check DB
    session_id = create_session(user["id"])
    response.set_cookie(
        key="session",
        value=session_id,
        httponly=True,
        samesite="none",
        secure=True,
    )
    return {"ok": True}

@app.get("/me")
def me(request: Request):
    session_id = request.cookies.get("session")
    user = get_user_from_session(session_id)
    return user
```

### 🔑 Key Rules

- Frontend = **static**
- Auth/session = **backend only**
- Use **cookies + `credentials: "include"`**
- SSG does NOT break auth logic
