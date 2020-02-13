const mongoose = require('mongoose');

const notesSchema = mongoose.Schema({
  category: { type: String, required: true},
  text: { type: String, required: true}
});

module.exports = mongoose.model('notes', notesSchema);