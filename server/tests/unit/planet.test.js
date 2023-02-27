const Planet = require('../../src/models/Planet');

test('Can create a Planet object', () => {
  const planet = new Planet(5, 3);
  expect(Planet.maxX).toBe(5);
  expect(Planet.maxY).toBe(3);  
});