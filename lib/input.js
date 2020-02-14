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
      d: 'delete',
      delete: 'delete',
      l: 'list',
      list: 'list',
    };
    let possibleOptions = {
      c: 'category',
      category: 'category'      
    }
    let allArguments = Object.keys(args);
    let keyOfArgument = allArguments.filter(arg => possibleArguments[arg])[0];
    let allOptions = Object.keys(args)
    let keyOfOptions = allOptions.filter(arg => possibleOptions[arg])[0];
    let returnObject = {
      action: possibleArguments[keyOfArgument],
      payload: args[keyOfArgument],  
    }
    if (keyOfOptions) {
        returnObject[possibleOptions[keyOfOptions]] = args[keyOfOptions];
   }
    return returnObject;
  }
  valid() {
    const schema = {
      action: {type: 'string', required: true},
      payload: {type: 'string', required: true},
      category: {type: 'string', required: false}
    }
    const validator = new Validator(schema);
    return validator.validate(this.command);
  }
}

module.exports = Input;