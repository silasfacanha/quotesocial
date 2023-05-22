import express from "express";
import mongoose from "mongoose";
import PostModel from "../../db/Models/postSchema";

const router = express.Router();
//create, delete, update the name of the user.

router.get("/", async (req, res) => {
  try {
    const posts = await PostModel.find();
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post(`:userId/createpost`, async (req, res) => {
  const newPost = new PostModel({
    quote: req.body.quote,
    postText: req.body.postText,
    likes: req.body.likes,
    comments: req.body.comments,
    postAuthor: req.body.postAuthor,
    createdAt: Date.now(),
  });
  try {
    const savedPost = await newPost.save();
    console.log(`${savedPost} saved`);
    res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete/:postId", async (req, res) => {
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
