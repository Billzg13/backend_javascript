const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const AuthorSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
  });

  
module.exports = Author = mongoose.model('Author', AuthorSchema);