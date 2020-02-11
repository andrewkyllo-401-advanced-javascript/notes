'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const notes = new Notes(input);

input.valid() ? notes.execute(notes) : help();

function help() {
  console.log('help');
  process.exit();
}
