import express, { Request, Response } from "express";
import path from "path";
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));
app.get("/hello", (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  res.json({ id });
});
app.post("/sum", (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers;
  if (!Array.isArray(numbers)) return res.status(400).json({ error: "Numbers array required" });
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  res.json({ sum });
});
type TUser = {
  name: string;
  email: string;
};
const users: TUser[] = [];
app.post("/users", (req: Request, res: Response) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Vaadin enemmän" });
  const newUser: TUser = { name, email };
  users.push(newUser);
  res.json({ message: "User added" });
});

app.get("/users", (req: Request, res: Response) => {
  res.status(201).json(users);
});
app.get("/", (req: Request, res: Response) => {
  res.send("Server is running");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
