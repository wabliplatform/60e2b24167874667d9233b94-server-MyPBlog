
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema({
Underscoreid:String , 

image:String , 

date:String , 

title:String , 

posttext:String 


})

module.exports = {
  Blog : mongoose.model('Blog', blogSchema),
}

