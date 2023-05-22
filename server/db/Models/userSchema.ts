import { Schema, model, connect } from "mongoose";
import IUser from "../../../shared/Interfaces/IUser";
import { oraculumSchema } from "./oraculumSchema";
import quoteSchema from "./quoteSchema";
import mongoose from "mongoose";

const userSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: true },
  oracula: [{ type: mongoose.Schema.Types.ObjectId, ref: "Oraculum" }],
  addedQuotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quote" }],
  likedQuotes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Quote" }],
  wiseFriends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
