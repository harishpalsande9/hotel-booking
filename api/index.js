import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connect to Mongoose");
  } catch (error) {
    throw error;
  }
};
connect();

mongoose.connection.on("disconnect", () => {
  console.log("mongoose disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("mongoose connected");
});

app.get("/", (req, res) => {
  res.send("Hello First request"); 
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});
// mongodb://localhost:27017
