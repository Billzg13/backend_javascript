const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
    body: {
      type: String,
      required: true
    },
    author:{
      type:Schema.Types.ObjectId,
      ref: 'Author'
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

  
module.exports = Todo = mongoose.model('todo', TodoSchema);