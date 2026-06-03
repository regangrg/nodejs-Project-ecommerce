import mongoose from "mongoose";
import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT;
const mongodbUrl = process.env.MONGODB_URL;
// console.log(port,mongodbUrl)
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Database connected!");

    app.listen(port, () => {
      console.log(`Server running at port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });