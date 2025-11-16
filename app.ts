import express, { Request, Response } from "express";
import path from "path";
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.get("/hello", (req: Request, res: Response) => {
  res.json({ msg: "Hello world!" });
});
app.get("/echo/:id", (req: Request, res: Response) => {
  res.json({ id: req.params.id });
});
app.post("/sum", (req: Request, res: Response) => {
  const nums: number[] = req.body.numbers;
  const sum = nums.reduce((a, b) => a + b, 0);
  res.json({ sum });
});
type TUser = {
  name: string;
  email: string;
};
const users: TUser[] = [];
app.post("/users", (req: Request, res: Response) => {
  const newUser = req.body as TUser;
  users.push(newUser);
  res.json({ msg: "Added" });
});
app.get("/users", (req: Request, res: Response) => {
  res.status(201).json(users);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


