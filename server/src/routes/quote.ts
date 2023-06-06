import express from "express";
import mongoose from "mongoose";
import QuoteModel from "../../db/Models/quoteSchema";
import UserModel from "../../db/Models/userSchema";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const router = express.Router();
//create, delete, update the name of the user.

router.get("/", async (req, res) => {
  try {
    const quotes = await QuoteModel.find();
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;
    const quotes = await QuoteModel.find({ userId });
    res.status(200).json(quotes);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/:userId", async (req, res) => {
  const userId = req.params.userId;
  const newQuote = new QuoteModel({
    text: req.body.text,
    author: req.body.author,
    source: req.body.source,
    user: userId,
    createdAt: Date.now(),
  });

  try {
    const savedQuote = await newQuote.save();
    const update = { $push: { addedQuotes: savedQuote._id } };
    await UserModel.findByIdAndUpdate(userId, update);
    console.log(`Quote by ${savedQuote.author} saved`);
    res.status(201).json({ message: "Quote created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/:userId/:quoteId", async (req, res) => {
  const quoteId = req.params.quoteId;
  const userId = req.params.userId;
  const update = { $pull: { addedQuotes: quoteId } };
  const updatedUser = await UserModel.findByIdAndUpdate(userId, update);
  try {
    const deletedQuote = await QuoteModel.findByIdAndDelete(quoteId);
    if (deletedQuote) {
      res.status(201).json({ message: "Quote deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//I still need to add the route to update
export { router as quoteRouter };
