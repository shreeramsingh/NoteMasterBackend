/* eslint-disable no-undef */
const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  toDo:{
    type:String,
    require:true,
  },
  description:{
    type:String,
    require:true,
  }
  
});
module.exports = mongoose.model("Todo",toDoSchema);