//font:
//https://adrianmejia.com/getting-started-with-node-js-modules-require-exports-imports-npm-and-beyond/

//file circle.js
const PI = 3.14159265359;

exports.area = radius => (radius ** 2) * PI;
exports.circumference = radius => 2 * radius * PI;

//file index.js (for example)
const circle = require('./circle');

const r = 3;
console.log(`Circle with radius ${r} has
  area: ${circle.area(r)};
  circumference: ${circle.circumference(r)}`);
