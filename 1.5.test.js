const mod = require('./1.5');

test('1.5', () => {
	expect(mod.test(1, 2)).toBe(2);
	expect(mod.test(0, 2)).toBe(0);
	expect(() => mod.test(0, mod.p())).toThrow(Error);
});
