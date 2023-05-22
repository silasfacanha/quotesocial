import IComment from "./IComment";
import IQuote from "./IQuote";
import IUser from "./IUser";
import mongoose from "mongoose";
interface IPost {
  _id: mongoose.Schema.Types.ObjectId;
  quote: IQuote;
  postText: string;
  createdAt: Date;
  postAuthor: IUser;
  likes: number;
  comments: IComment[];
}

export default IPost;
