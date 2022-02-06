const	cube = (a) => {
	return a * a * a;
};
const	is_good_enough = (guess, x) => {
	return Math.abs(cube(guess) - x) < 0.001;
};
const	improve = (guess, x) => {
	return ((x / (guess * guess)) +  2 * guess) / 3
};
const cube_root = (guess,x) => {
	return is_good_enough(guess, x) 
		? guess 
		: cube_root(improve(guess, x), x);
};
module.exports = cube_root;
