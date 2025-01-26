import express from "express";
//import 'dotenv/config'
const app = express();
const PORT = process.env.PORT || 5000;
//app.use()

app.get("/", (req, res) => {
 return res.send("<h1>Hello Express.js</h1>");
});

app.listen(PORT, () => {
  console.log("Server is listening on PORT", PORT);
});
