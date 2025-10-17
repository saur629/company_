const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

  firstName: {
     type: String,
     required: true,
     trim: true },

  lastName: { 
    type: String,
    required: true,
    trim: true },

  email: {
     type: String,
      required: true, 
      trim: true },

  message: { 
    type: String,
     required: true,
      trim: true },
      avatar:{
        type:String,
      }

      
},
 { timestamps: true });

module.exports = mongoose.model("Contact", contactSchema);
