"use strict";
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
var world = /** @class */ (function () {
    function world() {
    }
    world.prototype.human = function () { return this.name(); };
    return world;
}());
var data = /** @class */ (function (_super) {
    __extends(data, _super);
    function data() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    data.prototype.name = function () { return "jhon"; };
    return data;
}(world));
///var record = new world();// error, can not create instance of Abstract class
var record = new data();
console.log(record.name());
