"use strict";
exports.__esModule = true;
// syntax of classes in TypeScript is similar to java and c#
var Human = /** @class */ (function () {
    function Human(names) {
        this.name = names;
    }
    Human.prototype.eat = function () {
        console.log(this.name + " is a Human and is eating");
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this.name + " is a Animal and is eating");
    };
    return Animal;
}());
var Robot = /** @class */ (function () {
    function Robot(name) {
        this.name = name;
    }
    return Robot;
}());
var h = new Human("Lee");
console.log(h);
var a = new Animal("tiger");
console.log(a);
var r = new Robot("jarvis");
console.log(r);
var r2 = new Animal("lion");
var isItRobot = r2 instanceof Animal;
console.log("Is Lion a Robot: " + isItRobot);
