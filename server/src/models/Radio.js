const Planet = require('./Planet');
const Robot = require('./Robot');

module.exports = class Radio {
  outputText = "";
  
  input(instructions){
    this.instructions = instructions;
    this.output = "";    
  }  

  inputIsValid(){
    const maxInstructionLength = 100;
    if(this.instructions.length <= maxInstructionLength){
      return true;
    } else {
      return false;
    }
  }

  get output(){
    return this.outputText;
  }

  set output(value){
    this.outputText = value;
  } 
}