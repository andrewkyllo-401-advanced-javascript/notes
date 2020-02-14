class Validator {
  constructor(schema) {
    this.schema = schema;    
  }
  validate(command) {
    console.log(command)
    let requiredKeys = Object.keys(this.schema).filter(key => this.schema[key].required);
    let valid = true;
    for (let i = 0; i < requiredKeys.length; i++) {
      if (!command[requiredKeys[i]] 
        && !(typeof command[requiredKeys[i]] === this.schema[requiredKeys[i]].type)        
        ) {
        valid = false;
        break;
      }
    }  
    return valid;
  }
}

module.exports = Validator;
