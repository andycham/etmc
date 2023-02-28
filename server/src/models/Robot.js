module.exports = class Robot {
  constructor(maxX, maxY, posX, posY, orientation){
    this.maxX = maxX;
    this.maxY = maxY;
    this.posX = posX;
    this.posY = posY;
    this.orientation = orientation;
    this.isLost = false;
    this.lostCoordsList = [];
  }

  set posX(value){
    if(value>50){
      throw(new Error("Maximum value any coordinate is 50"));
    }
    this.posXvalue = value;
  }

  get posX(){
    return this.posXvalue;
  }
  
  set posY(value){
    if(value>50){
      throw(new Error("Maximum value any coordinate is 50"));
    }
    this.posYvalue = value;
  }

  get posY(){
    return this.posYvalue;
  }
  

  set maxX(value){
    if(value>50){
      throw(new Error("Maximum value any coordinate is 50"));
    }
    this.maxXvalue = value;
  }

  get maxX(){
    return this.maxXvalue;
  }
  
  set maxY(value){
    if(value>50){
      throw(new Error("Maximum value any coordinate is 50"));
    }
    this.maxYvalue = value;
  }

  get maxY(){
    return this.maxYvalue;
  }

  turnRight(){
    // turn right
    switch(this.orientation){
      case "N":
        this.orientation = "E";
        break;
      case "E":
        this.orientation = "S";
        break;
      case "S":
        this.orientation = "W";
        break;
      case "W":
        this.orientation = "N";
        break;
    }
  }

  turnLeft(){
    switch(this.orientation){
      case "N":
        this.orientation = "W";
        break;
      case "E":
        this.orientation = "N";
        break;
      case "S":
        this.orientation = "E";
        break;
      case "W":
        this.orientation = "S";
        break;
    }
  }

  moveForward(){
    var newPosX = this.posX;
    var newPosY = this.posY;
    switch(this.orientation){
      case "N":
        newPosY++;
        break;
      case "E":
        newPosX++;
        break;
      case "S":
        newPosY--;
        break;
      case "W":
        newPosX--;
        break;
    }
    if((newPosX<0)||(newPosX>this.maxX)||(newPosY<0)||(newPosY>this.maxY)){
      // Robot is lost
      this.isLost = true;
    } else {
      this.posX = newPosX;
      this.posY = newPosY;
    }
  }

  executeCommand(command){
    if(!this.isLost){
      switch(command){
        case "R":
          this.turnRight(); 
          break;
        case "L":
          this.turnLeft();        
          break;
        case "F":
          if(!this.isLostCoords()){
            this.moveForward();
          }          
          break;
        default:
          throw(new Error("Unknown command"));
      }
    }    
  }

  executeCommandList(commandList){
    var charPos = 0;
    while(!this.isLost && (charPos < commandList.length)){
      var command = commandList[charPos];
      this.executeCommand(command);
      charPos++;
    }
  }

  isLostCoords(){
    var index = 0;
    var returnValue = false;
    var lostCoords;
    while(!returnValue && (index < this.lostCoordsList.length)){
      lostCoords = this.lostCoordsList[index];      
      if((this.posX == lostCoords[0])&&(this.posY == lostCoords[1])&&(this.orientation == lostCoords[2])){
        returnValue = true;
      }
      index++;
    }
    return returnValue;
  }

  output(){
    var tmpOutput = this.posX + " " + this.posY + " " + this.orientation;
    if(this.isLost){
      tmpOutput = tmpOutput + " LOST";
    }
    return tmpOutput;
  }
}