const http = require("http");
const fs = require("fs");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {

    let body = ""; 
    // get chunk as an arg => then add in body
    req.on("data", (chunk) => {body += chunk;}); // collect incoming data chunks
    req.on("end", () => { // once all data is received
      const parsed = qs.parse(body); // parse form data
      // parse means to take raw data (like a string) and convert it into a usable format (like an object).
      console.log("parsed: ", parsed); //parsed:  [Object: null prototype] { username: 'abcdefg' }
      const username = parsed.input; // extract username field
console.log(username);

      fs.writeFileSync("username.txt", username);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<h1>Username saved: ${username}</h1>`);
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`<form method="POST">
               <input name="input" placeholder="Enter username" />
               <button type="submit">Submit</button>
             </form>`);
  }
});

server.listen(3000);
