import { Paint } from "../libs/IPaint";
import { paints } from "../db/data";
import paintModel from "../db/PaintSchema";

//TODO:

export async function getAllPaints(): Promise<Paint[]> {
  const paintsData = await paintModel.find({});
  return paintsData;
}

//TODO: Refactor to allow multiple search queries in one request (e.g. name and type)

export async function searchPaintsByName(name: string): Promise<Paint[]> {
  //FIXME:
  // return paints.filter((paint) =>
  //   paint.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  // );
  const paintsData = await paintModel.find({ name: /name/i });
  return paintsData;
}

export async function searchPaintsByType(type: string): Promise<Paint[]> {
  //FIXME:
  return paints.filter((paint) =>
    paint.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
  );
}

export async function searchPaintsByColorGroup(
  colorGroup: string
): Promise<Paint[]> {
  //FIXME:
  return paints.filter((paint) =>
    paint.colorGroup
      .toLocaleLowerCase()
      .includes(colorGroup.toLocaleLowerCase())
  );
}

export async function getPaintById(id: string) {
  const paintsData = await paintModel.findById(id);
  return paintsData;
}

export async function addNewPaint(paintToAdd: Paint) {
  const newPaint = new paintModel(paintToAdd);
  await newPaint.save();
  return newPaint;
}

export async function updatePaint(id: string, updatedPaintInfo: Paint) {
  const updatedPaint = await paintModel.findByIdAndUpdate(id, updatedPaintInfo);
  return updatedPaint;
}

export async function deletePaint(id: string) {
  const deletedPaint = await paintModel.findByIdAndDelete(id);
  return deletedPaint;
}
