"use strict";
exports.__esModule = true;
var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.eat = function (quantity) {
        console.log(this.name + " is a Human and is eating");
    };
    return Animal;
}());
var h1 = new Human("Man");
var a1 = new Animal("cat", 3);
h1 = new Animal("Dog", 4); //this is working, but it should not because it is a fresh 
//object with extra properties
a1 = new Human("women", 7);
// This is not allowed need to add all properties including functions
//let a2 : Animal = {name:"cat", age:4};
var a2 = { name: "Dog", age: 4, eat: function () {
        console.log("Eat in object literal");
    } };
// Note there is no parameter in function and it does not give any compilation 
//error but you can not call this function without paramter, see the call below
a2.eat(5);
