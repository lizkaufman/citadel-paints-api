import express, { Express, NextFunction, Request, Response } from "express";
import paintsRouter from "./routes/paints";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.use("/paints", paintsRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server running");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
