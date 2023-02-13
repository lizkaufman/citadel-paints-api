import { connectToDatabase } from "..";
import { paints } from "./data";
import paintModel from "../PaintSchema";

async function populatePaints() {
  await connectToDatabase();
  const deletedCount = await paintModel.deleteMany({});
  console.log(deletedCount);
}

populatePaints();
