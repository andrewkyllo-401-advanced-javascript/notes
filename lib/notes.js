const mongoose = require('mongoose');
const NotesSchema = require('../models/notes-schema.js');



class Notes {
  constructor() {
  }
  async execute(options) {
    switch (options.command.action) {
      case 'add': return this.add(options.command.payload, options.command.category);
      case 'list' : return this.list(options.command.payload);
      case 'delete': return this.delete(options.command.payload);
      default: return Promise.resolve();
    }
  };
  async add(text, category) {
    let newNote = {text, category};
    let note = new NotesSchema(newNote);
    let saveNote = await note.save();
    return saveNote;
  }
  async list(category) {
    const query = category ? {category} : {};
    
    const foundNotes = await NotesSchema.find(query);
    foundNotes.forEach(note => {
      console.log(note.text);
      console.log('');
      console.log(`Category: ${note.category}/t ID: ${note.id}`);
      console.log('--------------------------------');
      console.log('');
    })
    return;
  }
  async delete(id) {
    try {
      let response = await NotesSchema.findByIdAndDelete(id);
    } catch(e) {
      console.log(e);
    }
    return console.log("Deleted Note id", id);
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