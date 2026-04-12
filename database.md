# Databases

There are a lot of types of databases.
We are only mentioning those we are familiar with.
We are learning SQL databases where we store data in table form.
In SQL, we have another type: PostgreSQL database.
IDs will be the primary key.
---
Sir Naeem showed us 2 ways of generating user IDs for students. One was like taking the length of DB, e.g.:
```python
Database = []
# My code here
studentID = len(Database) + 1  # I can also simply write len(Database); who cares if a student got id=0 ;)
```

The other way is professional and standard. Python offers us a lib called `uuid`.
UUID = Universally Unique Identifiers [https://youtu.be/w7mkOZmFtkI?si=10rV5UvAS5R3v6qd](https://youtu.be/w7mkOZmFtkI?si=10rV5UvAS5R3v6qd)
They are 8 versions of UUID, but normally we use uuid4, and use case is simple and same as FastAPI, e.g., import => instance => use.
```python
from uuid import uuid4
# Now make sure to create a string instance
studentID = str(uuid4())
# And just use it
```

To make any column unique (e.g., 'roll no'), we can also make that unique.
But it will not be our primary key. In PostgreSQL, we have a feature that allows us to make a column unique.
The primary key is the main ID that we normally use for CRUD operations.
CRUD with primary key is faster than CRUD with any other key (e.g., roll no).
Vector databases don't have primary keys because we don't do CRUD operations on them.

> **⚠️ Correction:** Vector DBs like Qdrant **DO have IDs** and **support CRUD operations**. The difference is they're optimized for **similarity/vector search**, not that they lack CRUD. You can create, read, update, and delete points (vectors) in a vector DB.

We don't connect the database directly to the frontend because hackers can inject malicious code.
So we create backend (APIs) that serves data to the frontend.
In the case of a restaurant meal analogy:
The backend serves the meal to the frontend.
But the backend can also be compromised if there is no security.
Vercel normally provides this security for the backend.


FastAPI = Web framework to create APIs
Uvicorn = Our server
Pydantic = Data validation, especially for SQL injection

> **⚠️ Correction:** Pydantic validates data types and formats, but it does **NOT prevent SQL injection**. SQL injection is prevented by using **parameterized queries** or **ORMs** (like SQLModel) which automatically escape inputs.

PostgreSQL is also free and can be used locally, but the process is a bit difficult, so
we are using services like Neon.

These database services save us from this difficult process.
Here, these services also provide some extra features for which they charge users.
Neon is a hosted version of PostgreSQL.

SQLModel is also used to do validation, same as Pydantic, but it also creates the schema of tables.
SQLite doesn't need any installation; it just works locally and is used for minor data (e.g., chat history of a bot).
Advantages: Fast and quick start (e.g., demos)
Disadvantages: No migration, can't share SQLite database, etc.
VARCHAR means string.
> VARCHAR = TEXT = STRING
DBMS is a layer over the database. All the actions we perform are first handled by that DBMS layer, then it does things in the database.

In which form do VectorDBs (like Qdrant) store data? Embeddings
In which form do SQLDBs (like PostgreSQL) store data? Tables
In which form do non-relational databases (like Firebase/Supabase/MongoDB) store data? Objects

Add a limit of 50 characters in the name field to prevent injections. Also use `.toLowerCase()`.

To use a database, we need to learn the languages of databases. So to skip this step, we use ORM (Object-Relational Mappings).

We have an ORM called SQLAlchemy. Now we are not using SQLAlchemy
because we have SQLModel that does 2 jobs: 1) ORM, 2) Pydantic validation.
This step is not like increasing our work because we are already used to Pydantic, so it is the same. Just replace the BaseModel with SQLModel and also add `table = True` check.

Now we pass `field(primary_key=True)` while creating ID in schemas.
We need to connect the database to SQLModel. For this, we create an engine and create a session.
Then add, commit, refresh.


CURL = Client URL. It is used to transfer or receive data, so we can also use it to download packages like uv, etc.
`get('/')` - Don't need to type `/` when visiting. At that, it will auto work at `localhost:3000`. No need to add `/` at the end.

