function plus(a, b) { return a + b; }
function minus(a, b) { return a - b; }
function a_plus_abs_b(a, b) {
  return (b >= 0 ? plus : minus)(a, b);
}

module.exports = a_plus_abs_b;
