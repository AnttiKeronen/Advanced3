"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req, res) => {
    const id = req.params.id;
    res.json({ id });
});
app.post("/sum", (req, res) => {
    const numbers = req.body.numbers;
    if (!Array.isArray(numbers))
        return res.status(400).json({ error: "Numbers array required" });
    const sum = numbers.reduce((acc, n) => acc + n, 0);
    res.json({ sum });
});
const users = [];
app.post("/users", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email)
        return res.status(400).json({ error: "Vaadin enemmän" });
    const newUser = { name, email };
    users.push(newUser);
    res.json({ message: "User added" });
});
app.get("/users", (req, res) => {
    res.status(201).json(users);
});
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
