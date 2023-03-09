import mongoose from "mongoose";

const DB_URL = "mongodb://0.0.0.0:27017/nodemailer";

mongoose.connect(DB_URL);
mongoose.connection
  .on("open", () => {
    console.log(`database connection opened`);
  })
  .once("error", () => {
    console.log(`an error occured`);
  });
