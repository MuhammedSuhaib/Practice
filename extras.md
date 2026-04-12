
OpenRouter **hosts + resells** LLMs on their side, so they are saying: pay for our single API
and pass any model in the model field, then the reply will come from their hosted LLMs, without the key of OpenAI/Gemini/Claude, etc.
One API key → access to many providers.
So we don't have to pay for APIs separately, and here they are giving their API with access to all LLM providers.

Pros: Simple, fast start

Cons: Markup, rate limits, vendor lock-in, trust + data concerns
→ That's why some people avoid it.
**Analogy:**

Shopkeeper saying: "Don't go to the market to buy one candy for $10.
I already bought many candies.
Come to me and pick any candy you want for the same price."

LiteLLM isn't hosting anything or asking $$ from us. It is just giving us what I can say a chat completion model so that I can use different models without changing too much code configurations. Just change the key and model. No one is asking for base URL.
LiteLLM = **Library**, like React/shadcn. It **doesn't host**, **doesn't sell.** It just gives you a **standard interface**. But it is still experimental. Code is available in official agents-sdk docs.
**Analogy:**
It is not selling or reselling anything. It is just providing the **shoppers** to carry those candies.

**Final notes (save this):**

* **CSR (not static)**
  Rendered in browser.
  Empty HTML → JS builds UI.
  Slower first load.
  **Examples:** React SPA, Vite React, Vue SPA
* **SSR (not static)**
  Rendered on server **per request**.
  Fresh data every load.
  Needs server.
  **Examples:** Next.js (SSR), Nuxt (SSR), Remix
* **SSG (static)**
  Rendered **once at build time**.
  Static HTML files.
  Super fast, cheap.
  Old content stays until **rebuild**.
  **Examples:** Docusaurus, Next.js (SSG), Astro
* **GitHub Pages** = SSG only
* **Docusaurus** = SSG

Functions **don't work on the server** in SSG.

Where they **do NOT work**:

* Auth on server (sessions)
* Per-request DB queries
* Server-only APIs
* Secure secrets

Where they **DO work**:

* Clicks, forms, modals
* Client fetch to APIs
* State, routing, UI logic

SSG = **no backend at runtime**.

**Docusaurus (SSG) + BetterAuth-style backend (Python) — minimal flow**

### **1) Frontend (Docusaurus / browser)**

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

### **2) Backend (Python – session cookie)**

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
        secure=True
    )
    return {"ok": True}

@app.get("/me")
def me(request: Request):
    session_id = request.cookies.get("session")
    user = get_user_from_session(session_id)
    return user
```

### **Key rules**

* Frontend = **static**
* Auth/session = **backend only**
* Use **cookies + `credentials: "include"`**
* SSG does NOT break auth logic

Frontend devs are now being replaced by AI. 3D frontend is still there,
but it requires huge knowledge of maths and physics.