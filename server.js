var express = require("express"),
  app = express();

app.get("/", function (req, res) {
  res.send("hello universe!");
});

console.log("server starting. available at http://localhost:3000");
app.listen(3000);
