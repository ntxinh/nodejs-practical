const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  content: String,
  done: Boolean,
});
module.exports = mongoose.model('Todo', todoSchema);
