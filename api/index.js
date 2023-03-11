import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

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

//Middlewares
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
  console.log("Connected to backend!");
});

// mongodb://localhost:27017
