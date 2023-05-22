import express from "express";
import mongoose from "mongoose";
import QuoteModel from "../../db/Models/quoteSchema";
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

router.post("/createquote", async (req, res) => {
  const newQuote = new QuoteModel({
    text: req.body.text,
    author: req.body.author,
    source: req.body.source,
    quoteProvider: req.body.quoteProvider,
    createdAt: Date.now(),
  });
  try {
    const savedQuote = await newQuote.save();
    console.log(`Quote by ${savedQuote.author} saved`);
    res.status(201).json({ message: "Quote created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete/:quoteId", async (req, res) => {
  const quoteId = req.params.quoteId;

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
export { router as quoteRouter };
