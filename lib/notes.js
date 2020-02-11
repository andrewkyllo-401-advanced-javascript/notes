function Notes(options) {
  this.action = options.command.action;
  this.payload = options.command.payload;
};

Notes.prototype.execute = function() {
  switch (this.action) {
    case 'add': this.add(this.payload); break;
    default: break;
  }
};

Notes.prototype.add = function(payload) {
  console.log(`adding note: ${payload}`)
}

module.exports = Notes;