'use strict';

const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');
const mongoose = require('mongoose');


const MONGOOSE_URI = 'mongodb://localhost:27017/notesy';
mongoose.connect(MONGOOSE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const input = new Input();
const notes = new Notes();

if (input.valid()) {
  notes.execute(input)
    .then(data => {mongoose.disconnect()})
    .catch(error => {console.error(error)})
} else {
  help();
}


function help() {
  console.log('help');
  process.exit();
}
