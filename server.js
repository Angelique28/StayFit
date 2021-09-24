const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin-angelique:Firicis78@cluster0.efsht.mongodb.net/foodDB");

app.use("/", require("./routes/savedMealRoute"));

app.listen(3001, function(){
    console.log("server is running on port 3001");
});