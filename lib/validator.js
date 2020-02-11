class Validator {
  constructor(schema) {
    this.schema = schema;
  }
  validate(command) {
    const keys = Object.keys(command);
    if (keys.length === 0) {
      return false;
    }
    return keys.every(key => {
      if (this.schema[key] && this.schema[key].required && command[key]) {
        return true;
      }
      else { 
        return false;
      }
    });
  }
}

module.exports = Validator;
