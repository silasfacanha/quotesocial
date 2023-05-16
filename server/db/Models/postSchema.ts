import { Schema, model, connect } from 'mongoose';
import IPost from "../../../shared/Interfaces/IPost";
import IQuote from "../../../shared/Interfaces/IQuote";
import quoteSchema from "./quoteSchema"

const postSchema = new Schema<IPost>({
    id:{type: Number, required: true},
    quote: {type:quoteSchema, required: true},
    postText: {type: String, required:true},
    createdAt:{type:Date, required: true},
    likes:{type: Number, required: true}
  });

const Post = model<IPost>('Post', postSchema);

export default Post