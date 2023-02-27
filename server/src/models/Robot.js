module.exports = class Robot {
  constructor(maxX, maxY, posX, posY, orientation){
    this.maxX = maxX;
    this.maxY = maxY;
    this.posX = posX;
    this.posY = posY;
    this.orientation = orientation;
  }
}