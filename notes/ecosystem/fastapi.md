# ⚡ FastAPI

Frontend always requests, and backend responds to that request. But this request never reaches directly to the database; it only reaches the server, then server to backend, then backend responds, then that response goes to the server, and the server sends that response to the frontend.

*FastAPI is used for creating REST APIs.*

```text
FASTAPI = Starlette + Pydantic
```

- **FastAPI:** Web framework to create APIs.
- **Uvicorn:** The **ASGI** server that runs the FastAPI application.
- **ASGI (Asynchronous Server Gateway Interface):** The modern standard for Python asynchronous web apps/servers (successor to WSGI). It allows handling multiple concurrent connections, WebSockets, and async I/O.
- **Pydantic:** Handles input schema and data validation (SQL injection is prevented by parameterized queries / ORMs like SQLModel/SQLAlchemy).

---

## ⁉ Why FastAPI?

- **FastAPI is very fast**, easy, short, robust.
- Fast to code, built on top of type hints, type annotations, and documentation. Those who need to read docs can just read quick start, and the rest of the docstrings will speak for themselves.
- Fewer bugs.
- Autocomplete everywhere.
- Companies prefer FastAPI.
- Built-in Swagger testing UI (`/docs`). Alternatively, it also has `/redoc`.
- FastAPI supports both synchronous (`def`) and asynchronous (`async def`) route handlers depending on how you define them.

---

## Types & Autocomplete

Must remember: Datatypes determine the type of value a variable can hold and the operations that can be performed on it.

FastAPI is like TypeScript that gives auto-complete IntelliSense.
So if I set something as string in type and I want to apply any method of array on that thing, I may get confused why I'm not getting xyz method in dropdown. That's because I set that as str, and it's only giving str methods. To use both methods, we have to use `|` sign, e.g., `Name: str | list[str]`.

- Here `|` means "or".

---

## 📁 Serving Static Files

We can also serve static assets in FastAPI, like in Next.js where whatever we put in `public/` becomes public by using:

```python
from fastapi.staticfiles import StaticFiles

app.mount("/static", StaticFiles(directory="static"), name="static")
```

- The first `"/static"` refers to the sub-path this "sub-application" will be "mounted" on. Any path that starts with `"/static"` will be handled by it.
- The `directory="static"` refers to the name of the directory that contains your static files.
- The `name="static"` gives it a name that can be used internally by **FastAPI**.
- **Mounting** means adding a complete "independent" application in a specific path that takes care of handling all the sub-paths.

---

## ⚡ Quick Start

```python
from fastapi import FastAPI

# Create instance
# Decorate the function with that instance following the request type (get, put, patch, delete, etc.) and route name
```

> Try to take POST from browser by using the `input()` / `prompt()` method.

---

## 🔍 Query Parameters vs Request Body

Query parameters are those which are visible in URL after `?`. We use it when we have 1 or 2 params, but if we have more, then we have to use Pydantic. At that time, the URL remains clean, but now the premade fancy input bars on Swagger are no longer there. Now we just got the same model, and we have to alter the values by editing the text, e.g., we will get a `{"name": "string"}` instead of input fields next to name key. So we have to edit it like `{"name": "Suhaib"}`.

---

## 🛣️ Routes & Path Parameters

Get all route is simple. But get specific uses path parameters.

Path parameters work like dynamic routes in Next.js, or I can say it's the same.
Just take whatever the slug is in the def of the Python function, not in the line where we define route. 😅

And because it's query params, so it's auto included in their URL. So just point the route where the... I think too hard, but I have no idea how it's working behind the scene, but it's like Next.js dynamic route, and we're showing dynamic info in dynamic route.
Maybe it's inverse: user enters ID/name, and we pick it and route user to `/{id}`.
Now if I have till yet just typed the username/id in address bar, nothing else.
If I press enter in address bar, it will show me either "this site can't be reached" or if it's like `<mywebsite.com>/{id}`, so it'll give 404 page not found. So I have to create the page for that. I know I'm like a hacker; pasted the user input in their address bar. Just grab that input because we know we can grab URL, etc., and use it in the def to write.

### CRUD Summary

- **POST:** When we call that def with req params, Swagger is doing it for us. Use that to do whatever, append it to DB, and return a msg (working as the response of that request).
- **PUT:** Grab the ID and let the user update any info except ID.
- **DELETE:** Grab what to delete and `.remove` from whatever DB, etc.

> HTTP PUT request is used to replace and update the entire resource or document, while the PATCH request only updates the specific parts of that document. When working with APIs, figuring out the right way to update resources can be tricky.

---

## ⚙️ Middleware, Events & Advanced Concepts

### ⏱️ Rate Limiting

If we're applying rate limit on both globally in app instance of FastAPI and on an endpoint, so endpoint's defined rate limit will override and win.

### 🔄 Lifecycle Events

Events use lifecycle events to add some functionality at start and end of server. Same as React hooks.

> Hooks are functions that let you "hook into" React state and lifecycle features from function components. Hooks don't work inside classes — they let you use React without classes. (We don't recommend rewriting your existing components overnight, but you can start using Hooks in the new ones if you'd like.)

### 📝 Logging & State

```python
import logging

# Call logging.basicConfig()
# And pass logging configs and formats here
# Then save that in an instance, normally named logger
logger = logging.getLogger(__name__)
```

- Levels: `info`, `debug`, `error`.
- Add logs to middleware instead of adding to every endpoint because every request has to pass through middleware first.
- Save logs in Sentry or in a database or a local file (use handler in `logging.basicConfig()`).
- It'll only save in file, not show on terminal.
- Pass state across the app through context manager:

```python
app.state.config
app.state.engine
```

### 🛡️ Transactions & Background Tasks

- **Exception Rollback:** If I withdraw 500 PKR and turn WiFi off to avoid the calculation of deduction, so it'll rollback and don't withdraw money until reduction is done.
- **Background Tasks:** For long-running tasks to keep running in the background, so I don't need a loader while waiting to update DB and UI in todo app.
- **Slugify:** Converts strings into slugs for URLs, removing unsupported characters with meaningful URL-friendly elements.

---

## 💡 Quick Tips & Tooling

- **`get('/')`:** Don't need to type `/` when visiting in browser or client. It will automatically work at `localhost:3000` (or `localhost:8000`) without typing `/` at the end.
- **cURL:** Client URL tool used to transfer or receive data over network protocols; also used in command line to download packages or test API endpoints directly.
