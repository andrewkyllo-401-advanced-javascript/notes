'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const options = new Input();
options.valid() ? Notes.add(options) : help();

function help() {
  console.log('help');
  process.exit();
}
