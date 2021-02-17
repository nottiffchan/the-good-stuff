var dotenv = require('dotenv').config();
const uri = process.env.MONGO_URI;

const express = require('express');
var cors = require('cors')

const app = express();
const bodyParser = require("body-parser");
const FoodItem = require('./models/FoodItem');
const mongoose = require("mongoose");

try {
  mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}, () => console.log("database connected"));
} catch (e) {
  console.log("could not connect to db", e)
}


app.options('*', cors())
app.use(cors({origin:true,credentials: true}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Access-Control-Allow-Headers, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/addFoodItem", (req, res, next) => {
  const foodItem = new FoodItem({
    name: req.body.name,
    summary: req.body.summary,
    description: req.body.description,
    price: req.body.price,
    calories: req.body.calories,
    imagePath: req.body.imagePath,
    category: req.body.category,
  });
  console.log(foodItem);
  res.status(201).json({
    result: 'successful'
  });
});

app.get('/api/getFoodItems', (req, res, next) => {
  const foodItems = [
    { id: '1234', name: 'washoku bowl', summary: "fresh salmon, edamame, sous vide egg", description: "", price: "8.50", calories: "350", imagePath: "assets/food/washokubowl.png", category: 'rice'},
    { id: '1235', name: 'mediterranean bowl', summary: "roast chicken, cherry tomatoes, sweet corn", description: "", price: "8.00", calories: "400", imagePath: "assets/food/mediterraneanbowl.png", category: 'rice'},
    { id: '2222', name: "capellini al funghi", summary: "mushrooms, cordyceps, sous vide egg" , description: "topped with wild mushrooms, nourishing cordyceps flower and sous vide egg", price: "9.50", calories: "400", imagePath: "assets/food/washokubowl.png", category: 'noodles'},
    { id: '1234', name: 'washoku bowl', summary: "fresh salmon, edamame, sous vide egg", description: "", price: "8.50", calories: "350", imagePath: "assets/food/washokubowl.png", category: 'rice'},
    { id: '1235', name: 'mediterranean bowl', summary: "roast chicken, cherry tomatoes, sweet corn", description: "", price: "8.00", calories: "400", imagePath: "assets/food/mediterraneanbowl.png", category: 'rice'},
    { id: '1234', name: 'washoku bowl', summary: "fresh salmon, edamame, sous vide egg", description: "", price: "8.50", calories: "350", imagePath: "assets/food/washokubowl.png", category: 'rice'},
    { id: '1235', name: 'mediterranean bowl', summary: "roast chicken, cherry tomatoes, sweet corn", description: "", price: "8.00", calories: "400", imagePath: "assets/food/mediterraneanbowl.png", category: 'rice'},
    { id: '1234', name: 'washoku bowl', summary: "fresh salmon, edamame, sous vide egg", description: "", price: "8.50", calories: "350", imagePath: "assets/food/washokubowl.png", category: 'rice'},
    { id: '1235', name: 'mediterranean bowl', summary: "roast chicken, cherry tomatoes, sweet corn", description: "", price: "8.00", calories: "400", imagePath: "assets/food/mediterraneanbowl.png", category: 'rice'},
  ];
  return res.status(200).json({
    result: 'successful',
    data: foodItems
  });
});

module.exports = app;
