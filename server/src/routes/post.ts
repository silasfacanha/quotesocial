import express from "express";
import mongoose from "mongoose";
import PostModel from "../../db/Models/postSchema";
import UserModel from "../../db/Models/userSchema";
import IUser from "../../../shared/Interfaces/IUser";
import { Request, Response, NextFunction } from "express";
import { userRouter } from "./user";
interface CustomRequest extends Request {
  user?: IUser; // Replace 'any' with the appropriate type for your user object
}
const router = express.Router();
//create, delete, update and read posts. The user can read the posts from everyone. But he can only create, delete and update his own routes

router.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.get("/:userId", async (req, res) => {
  const userId = req.params.userId;
  try {
    const posts = await PostModel.find({ user: userId });
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/:userId/create", async (req: CustomRequest, res) => {
  console.log("oi");
  const userId = req.params.userId;
  try {
    const user = await UserModel.findById({ _id: userId });
    if (user) {
      console.log(`User: ${user.name}`);
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }

  const newPost = new PostModel({
    quote: req.body.quote,
    postText: req.body.postText,
    likes: req.body.likes,
    comments: req.body.comments,
    user: userId,
    createdAt: Date.now(),
  });
  try {
    const savedPost = await newPost.save();
    await UserModel.updateOne(
      { _id: userId },
      { $push: { addedPosts: savedPost._id } }
    );
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:userId/delete/:postId", async (req, res) => {
  const postId = req.params.postId;

  try {
    const deletedPost = await PostModel.findByIdAndDelete(postId);
    if (deletedPost) {
      res.status(201).json({ message: "Post deleted successfully" });
    } else {
      res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//get returns all posts, something that must be triggered everytime they go to the page.
//create posts
//edit parts of the post
// delete posts
export { router as postRouter };
