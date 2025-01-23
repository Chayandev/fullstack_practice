import express from "express";

const app = express();

const PORT = process.env.PORt | 5000;

app.get("/", (req, res) => {
  return res.json({
    status: "Success",
    msg: "Hello form Express Server",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


/*
* Node js version: v22.11.0
*NPM installed version : 10.9.0
*/