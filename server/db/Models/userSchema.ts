import { Schema, model, connect } from "mongoose";
import IUser from "../../../shared/Interfaces/IUser";
import { oraculumSchema } from "./oraculumSchema";

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  createdAt: { type: Date, required: true },
  oracula: { type: [oraculumSchema], required: true },
  password: { type: String, required: true },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
