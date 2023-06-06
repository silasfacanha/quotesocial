import { Schema } from "mongoose";
import IUser from "./IUser";

interface IQuote {
  text: string;
  author: string;
  source: string;
  user: Schema.Types.ObjectId;
  createdAt: Date;
}

export default IQuote;
