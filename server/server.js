const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["1", "2", "3"] });
});

app.get("/papers", (req, res) => {
  res.json("test");
});

app.listen(5000, () => console.log(`Server started on port 5000`));
