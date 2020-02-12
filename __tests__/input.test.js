const Input = require('../lib/input.js');

jest.mock('minimist');
const minimist = require('minimist');
// mock the users having inputted "node index.js -a 'this is a node""
minimist.mockImplementation(() => {
  return {
    a: 'this is a note',
  };
});

describe('Input module', () => {
  it('parseInput() returns a properly formed object', () => {
    const options = new Input();
    const command = options.parseInput({ a: 'this should succeed'});
    expect(command.action).toBeDefined();
    expect(command.payload).toBeDefined();
  })

  it('valid() respects a properly formed input', () => {
    const options = new Input();
    expect(options.valid()).toBeTruthy();
  });

  it ('valid() rejects an improperly formed input', () => {
    const options = new Input();
    options.command = {};
    expect(options.valid()).toBeFalsy();
  });

  it ('valid() rejects an improperly formed input', () => {
    const options = new Input();
    options.command = 'This is not an object';
    expect(options.valid()).toBeFalsy();
  });

  it ('valid() rejects an improperly formed input', () => {
    const options = new Input();
    options.command = {a: 'missing payload'};
    expect(options.valid()).toBeFalsy();
  }); 
  
  it ('valid() rejects an improperly formed input', () => {
    const options = new Input();
    options.command = {p: 'mising action'};
    expect(options.valid()).toBeFalsy();
  });
  
  it ('valid() rejects an improperly formed input', () => {
    const options = new Input();
    options.command = {p: 2};
    expect(options.valid()).toBeFalsy();
  });

});