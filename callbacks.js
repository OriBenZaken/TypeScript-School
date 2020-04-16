"use strict";
exports.__esModule = true;
// By the name callback we can simple understand that a thing to be call at later
// or at any point in the program
function myCallback(callbackName) {
    console.log("this is my name " + callbackName);
}
function callingfunction(initialText, callback) {
    callback(initialText);
}
callingfunction("myCallback", myCallback);
