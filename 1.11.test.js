const f_recursive = require('./1.11');

test('1.11', () => {
  expect(f_recursive(1)).toBe(1);
  expect(f_recursive(2)).toBe(2);
  expect(f_recursive(3)).toBe(4);
  expect(f_recursive(4)).toBe(11);
});
