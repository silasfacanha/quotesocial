import express, { Router } from "express";
import mongoose from "mongoose";
import CommentModel from "../../db/Models/commentSchema";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  try {
    const comments = await CommentModel.find();
    res.status(200).json(comments);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const newComment = new CommentModel({
    name: req.body.name,
    createdAt: Date.now(),
    quotes: req.body.quotes,
  });
  try {
    const savedComment = await newComment.save();
    console.log(`${savedComment} saved`);
    res.status(201).json({ message: "Comment registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete/:commentId", async (req, res) => {
  const commentId = req.params.commentId;

  try {
    const deletedComment = await CommentModel.findByIdAndDelete(commentId);
    if (deletedComment) {
      res.status(201).json({ message: "Comment deleted successfully" });
    } else {
      res.status(404).json({ message: "Comment not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});
//get returns all oracula, something that must be triggered everytime they go to the page.
//create oraculum
//edit parts of the oraculum
// delete oraculum
export { router as oraculumRouter };
