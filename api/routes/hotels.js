import express from "express";
import Hotel from "../models/Hotel.js";
const router = express.Router();

// Create

router.post("/", async (req, res) => {
  console.log(req.body);
  const newHotel = new Hotel(req.body);
  try {
    const saveHotel = await newHotel.save();
    res.status(200).json(saveHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Update

router.put("/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json("Hotel has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get

router.get("/:id", async (req, res) => {
  try {
    const Hotel = await Hotel.findById(req.params.id);
    res.status(200).json(Hotel);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get All

router.get("/", async (req, res, next) => {
  // console.log("Hi i am hotel route");
  try {
    const Hotels = await Hotel.findById("sdsdf");
    res.status(200).json(Hotels);
  } catch (error) {
    // res.status(500).json(error);
    next(error);
  }
});

export default router;
