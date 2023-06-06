import { Schema, model, connect } from "mongoose";
import IPost from "../../../shared/Interfaces/IPost";
import quoteSchema from "./quoteSchema";
import commentSchema from "./commentSchema";

const postSchema = new Schema<IPost>({
  quote: { type: Schema.Types.ObjectId, ref: "quote", required: true },
  postText: { type: String, required: true },
  createdAt: { type: Date, required: true },
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  likes: { type: Number, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

const PostModel = model<IPost>("Post", postSchema);

export default PostModel;
