"use strict";
exports.__esModule = true;
function Info(firstName, age) {
    if (typeof age === 'string') {
        // this is know as type guard or union types
        // age is treated as a string here
        return age + ' is a string';
    }
    if (typeof age === 'number') {
        // age is treated as a number here
        return age + ' is a string';
    }
    if (typeof age === 'boolean') {
        // age is treated as a boolean here
        return age + ' is a boolean';
    }
}
// other example
var human = /** @class */ (function () {
    function human() {
    }
    human.prototype.food = function () { };
    return human;
}());
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.eat = function () { };
    return animal;
}());
var world = new human();
if (world instanceof human) {
    // this is type guard
    world.food();
}
else {
    world.eat();
}
/*Note on Type Guards:
A common pattern in JavaScript is to use typeof or instanceof to examine the type of an expression at runtime.
TypeScript now understands these conditions and will change type inference accordingly when used in an if block.
This is called a type guard.*/
