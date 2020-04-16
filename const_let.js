"use strict";
exports.__esModule = true;
// i would suggest you to use let instead of var everywhere, because it gives BlockScope concept
var num = 7;
if (true) {
    var num_1 = 34;
    console.log("let: " + num_1);
}
else {
    //  let num  = 40;
    //  var val = 4;
}
console.log("let: " + num);
//console.log("let: " + val);
// A const is use where values do not change
var a = 6;
var b = 5;
var names = "name";
var bool = true;
