"use strict";
exports.__esModule = true;
function world(data) {
    if (data.name) {
        return data.name;
    }
    if (data.age) {
        return data.age;
    }
}
var recordName = world({ name: "Amor" });
var recordAge = world({ age: 7 });
console.log("name: " + recordName, "age: " + recordAge);
