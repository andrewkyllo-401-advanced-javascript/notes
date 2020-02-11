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
  valid() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true}
    }
    const validator = new Validator(schema);
    return validator.isValid(this);
  }
};

module.exports = Notes;