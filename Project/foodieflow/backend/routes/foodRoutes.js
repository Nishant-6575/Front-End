const router = require("express").Router();
const Food = require("../models/Food");

// Get all food
router.get("/", async (req, res) => {
  const food = await Food.find();
  res.json(food);
});

// Add food
router.post("/", async (req, res) => {
  const newFood = new Food(req.body);
  await newFood.save();
  res.json(newFood);
});

module.exports = router;