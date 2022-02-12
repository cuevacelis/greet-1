const express = require("express");
const app = express();

app.get("/", (req, res) => {
  const name = req.query.nombre;
  res.send(name);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
