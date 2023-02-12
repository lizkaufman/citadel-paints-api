import express, { Request, Response } from "express";
import { Paint } from "../libs/IPaint";
import {
  getAllPaints,
  searchPaintsByName,
  searchPaintsByType,
  searchPaintsByColorGroup,
} from "../models/paints";

const paintsRouter = express.Router();

paintsRouter.get("/:id", async (req: Request, res: Response) => {
  console.log(req.path);
  //search by paint name
  if (req.query.name !== undefined) {
    const data: Paint[] = await searchPaintsByName(req.query.name as string);
    res.json({
      success: true,
      message: `search by paint name: ${req.query.name}`,
      payload: data,
    });
    return;
  }

  //search by paint type
  if (req.query.type !== undefined) {
    const data: Paint[] = await searchPaintsByType(req.query.type as string);
    res.json({
      success: true,
      message: `search by paint type: ${req.query.type}`,
      payload: data,
    });
    return;
  }

  //search by color group
  if (req.query.colorGroup !== undefined) {
    const data: Paint[] = await searchPaintsByColorGroup(
      req.query.colorGroup as string
    );
    res.json({
      success: true,
      message: `search by color group: ${req.query.colorGroup}`,
      payload: data,
    });
    return;
  }

  //get all paints
  const data = await getAllPaints();
  res.json({ success: true, message: "all paints", payload: data });
});

// paintsRouter.get("/:id", async (req: Request, res: Response) => {
//   //get paint by id
//   res.json({ success: true, payload: `paint with id ${req.params.id}` });
// });

// paintsRouter.post("/", async (req: Request, res: Response) => {
//   //post new paint
//   const newPaint: Paint = req.body;
//   res.json({ success: true, payload: `post paint ${newPaint.name}` });
// });

// paintsRouter.patch("/:id", async (req: Request, res: Response) => {
//   //update paint
//   const updatedPaint: Paint = req.body;
//   res.json({ success: true, payload: `update paint ${updatedPaint.name}` });
// });

// paintsRouter.delete("/:id", async (req: Request, res: Response) => {
//   //delete paint
//   res.json({ success: true, payload: `delete paint ${req.params.id}` });
// });

export default paintsRouter;
