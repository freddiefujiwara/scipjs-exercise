const section13 = require('./1.3');

test('1.3', () => {
  expect(section13(1, 2, 3)).toBe(13);
  expect(section13(3, 2, 1)).toBe(13);
  expect(section13(2, 3, 1)).toBe(13);
  expect(section13(2, 2, 1)).toBe(8);
});
