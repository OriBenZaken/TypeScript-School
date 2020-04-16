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
    function world(theName) {
        this.name = theName;
    }
    world.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.log(this.name + " moved " + meters + "m.");
    };
    return world;
}());
var Human = /** @class */ (function (_super) {
    __extends(Human, _super);
    function Human(name) {
        return _super.call(this, name) || this;
    }
    Human.prototype.move = function (meters) {
        if (meters === void 0) { meters = 10; }
        console.log("walk");
        _super.prototype.move.call(this, meters);
    };
    return Human;
}(world));
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name) {
        return _super.call(this, name) || this;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 30; }
        console.log("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Animal;
}(world));
var h = new Human("jhonny the man");
var a = new Animal("Tommy the Animal");
h.move();
a.move(34);
