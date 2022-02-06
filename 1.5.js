module.exports = {
	"p" : () => {
		return this.p();
	},
	"test" : (x,y) => {
		return x === 0 ? 0 : y;
	}
};
