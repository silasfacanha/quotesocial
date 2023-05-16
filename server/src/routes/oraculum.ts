import express, { Router } from "express";
import mongoose from "mongoose";
import oraculumModel from "../../db/Models/oraculumSchema";

const router: Router = express.Router();

router.get("/", (req, res) => {
  console.log("Testing an oraculum route");
});

export default router;
