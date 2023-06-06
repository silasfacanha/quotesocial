import { Schema, model, connect } from "mongoose";
import IQuote from "../../../shared/Interfaces/IQuote";

const quoteSchema = new Schema<IQuote>({
  text: { type: String, required: true },
  author: { type: String, required: true },
  source: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  createdAt: { type: Date, required: true },
});

const QuoteModel = model<IQuote>("Quote", quoteSchema);

export default QuoteModel;
export { quoteSchema };
