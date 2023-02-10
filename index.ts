import express, { Express, Request, Response } from "express";
import paintsRouter from "./routes/paints";

const app: Express = express();
const port = process.env.PORT;

app.get("/paints", paintsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server running");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
