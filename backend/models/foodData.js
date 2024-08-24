const mongoose = require('mongoose')

const { Schema } = mongoose;

const Food_Items = new Schema({
    CategoryName:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
        unique:true
    },
    options:[{
        half: {
            type:Number,
            required:true
        },
        full: {
            type:Number,
            required:true
        }
    }],
    description:{
        type:String,
        required:true
    },

  });

  module.exports = mongoose.model('food_items',Food_Items)