import { Schema, model } from "mongoose";
import IPost from "./IPost";
import IUser from "./IUser";

interface IComment {
  commentedPost: Schema.Types.ObjectId;
  user: Schema.Types.ObjectId;
  text: string;
  likes: Number;
  createdAt: Date;
}

export default IComment;
