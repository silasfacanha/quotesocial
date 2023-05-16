import mongoose, { Schema, model, connect } from "mongoose";
import IOraculum from "../../../shared/Interfaces/IOraculum";
import quoteSchema from "./quoteSchema";
const oraculumSchema = new Schema<IOraculum>({
  name: { type: String, required: true },
  createdAt: { type: Date, required: true },
  quotes: { type: [quoteSchema], required: true },
});

const oraculumModel = model<IOraculum>("Oraculum", oraculumSchema);

export default oraculumModel;
export { oraculumSchema };
