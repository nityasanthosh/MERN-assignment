const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json()); // Middleware to parse JSON requests

// GET /welcome
app.get("/welcome", (req, res) => {
  res.json({ message: "Welcome to Express!" });
});

// In-memory array to store users
let users = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Doe", email: "jane@example.com" },
];

// GET /users
app.get("/users", (req, res) => {
  res.json(users);
});

// POST /users
app.post("/users", (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id
app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const index = users.findIndex((user) => user.id == id);
  if (index !== -1) {
    users[index] = { id: Number(id), ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: "User not found" });
  }
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id != id);
  res.json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
