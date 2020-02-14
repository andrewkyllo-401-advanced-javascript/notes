const Notes = require('../lib/notes.js');
const notes = new Notes();

jest.spyOn(notes, 'add');


describe('Notes module', () => {
  it('execute() does nothing with invalid options', () => {
    return notes.execute({});
    .then(() => {
      expect(notes.add).not.toHaveBeenCalled();
    });
  });
  it('notes() can add a note', () => {
    notes.execute({ action: 'add', payload: 'thing'})
    .then(() => {
      expect(notes.add).toHaveBeenCalled();
    });
  });
});