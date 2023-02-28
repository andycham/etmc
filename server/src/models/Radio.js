const Planet = require('./Planet');
const Robot = require('./Robot');

module.exports = class Radio {
  outputText = "";
  
  input(instructions){
    this.instructions = instructions;
    this.output = "";
    if(this.checkInput(instructions)){
      //
    } else {
      throw Error("Length must by under 100 characters");
    }
  }  

  checkInput(instructions){
    const lengthMustBeUnder = 100;
    if(instructions.length < lengthMustBeUnder){
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