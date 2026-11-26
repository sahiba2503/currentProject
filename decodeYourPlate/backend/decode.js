
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Store user food details
const foodDetail = [];

// Store nutrition information
const foodNutritions = [
  { name: "apple", calorie: 40, protein: 25, fat: 21 },
  { name: "apple", calorie: 30, protein: 10, fat: 21 },
  { name: "banana", calorie: 20, protein: 20, fat: 29 },
  { name: "tea", calorie: 10, protein: 25, fat: 21 },
  { name: "coffee", calorie: 50, protein: 23, fat: 21 }
];

// GET API
app.get("/tasksinf", (req, res) => {
  res.json(foodDetail);
});

// POST API
app.post("/foodDetail", (req, res) => {

  const foodName = req.body.foodName;

  // Find matching food
  const details = foodNutritions.filter((value) => {
    return value.name.toLowerCase() === foodName.toLowerCase();
  });

  // Check if food exists
  if (details.length === 0) {
    return res.status(404).json({
      message: "Food not found"
    });
  }

  // Create food object
  const food = {
    id: Date.now(),
    item: foodName,
    nutrition: details
  };

  foodDetail.push(food);

  res.json(food);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
