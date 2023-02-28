const Planet = require('./Planet');
const Robot = require('./Robot');

module.exports = class Radio {
  outputText = "";
  
  input(instructions){
    this.instructions = instructions;
    this.instructionLines = instructions.split("\n");    
    this.output = "";
    this.robots =[];
    if(this.checkInput(instructions)){
      var planetSize = this.getCoords(this.instructionLines[0]);
      this.planet = new Planet(planetSize[0], planetSize[1]);

      // Now read instructions line by line
      var lineNo = 1;
      var lostCoordsList = [];
      while(lineNo<this.instructionLines.length){
        // Line has initial robot coordinate and orientation
        var line = this.instructionLines[lineNo];
        //console.log("line " + lineNo + "=" + line);
        var coords = this.getCoords(line);
        var orientation = this.getOrientation(line);
        var robot = new Robot(this.planet.maxX, this.planet.maxY, coords[0], coords[1], orientation);
        robot.lostCoordsList = lostCoordsList;
        this.robots.push(robot);
        
        lineNo++;

        // Line has movement instructions
        line = this.instructionLines[lineNo];      
        
        // Send instructions to robot
        robot.executeCommandList(line);
        if(robot.isLost){
          lostCoordsList.push([robot.posX, robot.posY, robot.orientation]);
        }

        if(this.output!=""){
          this.output = this.output + "\n";
        }
        this.output = this.output + robot.output();
        // Move to next line
        lineNo++;

        // Skip blank line
        lineNo++;
      }

      //console.log("robots =" + JSON.stringify(this.robots));

    } else {
      throw Error("Length must by under 100 characters");
    }
  }  

  checkInput(instructions){
    const lengthMustBeUnder = 100;
    if(instructions.length < lengthMustBeUnder){
      return true;
    } else {
      throw (new Error("Length of instructions must be under " + lengthMustBeUnder + " characters."));
    }
  }

  getCoords(line){
    var lineParts = line.split(" ");
    var posX = lineParts[0];
    var posY = lineParts[1];    
    if(!isNaN(posX)&&!isNaN(posY)) {
      return [parseInt(posX), parseInt(posY)];
    } else {
      throw Error("Invalid Coordinates (" + posX + "," + posY);
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