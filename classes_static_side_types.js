"use strict";
exports.__esModule = true;
var Clock1 = /** @class */ (function () {
    function Clock1(h, m) {
    }
    return Clock1;
}());
var Clock = /** @class */ (function () {
    function Clock(h, m) {
        console.log(h + ":" + m);
    }
    return Clock;
}());
var obj = Clock;
var a = new obj(7, 30);
console.log(a);
a.currentTime;
