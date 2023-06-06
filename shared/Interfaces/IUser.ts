import mongoose, { Schema } from "mongoose";
import IOraculum from "./IOraculum";
import IPost from "./IPost";
import IQuote from "./IQuote";

interface IUser {
  name: string;
  password: string;
  createdAt: Date;
  oracula: [mongoose.Types.ObjectId];
  addedQuotes: [mongoose.Types.ObjectId];
  likedQuotes: [mongoose.Types.ObjectId];
  addedPosts: [mongoose.Types.ObjectId];
  wiseFriends: [mongoose.Types.ObjectId];
}

export default IUser;
