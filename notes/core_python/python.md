# Python Evolution & Core Notes

## 📜 Python Evolution Timeline

- **1843:** **Ada Lovelace** writes the first algorithm.
- **1950s–1960s:** Computers use **Assembly** or **FORTRAN**.
- **1964:** **BASIC** is created for ease of use.
- **1970:** **Pascal** introduces rigid structure.
- **1975–1980:** **CWI** researchers seek an "easy language for non-programmers".
- **1980s:** **ABC** is built by **CWI**, introducing **indentation**. (Idea was to adopt ease of BASIC and structure of Pascal)
  > **ABC** was developed at **CWI** (Centrum Wiskunde & Informatica) in the Netherlands. The primary designers were **Leo Geurts**, **Lambert Meertens** (He was also the mentor of Guido), and **Steven Pemberton**. **Guido van Rossum** also worked on the ABC team for several years before using those lessons to create Python.
- **1989–1991:** **Guido van Rossum** starts **Python** using ABC's syntax (e.g., `indentation` and `>>>`).
- **2004:** **Holger Krekel** creates **pytest** (originally as `py.test`) and the **PyPy** project using **RPython** (Restricted Python).
  > **pytest & PyPy**: PyPy team wanted to make Python fast by using complex compiler technology (JIT). But Guido historically preferred to keep it simple and readable. While he respects them as part of the ecosystem, he did not build or maintain them.
- **2005–2012:** Guido at **Google** scales Python; **Jukka Lehtosalo** starts **mypy** (2012).
- **2013–2014:** Guido joins **Dropbox** and the **mypy** project to bring typing to Python.
- **2015:** **Python 3.5** is released, officially supporting **Type Hints (PEP 484)**.
- **2018:** Guido resigns as leader after the "Walrus Operator" conflict.
- **2019:** Retired from Dropbox and joined **Steering Council** for a year.
- **2020–2026:** Guido joins **Microsoft**.

---

### Bytes vs Bytearray

Once converted to bytes, we can't change it, but in `bytearray` we can change.

> **⚠️ Correction:** `bytes` is **immutable** (can't be modified after creation), while `bytearray` is **mutable** (can be modified). Both store sequences of bytes (0-255 values).

---

### String Join

We can't use `.join()` on a list directly, but can on strings. So little brain can do the job like:

```python
# Instead of list.join(), use:
" ".join(["hello", "world"])  # "hello world"
```

---

### Loop Control

`continue` is used to skip that iteration in a loop.

---

### File Handling

We can also read line by line using the `readline()` function.
The line comes in an index of array.
If we forget to close the file, so....
To overcome this issue, we have the `with` keyword: it auto-closes the file as we go out of the block of code (indentation).

`.read()` to read only, same for `.write()`, but if we want to read & write at the same time, so:
`r+` or `w+`
`w+` can also create, but `r+` only reads & writes.
And read starts from where you left, so we have to be in such a position like something is written after our cursor, so
we use `.seek()` function. Here we pass line number (e.g., index number of array)
from where to start reading, like `.seek(0)`.

> **⚠️ Correction:** `.seek()` takes a **byte offset**, not a line number. `.seek(0)` moves cursor to the beginning of the file. For line-based seeking, you need to read line by line or calculate byte positions.

---

### Modules

No need to export modules in Python.
We have a var `__name__`; it is used to check our file name.

---

### Assert

`assert` — here we give what output should be.
`assert` is a reserved keyword.

```python
assert condition, "error message if false"
```

---

### CPython & mypy

- **CPython** — The standard Python implementation written in C.
- **mypy** — To add type support in Python.

---

### Testing

For testing:

- Create a `test` directory.
- `test_app.py` inside that test folder.
- Also in function name, write `test_main()`.
- There is a lib `pytest` to test; install it at once for all.
- Now run `pytest`; it will show if assert shows errors.
