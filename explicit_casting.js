"use strict";
exports.__esModule = true;
/* in TypeScript explicitly specify the type of the object and that process know as
explicit casting */
/* A object can be cast by using <> syntax */
/* It allows us to explicitly cast from any type to a datatype "any"*/
var ExType = { name: "name", id: 1 };
ExType = { name: "newName", id: 2 }; //assign a type which has the the same properties
ExType = { name: "newName", id: 2, age: 3 }; //can add a property
ExType = { id: 2, age: 4 }; //can even reduce the properties because of initial any explict casting
