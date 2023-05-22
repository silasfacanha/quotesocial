import express, { Router } from "express";
import mongoose from "mongoose";
import OraculumModel from "../../db/Models/oraculumSchema";

const router: Router = express.Router();

router.get("/", async (req, res) => {
  try {
    const oracula = await OraculumModel.find();
    res.status(200).json(oracula);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const newOraculum = new OraculumModel({
    name: req.body.name,
    createdAt: Date.now(),
    quotes: req.body.quotes,
  });
  try {
    const savedOraculum = await newOraculum.save();
    console.log(`${savedOraculum.name} saved`);
    res.status(201).json({ message: "Oraculum registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete/:oraculumId", async (req, res) => {
  const oraculumId = req.params.oraculumId;

  try {
    const deletedOraculum = await OraculumModel.findByIdAndDelete(oraculumId);
    if (deletedOraculum) {
      res.status(201).json({ message: "Oraculum deleted successfully" });
    } else {
      res.status(404).json({ message: "Oraculum not found" });
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
