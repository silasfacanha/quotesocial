import express from "express";
import mongoose from "mongoose";
import UserModel from "../../db/Models/userSchema";

const router = express.Router();

router.get("/", (req, res) => {
  console.log("Testing an oraculum route");
});

export { router as userRouter };
