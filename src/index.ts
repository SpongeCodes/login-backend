import express, { Express, Request, Response } from "express";

const port = 3000;

const app = express();

// TODO
// write controllers to handle backend logic for registering and authentication

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log("listening..");
});
