const mongoose = require("mongoose");

const savedFoodSchema = {
    image: String,
    label: String,
    calories: String,
    dietLabels: String,
    ingredients: String
  };
  
  const SavedFood = mongoose.model("SaveFood", savedFoodSchema);

  module.exports = SavedFood;