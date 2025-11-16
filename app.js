const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let users = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello world!" });
});

app.get("/echo/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.post("/sum", (req, res) => {
  const numbers = req.body.numbers || [];
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;
  if (name && email) {
    users.push({ name, email });
    res.json({ msg: "User added" });
  } else {
    res.status(400).json({ msg: "Missing name or email" });
  }
});
app.get("/users", (req, res) => {
  res.status(201).json(users);
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
