const minimist = require('minimist');

function Input() {
  let args = minimist(process.argv.slice(2));
  this.command = this.parseInput(args);
}

Input.prototype.parseInput = function (args) {
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
};

Input.prototype.valid = function() {
  if(this.command.action && this.command.payload && this.command.payload !== true) {
    return true;
  }
  return false;
}

module.exports = Input;