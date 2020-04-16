"use strict";
exports.__esModule = true;
// Named function  
function num(z, y) {
    return z + y;
}
// Anonymous function
var num2 = function (z, y) {
    return z - y;
};
// Anonymous function with explict type
var num3 = function (z, y) {
    return z * y;
};
var num4 = function (z, y) { return z * y; };
console.log(num(2, 3));
console.log(num2(3, 2));
console.log(num3(2, 3));
console.log(num4(4, 6));
