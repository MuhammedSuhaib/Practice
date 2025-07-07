const fs = require("fs"); // CommonJS
// console.log('fs: ', fs)
console.log('on: ')
fs.writeFileSync('output/Synchronous.txt', 'Synchronous write'); // Synchronous write
console.log('off: ')

// ----------------------------Write----------------------------------//
// writeFile('path','wht to write', 'a callback func')
fs.writeFile("output/.txt", " Asynchronous write", () => console.log("done")); // Asynchronous write

// ----------------------------write in existing file----------------------------------//

fs.appendFile("output/.txt", "\n \n 🍕 ☕🍵🧉🍽", () => console.log("append done: "));

// ----------------------------read----------------------------------//
fs.readFile("output/.txt", (err, data) =>console.log(err == null ? "non err" : null, data));//unreadable
fs.readFile("output/.txt", (err, data) =>console.log(err == null ? "non err" : null,'\n', data.toString()));//readable