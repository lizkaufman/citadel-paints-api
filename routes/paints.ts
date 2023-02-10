import express, { Request, Response } from "express";
import { Paint } from "../libs/IPaint";

const paintsRouter = express.Router();

paintsRouter.get("/", async (req: Request, res: Response) => {
  //search by paint name
  if (req.query.name !== undefined) {
    return res.json({
      success: true,
      payload: `search by paint name: ${req.query.name}`,
    });
  }

  //search by paint type
  if (req.query.type !== undefined) {
    return res.json({
      success: true,
      payload: `search by paint type: ${req.query.type}`,
    });
  }

  //search by color group
  if (req.query.colorGroup !== undefined) {
    return res.json({
      success: true,
      payload: `search by color group: ${req.query.colorGroup}`,
    });
  }

  //get all paints
  res.json({ success: true, payload: "all paints" });
});

paintsRouter.get("/:id", async (req: Request, res: Response) => {
  //get paint by id
  res.json({ success: true, payload: `paint with id ${req.params.id}` });
});

paintsRouter.post("/", async (req: Request, res: Response) => {
  //post new paint
  const newPaint: Paint = req.body;
  res.json({ success: true, payload: `post paint ${newPaint.name}` });
});

paintsRouter.patch("/:id", async (req: Request, res: Response) => {
  //update paint
  const updatedPaint: Paint = req.body;
  res.json({ success: true, payload: `update paint ${updatedPaint.name}` });
});

paintsRouter.delete("/:id", async (req: Request, res: Response) => {
  //delete paint
  res.json({ success: true, payload: `delete paint ${req.params.id}` });
});

export default paintsRouter;
