const express = require("express");
const router = express.Router();
const Save = require("../models/savedMealModel");

router.route("/save").post((req, res) =>{
    const image = req.body.image;
    const label = req.body.label;
    const calories = req.body.calories;
    const dietLabels = req.body.dietLabels;
    const ingredients = req.body.ingredients;
    const newSavedFood = new SavedFood ({
        image,
        label,
        calories,
        dietLabels,
        ingredients
    });
    newSavedFood.save();
});

module.exports = router;
