const Radio = require('../../src/models/Radio');

test('Can create a Radio object', () => {
  const radio = new Radio();  
});

test('Can accept input.', () => {
  const radio = new Radio();
  radio.input("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
  expect(radio.input).toBe("5 3\n1 1 E\nRFRFRFRF\n3 2 N\nFRRFLLFFRRFLL\n0 3 W\nLLFFFLFLFL");
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
