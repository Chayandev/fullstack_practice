const http = require("http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h1> Hello from HTTP server Home </h1>");
    res.end();
  }
  if (req.url === "/contact") {
    res.write("Contact me in Email Id:hailchiku@gmail.com,ph.NO-NaN");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});


//NodeJs web server don't restart automatically
//-- To solve the problem we use thrid party library
//Nodemone