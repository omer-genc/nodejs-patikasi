const { circleArea, circleCircumference } = require("./circle");

const circle = {
  Area: circleArea(5),
  Circumference: circleCircumference(5),
};

console.table(circle);
