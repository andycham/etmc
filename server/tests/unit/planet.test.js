const Planet = require('../../src/models/Planet');

test('Can create a Planet object', () => {
  const planet = new Planet(5, 3);
  expect(planet.maxX).toBe(5);
  expect(planet.maxY).toBe(3);  
});