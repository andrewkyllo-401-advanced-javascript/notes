const mongoose = require('mongoose');
const Notesy = require('../models/note-collection.js');
let note = new Notesy();


class Notes {
  constructor() {
  }
  // calls command function based on input
  async execute(options) {
    switch (options.command.action) {
      case 'add': return this.add(options.command.payload, options.command.category);
      case 'list' : return this.list(options.command.payload);
      case 'delete': return this.delete(options.command.payload);
      default: return Promise.resolve();
    }
  };

  // adds object to database got help from TA's and Cait
  async add(text, category) {
    let newNote = {text, category};
    let saveNote = await note.create(newNote);
    return saveNote;
  }
  // retrieves list from database
  async list(category) {
    const query = category && category !== true ? {category} : {};    
    const foundNotes = await note.get(query);
    foundNotes.forEach(noteObj => {
      console.log(noteObj.text);
      console.log('');
      console.log(`Category: ${noteObj.category}/t ID: ${noteObj.id}`);
      console.log('--------------------------------');
      console.log('');
    });
    return;
  }
  // removes object from database by ID
  async delete(id) {
    await note.delete(id);
    return console.log("Deleted Note id", id);
  }

  // validates note
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