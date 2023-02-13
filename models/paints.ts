import { Paint } from "../libs/IPaint";
import { paints } from "../db/data";

export async function getAllPaints(): Promise<Paint[]> {
  return paints;
}

export async function searchPaintsByName(name: string): Promise<Paint[]> {
  return paints.filter((paint) =>
    paint.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );
}

export async function searchPaintsByType(type: string): Promise<Paint[]> {
  return paints.filter((paint) =>
    paint.type.toLocaleLowerCase().includes(type.toLocaleLowerCase())
  );
}

export async function searchPaintsByColorGroup(
  colorGroup: string
): Promise<Paint[]> {
  return paints.filter((paint) =>
    paint.colorGroup
      .toLocaleLowerCase()
      .includes(colorGroup.toLocaleLowerCase())
  );
}

//TODO: Sort this out when adding in the proper database rather reading from the file!
export async function getPaintById(id: number) {}
