const f_recursive = n => n >= 3 ? f_recursive(n - 1) + 2 * f_recursive(n - 2) + 3 * f_recursive(n - 3) : n;
module.exports = f_recursive;
