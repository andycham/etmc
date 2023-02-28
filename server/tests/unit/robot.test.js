const Robot = require('../../src/models/Robot');

test('Can create a Robot object', () => {
  const robot = new Robot(5, 3, 1, 2, "N");
  expect(robot.maxX).toBe(5);
  expect(robot.maxY).toBe(3);
  expect(robot.posX).toBe(1);
  expect(robot.posY).toBe(2);
  expect(robot.orientation).toBe("N");
});

test("Robot does not move if in same position as previously lost robot.", () => {
  const robot = new Robot(5, 3, 1, 2, "N");
  robot.lostCoordsList([1,3,"N"]);
  robot.executeCommand("FF");  
  expect(robot.posX).toBe(1);
  expect(robot.posY).toBe(3);  
  expect(robot.output()).toBe("1 3 N");
});