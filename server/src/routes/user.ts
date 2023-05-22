import express from "express";

import UserModel from "../../db/Models/userSchema";

const router = express.Router();
//create, delete, update the name of the user.

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const newUser = new UserModel({
    name: req.body.name,
    password: req.body.password,
    createdAt: Date.now(),
  });
  try {
    const savedUser = newUser.save();
    console.log(`${savedUser} saved`);
    res.status(201).json({ message: "user registered successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.delete("/delete/:userId", async (req, res) => {
  const userId = req.params.userId;

  try {
    const deletedUser = await UserModel.findByIdAndDelete(userId);
    if (deletedUser) {
      res.status(201).json({ message: "User deleted successfully" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { router as userRouter };
