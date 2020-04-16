"use strict";
exports.__esModule = true;
var MyClass = /** @class */ (function () {
    function MyClass() {
        this.Number = 0;
        console.log(MyClass.Counter++);
    }
    MyClass.prototype.PublicMethod = function () {
        console.log("This is a public method");
    };
    MyClass.StaticMethod = function () {
        console.log("This is a static method");
    };
    MyClass.Counter = 0;
    return MyClass;
}());
MyClass.StaticMethod(); //// This is a static method
//In TypeScript static methods are accessed by using the class
var count1 = new MyClass(); // 1
var count2 = new MyClass(); // 2
//count2.StaticMethod(); //we cannot access static members directly from the object instances
count2.PublicMethod();
function world1(value1) {
    console.log(value1.name);
}
function world2(value2) {
    console.log(arguments[0]);
}
//Fresh Objects
//Case 1
world1({ name: "Size 11 Object" }); //Case 1 exact properties: OK
//Case 2a
world1({ myName: "Size 11 Object" }); //Case 2a missing or renamed property: Error
//Case 2b
world2({ name: "Zia" }); // Ok, `name` matched by index signature
//Case 3
world2;
{
    size: 11, label;
    "Size 11 Object";
}
;
//Case 3 Fresh Literal: Error no extra properties allowed
var obj1 = { name: "kat" };
world1(obj1); //Case 1 exact properties: OK
//Case 2a
var Obj2 = { myName: "robin" };
world1(Obj2); //Case 2a missing or renamed property: Error
//Case 2b
var obj3 = { name: "william" };
world2(obj3); // Ok, `name` matched by index signature
//Case 3
var Obj4 = { age: 11, name: "janny" };
world1(Obj4); //Case 3 Stale Literal: extra properties allowed
