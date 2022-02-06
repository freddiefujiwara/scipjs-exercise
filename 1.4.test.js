const a_plus_abs_b = require('./1.4.js');
test('a plus abs b', () => {
  expect(a_plus_abs_b(1, 2)).toBe(3);
  expect(a_plus_abs_b(1, -2)).toBe(3);
  expect(a_plus_abs_b(-1, 2)).toBe(1);
  expect(a_plus_abs_b(-1, -2)).toBe(1);
});
