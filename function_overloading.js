"use strict";
exports.__esModule = true;
function Info(value1, value2) {
    return value1 + " " + value2;
}
console.log(Info(1, 4));
console.log(Info(true, false));
console.log(Info("jhon", "ducket"));
// error: No overload matches this call.
// Info(1, "Hello"); 
function foo(x, y, z) {
    if (y === void 0) { y = 5; }
    if (z === void 0) { z = 4; }
    console.log([x, y, z].join(' '));
}
foo(2, undefined, 4);
