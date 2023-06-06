import mongoose, { Schema, model, connect } from "mongoose";
import IOraculum from "../../../shared/Interfaces/IOraculum";

const oraculumSchema = new Schema<IOraculum>({
  name: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  createdAt: { type: Date, required: true },
  likes: { type: Number, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
  quotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quote" }],
});

const OraculumModel = model<IOraculum>("Oraculum", oraculumSchema);

export default OraculumModel;
export { oraculumSchema };
