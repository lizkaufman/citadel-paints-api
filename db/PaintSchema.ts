import mongoose from "mongoose";

const PaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  colorGroup: { type: String, required: true },
});

const paintModel = mongoose.model("Paint", PaintSchema);

export default paintModel;
