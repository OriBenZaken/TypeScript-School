"use strict";
exports.__esModule = true;
var data = ["5", "10"];
var record = data[0];
var data2 = { "first": "Bob", "second": "Fred" };
var record2 = data2["first"];
console.log(record2);
var data3 = { "first": "Bob", "second": "Fred" };
// Will not work, property length is required
var data4 = { "first": "Bob", "second": "Fred", length: "2" };
// Will work, length property is defined but not much usefull 
var record3 = data4["first"];
console.log(record3);
