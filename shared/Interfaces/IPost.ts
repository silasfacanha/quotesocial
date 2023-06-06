import IComment from "./IComment";
import IQuote from "./IQuote";
import IUser from "./IUser";
import mongoose, { Schema } from "mongoose";
interface IPost {
  _id: mongoose.Schema.Types.ObjectId;
  quote: mongoose.Schema.Types.ObjectId;
  postText: string;
  createdAt: Date;
  user: mongoose.Schema.Types.ObjectId;
  likes: number;
  comments: [mongoose.Types.ObjectId];
}

export default IPost;
