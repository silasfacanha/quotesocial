import express from "express";
import mongoose from "mongoose";
import User from "../db/Models/userSchema";
import UserModel from "../db/Models/userSchema";
import router, { oraculumRouter } from "./routes/oraculum";
import { userRouter } from "./routes/user";
import { postRouter } from "./routes/post";
import { quoteRouter } from "./routes/quote";
const app = express();
const port = 3000;

app.use(express.json());
mongoose.connect(
  "mongodb+srv://test:5oDUcAXNDE00uAsS@quotesocialcluster.f7vjeth.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as any
);
app.use("/user", userRouter);
app.use("/myOraculum", oraculumRouter);
app.use("/post", postRouter);
app.use("/quote", quoteRouter);
app.delete("/register", async (req, res) => {
  try {
    const deletedUser = await UserModel.findByIdAndDelete(req.body.id);
    console.log(deletedUser);
    res.send("User deleted successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting user");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
