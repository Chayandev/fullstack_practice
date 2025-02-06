const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res) => {
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">submit</button></form>'
  );
});

router.post("/product", (req, res) => {
  const data = req.body;
  console.log(data);

  res.redirect("/");
});
module.exports = router;
