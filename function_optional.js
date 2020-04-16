"use strict";
exports.__esModule = true;
function Info(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var result1 = Info("luke");
console.log(result1); // output: "luke"
var result2 = Info("Adam", "suns");
console.log(result2); // output: "Adam suns"
// Anonymous function with optional parameters
var Info2 = function (firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
};
