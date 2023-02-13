import { connectToDatabase } from "..";
import { paints } from "./data";
import paintModel from "../PaintSchema";

async function populatePaints() {
  await connectToDatabase();
  const addedPaints: any = await paintModel.insertMany(paints);
  console.log("added", addedPaints.length, "paints");
}

populatePaints();
