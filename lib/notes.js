const mongoose = require('mongoose');
const notesSchema = require('../models/notes-schema.js');



class Notes {
  constructor() {
  }
  async execute(options) {
    switch (this.action) {
      case 'add': return this.add(options.command.action, options.command.payload);
      // case 'delete': this.delete
      default: return Promise.resolve();
    }
  };
  async add(category, text) {
    let newNote = {category, text};
    let note = new notesSchema(newNote);
    let saveNote = await note.save();
    return saveNote;
  }
  valid() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true}
    }
    const validator = new Validator(schema);
    return validator.validate(this);
  }
};


module.exports = Notes;