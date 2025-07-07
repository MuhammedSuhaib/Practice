You **must import** `fs` before using it in Node.js:

```js
const fs = require('fs'); // CommonJS
or
import fs from 'fs'; // ES Module
```

Without importing, `fs` won’t be recognized.
___

In Node.js, the `path` module helps you work with file and directory paths. You must import it first:

```js
const path = require('path');
```

### Common uses:

1. **Join paths**:

```js
const fullPath = path.join(__dirname, 'folder', 'file.txt');
```

2. **Get file extension**:

```js
const ext = path.extname('index.html'); // ".html"
```

3. **Get filename**:

```js
const base = path.basename('/folder/file.txt'); // "file.txt"
```

4. **Get directory name**:

```js
const dir = path.dirname('/folder/file.txt'); // "/folder"
```

5. **Resolve absolute path**:

```js
const abs = path.resolve('folder', 'file.txt'); // full path from current dir
```

It’s used a lot with `fs` for reading/writing files safely.
