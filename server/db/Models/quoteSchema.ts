import { Schema, model, connect } from "mongoose";
import IQuote from "../../../shared/Interfaces/IQuote";

const quoteSchema = new Schema<IQuote>({
  text: { type: String, required: true },
  author: { type: String, required: true },
  source: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const quoteModel = model<IQuote>("Quote", quoteSchema);

export default quoteModel;
export { quoteSchema };
