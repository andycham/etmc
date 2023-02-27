const Robot = require('../../src/models/Robot');

test('Can create a Robot object', () => {
  const robot = new Robot(1, 2, "N");
  expect(robot.posX).toBe(1);
  expect(robot.posY).toBe(2);
  expect(robot.orientation).toBe("N");
});