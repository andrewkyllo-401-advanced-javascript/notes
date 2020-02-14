const schema = require('./notes-schema.js');

class Note {
  constructor() {}

  get(category) {
    return category ? schema.find(category) : schema.find({});
  }

  create(record) {
    const newRecord = new schema(record);
    return newRecord.save();
  }

  delete(id) {
    return schema.findByIdAndDelete(id);
  }

  update(id, record) {
    return schema.findByIdAndUpdate(id, record, { new: true});
  }
}

module.exports = Note;