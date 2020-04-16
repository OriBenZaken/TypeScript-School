"use strict";
//protected can access the current class and subclasses (and sometimes also same-package classes)
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Human = /** @class */ (function () {
    function Human() {
        this.names = [];
    }
    Human.prototype.setData = function (index, item) {
        this.names[index] = item;
    };
    return Human;
}());
var Records = /** @class */ (function (_super) {
    __extends(Records, _super);
    function Records() {
        var _this = _super.call(this) || this;
        _this.currentIndex = 0;
        return _this;
    }
    Records.prototype.push = function (item) {
        this.setData(this.currentIndex, item);
        this.currentIndex++;
    };
    return Records;
}(Human));
var data = new Records();
data.setData(0, "name");
