# Reading and Writing Data in Pandas DataFrames

Previously we accessed subsets of a DataFrame. Here we learn how to **load data into** a DataFrame and **save it to disk**.

> The examples use a file called `sample_sales.csv`. If you don't have it, create it using the [Appendix](#appendix-create-the-sample-file) at the end.

## How to Read the Code Diagrams

Every example labels each part like this:

- **pandas** = the library, **`pd`** = its nickname (from `import pandas as pd`)
- **`df`** = a variable name *we chose*. It holds the table (a DataFrame). You can name it anything.
- **function** = called on the library: `pd.something()`. Use it when you don't have a table yet.
- **method** = called on the table: `df.something()`. Use it when you already have a table.
- **text** = anything in quotes, like file names.

---

## 1. Reading Data

### `read_csv`: comma-separated files

```python
import pandas as pd                 # pandas = library | pd = its nickname

df = pd.read_csv("sample_sales.csv")
#^   ^  ^        ^
#|   |  |        └─ "sample_sales.csv" = file to read (text)
#|   |  └────────── read_csv = function inside pandas
#|   └───────────── pd = the pandas library
#└───────────────── df = our variable (will hold the table)
```

Optional parameters (extra settings inside the brackets):

| Parameter | Purpose |
| --- | --- |
| `parse_dates` | Read given column(s) as datetime |
| `usecols` | Read only specific columns |
| `nrows` | Read only the first *n* rows |
| `dtype` | Set column types (saves memory) |

```python
df = pd.read_csv(                                   # df = variable, pd.read_csv = function
    "sample_sales.csv",                             # file to read
    parse_dates=["date"],                           # read "date" column as datetime
    usecols=["date", "store", "product", "sales"],  # read only these 4 columns
    nrows=5,                                        # read only first 5 rows
    dtype={"product": "category"},                  # "product" column stored as category (less memory)
)
df.info()   # df = variable | info = method | shows rows, columns, data types
```

### `read_excel`: Microsoft Excel files

Needs an extra library (install once):

```bash
pip install openpyxl
```

```python
df = pd.read_excel("output.xlsx", sheet_name="Sheet1")
#^   ^  ^         ^             ^
#|   |  |         |             └─ sheet_name = which sheet to read (Excel files can have many)
#|   |  |         └─ "output.xlsx" = file to read (text)
#|   |  └─ read_excel = function inside pandas
#|   └─ pd = the pandas library
#└─ df = our variable
```

### `read_json`: JSON files

```python
df = pd.read_json("output.json")
#^   ^  ^         ^
#|   |  |         └─ "output.json" = file to read (text)
#|   |  └─ read_json = function inside pandas
#|   └─ pd = the pandas library
#└─ df = our variable
```

---

## 2. Writing Data

### `to_csv`

```python
df.to_csv("output.csv", index=False)
#^  ^      ^            ^
#|  |      |            └─ index=False = don't save row numbers
#|  |      └─ "output.csv" = file to create (text)
#|  └─ to_csv = method of the table
#└─ df = our variable (the table)
```

### `to_excel`

```python
df.to_excel("output.xlsx", index=False)
#^  ^        ^              ^
#|  |        |              └─ index=False = don't save row numbers
#|  |        └─ "output.xlsx" = file to create (text)
#|  └─ to_excel = method of the table
#└─ df = our variable (the table)
```

### `to_json`

```python
df.to_json("output.json")
#^  ^       ^
#|  |       └─ "output.json" = file to create (text)
#|  └─ to_json = method of the table
#└─ df = our variable (the table)
```

### The `index` parameter

The **index** is the left-most row-number column (0, 1, 2, ...) that pandas adds automatically, like a serial number (S/No) column.

- `index=False`: the index is **not** written to disk. The file contains only your real columns.
- `index=True`: the index is saved as an extra, unnamed first column along with the data.

---

## 3. Saving Memory and Compute on Large Datasets

When reading large files, load only what you need:

- `dtype`: specify column types.
- `usecols`: read only the listed columns.
- `nrows`: read only some rows.
- `parse_dates`: treat a column as datetime for date manipulation.

---

## 4. Which Format Should You Export To?

Choose CSV, Excel or JSON based on client requirements, ease of sharing and interoperability.

---

## 5. Full Example: Read, Clean, Save

```python
import pandas as pd                       # pandas = library | pd = its nickname

# 1. Read
df = pd.read_csv(                         # function on pd -> creates the table, stored in df
    "sample_sales.csv",                   # file to read
    usecols=["date", "store", "product", "sales"],  # only these 4 columns
    parse_dates=["date"],                 # "date" column as datetime
)
print(df.shape)                           # df.shape = (rows, columns) -> (6, 4)

# 2. Clean: keep only rows where sales are not zero
df = df[df["sales"] != 0]                 # df[...] = filter rows | df["sales"] != 0 = True where sales is not 0
print(df.shape)                           # (4, 4) -> the two zero-sales rows are gone

# 3. Save
df.to_excel("sales_clean.xlsx", index=False)   # method on df -> creates Excel file, no row numbers
df.to_json("sales_clean.json")                 # method on df -> creates JSON file
```

---

## 6. Public Datasets for Practice

Kaggle (most popular), UCI Machine Learning Repository, Google Cloud public datasets, and some Pakistan-specific datasets.

---

## Summary

| Task | Read (function on `pd`) | Write (method on `df`) |
| --- | --- | --- |
| CSV | `pd.read_csv()` | `df.to_csv()` |
| Excel | `pd.read_excel()` | `df.to_excel()` |
| JSON | `pd.read_json()` | `df.to_json()` |

---

## Appendix: Create the Sample File

A small made-up retail sales table (6 rows). Columns: `date`, `store`, `product`, `category`, `sales` (units sold), `price`. Two rows have `sales = 0` for the cleaning example.

```python
import pandas as pd

pd.DataFrame({                                   # pd.DataFrame = build a table from a dictionary
    "date":     ["2024-01-01", "2024-01-01", "2024-01-02", "2024-01-02", "2024-01-03", "2024-01-03"],
    "store":    ["North", "South", "North", "South", "North", "South"],
    "product":  ["Pen", "Pen", "Notebook", "Notebook", "Pen", "Notebook"],
    "category": ["Stationery"] * 6,
    "sales":    [10, 0, 5, 8, 0, 12],
    "price":    [1.5, 1.5, 3.0, 3.0, 1.5, 3.0],
}).to_csv("sample_sales.csv", index=False)       # .to_csv = method -> saves the table as a CSV file
```
