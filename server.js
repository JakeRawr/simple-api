var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.json({});
});

console.log("server starting. available at http://localhost:3000");
app.listen(3000);
