const mongoose = require('mongoose');

const foodItemSchema = mongoose.Schema({
  name: String,
  summary: String,
  description: String,
  price: String,
  calories: String,
  imagePath: String,
  category: String,
});

module.exports = mongoose.model('FoodItem', foodItemSchema);
