const Radio = require('../../src/models/Radio');

test('Can create a Radio object', () => {
  const radio = new Radio();  
});

test('Can accept input.', () => {
  const radio = new Radio();
  radio.input("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
  expect(radio.instructions).toBe("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
});

test('Can accept input and provide output.', () => {
  const radio = new Radio();
  radio.input("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
  expect(radio.output.length).toBeGreaterThan(0);
});

test('Can accept input and provide correct output.', () => {
  const radio = new Radio();
  radio.input("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
  expect(radio.output).toBe("1 1 E\n3 3 N LOST\n2 3 S");
});

test("Can create planet from first line of input.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 1 E\nLR\n3 2 N\nLR\n0 3 W\nLR");  // Robots just turning without going forward.
  expect(radio.planet.maxX).toBe(5);
  expect(radio.planet.maxY).toBe(3);
});

test("Can create robots from input.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\nLR\n0 3 W\nLR");  // Robots just turning without going forward.
  expect(radio.robots.length).toBe(3);  
});

test("Can create first robot from input.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\nLR\n0 3 W\nLR");  // Robots just turning without going forward.
  expect(radio.robots[0].posX).toBe(1);
  expect(radio.robots[0].posY).toBe(2);  
});

test("Can create second robot from input.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\nLR\n0 3 W\nLR");  // Robots just turning without going forward.
  expect(radio.robots[1].posX).toBe(3);
  expect(radio.robots[1].posY).toBe(4);  
});

test("Can create third robot from input.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\nLR\n0 3 W\nLR");  // Robots just turning without going forward.
  expect(radio.robots[2].posX).toBe(0);
  expect(radio.robots[2].posY).toBe(3);  
});


test("checkInput throws an error if input is 100 characters or more.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\n" + "R".repeat(100)); 
  expect(radio.checkInput()).toThrow("Input must be less than 100 characters.");
});

test("inputIsValid returns true if input is less than 100 characters.", () => {
  const radio = new Radio();
  radio.input("5 3\n1 2 E\nLR\n3 4 N\n" + "R".repeat(60)); 
  expect(radio.checkInput()).toBe(true);
});
