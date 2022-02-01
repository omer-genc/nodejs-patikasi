function circleArea(r, pi = 3.14) {
  return pi * r * r;
}

function circleCircumference(r, pi = 3.14) {
  return 2 * pi * r;
}

module.exports = { circleArea, circleCircumference };
