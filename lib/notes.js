class Notes {
  constructor(options) {
    this.action = options.command.action;
    this.payload = options.command.payload;
  }
  execute() {
    switch (this.action) {
      case 'add': this.add(this.payload); break;
      default: break;
    }
  };
  add(payload) {
    console.log(`adding note: ${payload}`)
  }
};

module.exports = Notes;