import mongoose, { Schema, model, connect } from "mongoose";
import IOraculum from "../../../shared/Interfaces/IOraculum";
import quoteSchema from "./quoteSchema";
import commentSchema from "./commentSchema";
const oraculumSchema = new Schema<IOraculum>({
  name: { type: String, required: true },
  oraculumAuthor: { type: Schema.Types.ObjectId, ref: "user", required: true },
  createdAt: { type: Date, required: true },
  likes: { type: Number, required: true },
  comments: { type: [commentSchema.schema] },
  quotes: { type: [quoteSchema.schema], required: true },
});

const OraculumModel = model<IOraculum>("Oraculum", oraculumSchema);

export default OraculumModel;
export { oraculumSchema };
