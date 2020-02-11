'use strict';

const minimist = require('minimist');

const rules = {
  action: { required: true },
  payload: { required: true }
}

function Input() {
  const args = minimist(process.argv.slice(2));
  this.action = this.getAction(args.a);
  this.payload = this.getPayload(args.p);
}

Input.prototype.getAction = function (action = "") {
  let validActions = /add|a/i;
  return validActions.test(action) ? action: 'Please use -a or -add.';
}

Input.prototype.getPayload = function (payload = "") {
  return (payload === '') ? 'Please input some text.' : payload;
}

Input.prototype.valid = function () {
  return Object.keys(rules).every((option) => {
    return rules[option].required ? !!this[option] : true;
  });
}

module.exports = Input;