const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users") {
    return res.write(
      "<html><head><title>User Details Page</title></head><body><ul><li>User-1</li><li>User-2</li><li>User-3</li></ul></body></html>"
    );
  }
  if (req.url === "/create-user" && req.method === "POST") {
    let body = "";

    // Collect data from the request
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Once all data is received
    req.on("end", () => {
      const parsedData = new URLSearchParams(body);
      console.log(parsedData.get("username")); // Logs the input value to the console

     // res.writeHead(302, { Location: "/" }); // Redirect back to home
      return res.end();
    });

    return;
  }
  res.write(
    "<html><head><title>Form page</title></head><body><form action='/create-user' method='post'><input type='text' name='username'/><button type='submit'>Submit</button></form></body></html>"
  );
  res.end();
});

server.listen(3000, (req, res) => {
  console.log("Server is listening on port: 3000");
});
