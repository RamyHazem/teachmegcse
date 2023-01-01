const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("test");
});

app.get("/api", (req, res) => {
  res.json({
    subjects: ["Math", "English", "Biology", "Chemistry", "Physics"],
  });
});

app.get("/papers", (req, res) => {
  res.json("test");
});

app.listen(5000, () => console.log(`Server started on port 5000`));
