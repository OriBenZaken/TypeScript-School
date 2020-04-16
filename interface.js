"use strict";
exports.__esModule = true;
function world1(value1) {
    console.log(value1.name);
}
function world2(value2) {
    console.log(arguments[0]);
}
var obj1 = { name: "kat" };
world1(obj1);
// var obj2 = {Myname: "kat"};
// world1(obj2); // missing or renamed property: Error
var Obj4 = { age: 11, name: "janny" };
world1(Obj4); // Stale Literal: extra properties allowed
var obj3 = { name: 123 };
world2(obj3); //  Ok, `name` matched by index signature
