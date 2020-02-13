const minimist = require('minimist');
const Validator = require('./validator.js');

class Input {
  constructor() {
    let args = minimist(process.argv.slice(2));
    this.command = this.parseInput(args);
  }
  parseInput(args) {
    let possibleArguments = {
      a: 'add',
      add: 'add',
    };
    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    return {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],
    };
  }
  valid() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true}
    }
    const validator = new Validator(schema);
    return validator.validate(this.command);
  }
}


module.exports = Input;