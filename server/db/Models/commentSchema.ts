import mongoose, { Schema, model, connect } from "mongoose";
import IComment from "../../../shared/Interfaces/IComment";

const commentSchema = new Schema<IComment>({
  commentedPost: { type: Schema.Types.ObjectId, ref: "post", required: true },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  text: { type: String, required: true },
  createdAt: { type: Date, required: true },
});

const CommentModel = model<IComment>("Comment", commentSchema);

export default CommentModel;
