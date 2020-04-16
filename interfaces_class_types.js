"use strict";
exports.__esModule = true;
var Clock = /** @class */ (function () {
    function Clock(hours, minutes) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// interfaces describe the public side of the class, rather than both 
//the public and private side.
