"use strict";
exports.__esModule = true;
// General syntax: <variable type: var/let/const...> <variable name> : <data type> = <value>
// boolean
var True = true;
console.log(True);
var False = false;
console.log(False);
// string
var name = "Ori";
console.log(name);
// number
var number = 17;
console.log(number);
// array
var data = [1, 2, 3];
console.log(data[0]);
//generic array type
var data2 = ["Ori", "Ben", "Zaken"];
// enum
var forest;
(function (forest) {
    forest[forest["horse"] = 0] = "horse";
    forest[forest["lion"] = 1] = "lion";
    forest[forest["elephant"] = 2] = "elephant";
})(forest || (forest = {}));
;
var animal = forest.elephant;
console.log(animal); // prints: 2,  the index of element in the enum. starts from 0 by default
var animalName = forest[0]; // "horse"
console.log(animalName);
// tuple: Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number
// Decalre a Tuple type
var value;
// Initialize it
value = ["Ori", 26];
console.log(value);
// Any - can be any  datatype describe any time in code
var anything = "name";
anything = 5;
anything = true;
