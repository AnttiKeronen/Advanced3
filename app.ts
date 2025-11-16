import express, { Request, Response } from "express";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/hello", (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});

app.get("/echo/:id", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});

app.post("/sum", (req: Request, res: Response) => {
  const numbers: number[] = req.body.numbers || [];
  const sum = numbers.reduce((a, b) => a + b, 0);
  res.json({ sum });
});

type TUser = { name: string; email: string };
const users: TUser[] = [];

app.post("/users", (req: Request, res: Response) => {
  const newUser = req.body as TUser;
  users.push(newUser);
  res.json({ msg: "User successfully added" });
});

app.get("/users", (req: Request, res: Response) => {
  res.status(201).json(users);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



