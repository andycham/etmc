const Planet = require('./Planet');
const Robot = require('./Robot');

module.exports = class Radio {
  outputText = "";
  
  input(instructions){
    this.instructions = instructions;
    this.output = "";    
  }  
  get output(){
    return this.outputText;
  }

  set output(value){
    this.outputText = value;
  } 
}