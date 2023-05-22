import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { oraculumRouter } from "./routes/oraculum";
import { userRouter } from "./routes/user";
import { postRouter } from "./routes/post";
import { quoteRouter } from "./routes/quote";
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
