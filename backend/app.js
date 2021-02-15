const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/api/foodItems', (req, res, next) =>{

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
    data: foodItems
  });
});

module.exports = app;
