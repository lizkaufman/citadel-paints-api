import express, { Request, Response } from "express";
import { Paint } from "../libs/IPaint";
import {
  getAllPaints,
  searchPaintsByName,
  searchPaintsByType,
  searchPaintsByColorGroup,
  addNewPaint,
  getPaintById,
  deletePaint,
  updatePaint,
} from "../models/paints";
import { connectToDatabase } from "../db/index";

connectToDatabase();

const paintsRouter = express.Router();

paintsRouter.get("/", async (req: Request, res: Response) => {
  let data: Paint[] | null = null;

  //search by paint name
  if (req.query.name !== undefined) {
    try {
      data = await searchPaintsByName(req.query.name as string);
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
    return res.json({
      success: true,
      message: `search by paint name: ${req.query.name}`,
      payload: data,
    });
  }

  //search by paint type
  if (req.query.type !== undefined) {
    try {
      data = await searchPaintsByType(req.query.type as string);
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
    return res.json({
      success: true,
      message: `search by paint type: ${req.query.type}`,
      payload: data,
    });
  }

  //search by color group
  if (req.query.colorGroup !== undefined) {
    try {
      data = await searchPaintsByColorGroup(req.query.colorGroup as string);
    } catch (err: any) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }
    return res.json({
      success: true,
      message: `search by color group: ${req.query.colorGroup}`,
      payload: data,
    });
  }

  //get all paints
  try {
    data = await getAllPaints();
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  res.json({ success: true, message: "all paints", payload: data });
});

paintsRouter.get("/:id", async (req: Request, res: Response) => {
  //get paint by id
  const { id } = req.params;
  let data = null;
  try {
    data = await getPaintById(id);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  res.json({
    success: true,
    message: `paint with id ${req.params.id}`,
    payload: data,
  });
});

paintsRouter.post("/", async (req: Request, res: Response) => {
  //post new paint
  const newPaint: Paint = req.body;
  let data = null;
  try {
    data = await addNewPaint(newPaint);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  res.status(201).json({
    success: true,
    message: `post paint ${newPaint.name}`,
    payload: data,
  });
});

paintsRouter.patch("/:id", async (req: Request, res: Response) => {
  //update paint
  const updatedPaintInfo: Paint = req.body;
  const { id } = req.params;
  let data = null;
  try {
    data = await updatePaint(id, updatedPaintInfo);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  res.status(201).json({
    success: true,
    message: `updated paint ${updatedPaintInfo.name}`,
    payload: data,
  });
});

paintsRouter.delete("/:id", async (req: Request, res: Response) => {
  //delete paint
  const { id } = req.params;
  let data = null;
  try {
    data = await deletePaint(id);
  } catch (err: any) {
    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
  res.json({
    success: true,
    message: `delete paint ${req.params.id}`,
    payload: data,
  });
});

export default paintsRouter;
