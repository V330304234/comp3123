// This is a core module since it's provide by NODE


const http = require("node:http");

const SERVER_PORT = 3000;
const server = http.createServer((req, res) => {
    if(req.url === "/index" && req.method === "GET") {
        res.write("<h1>Welcome to the Index Page</h1>");
    } else if(req.url === "/about" && req.method === "GET") {
        res.write("<h1>Welcome to the About Page</h1>");
    } else if(req.url === '/hello' && req.method === "GET") {
          res.write("<h1>Hello World</h1>");
    } else if(req.url === '/student' && req.method === "POST") {
          res.write(JSON.stringify({name: "John Doe", age: 20}));
    } else {
        res.write("<h1>404 Not Found</h1>");
    }
  
    res.end();
});

server.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});