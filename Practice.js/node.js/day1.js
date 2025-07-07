const http = require('http'); // imported http

// http.createServer() creates the server.
// It takes a callback function that runs on every request.
// console.log(req) print every incoming request.
// ---------------------------dummy server ------------------------------------//
http.createServer(()=>{})// it does nothing

// ---------------------------listening server ------------------------------------//
let port2= 3000

const server2 = http.createServer((req)=>console.log(req,`listening to ${port2}`))
// 📡 Start Listening to port 3000
server2.listen(port2);

// ---------------------------listening and responding server ------------------------------------//

let port3= 3004

const server3 = http.createServer((req,rep)=>console.log(req,`listening responding to ${port3}`),)
// 📡 Start Listening to port 3000
server3.listen(port3);