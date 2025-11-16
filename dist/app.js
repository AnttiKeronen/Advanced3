"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/hello", (req, res) => {
    res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req, res) => {
    res.json({ id: req.params.id });
});
app.post("/sum", (req, res) => {
    const nums = req.body.numbers;
    const sum = nums.reduce((a, b) => a + b, 0);
    res.json({ sum });
});
const users = [];
app.use(express_1.default.static(path_1.default.join(__dirname, "../public")));
app.post("/users", (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json({ msg: "User successfully added" });
});
app.get("/users", (req, res) => {
    res.status(201).json(users);
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
