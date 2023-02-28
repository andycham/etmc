const Planet = require('./Planet');
const Robot = require('./Robot');

module.exports = class Radio {
  outputText = "";
  
  input(instructions){
    this.instructions = instructions;
    this.instructionLines = instructions.split("\n");    
    this.output = "";
    if(this.checkInput(instructions)){
      var planetSize = this.getCoords(this.instructionLines[0]);
      this.planet = new Planet(planetSize[0], planetSize[1])       
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

  getCoords(line){
    var lineParts = line.split(" ");
    var posX = lineParts[0];
    var posY = lineParts[1];    
    if(!isNaN(posX)&&!isNaN(posY)) {
      return [parseInt(posX), parseInt(posY)];
    } else {
      throw Error("Invalid Coordinates");
    }    
  }

  getOrientation(line){
    var lineParts = line.split(" ");
    var orientation = "";
    if(lineParts.length >= 3){
      orientation = lineParts[2];
      return orientation;
    } else {
      throw Error("Cannot get orientation.");
    }
    
  }

  get output(){
    return this.outputText;
  }

  set output(value){
    this.outputText = value;
  } 
}