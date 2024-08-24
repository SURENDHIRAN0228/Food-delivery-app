const mongoose = require('mongoose')

const { Schema } = mongoose;

const FoodCategoriesSchema = new Schema({
    CategoryName:{
        type:String,
        required:true
    }
  });

  module.exports = mongoose.model('FoodCategory', FoodCategoriesSchema, 'foodCategories');
  //module.exports = mongoose.model('foodCategories',FoodCategoriesSchema)