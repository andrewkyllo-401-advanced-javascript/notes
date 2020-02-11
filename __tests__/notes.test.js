const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Notes module', () => {
  it('execute() does nothing when the options are invalid', () => {
    const thisCommandWillFail = { command: {'x': 'coconut'}};
    const notes = new Notes(thisCommandWillFail);
    notes.execute();
    expect(console.log).not.toHaveBeenCalled;
  });
  it('Notes.prototype.add() can add a note', () => {
    const action = 'add';
    const payload = 'this will succeed';
    const notes = new Notes({ command: {action: action, payload: payload}})
    notes.execute();
    expect(console.log).toHaveBeenCalledWith(`adding note: ${payload}`);
  });
});