import mongoose, { Schema } from "mongoose";
import IComment from "./IComment";
import IQuote from "./IQuote";
import IUser from "./IUser";

interface IOraculum {
  name: String;
  createdAt: Date;
  user: Schema.Types.ObjectId;
  quotes: [mongoose.Types.ObjectId];
  likes: number;
  comments: [mongoose.Types.ObjectId];
}

export default IOraculum;
