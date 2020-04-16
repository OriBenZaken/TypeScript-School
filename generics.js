/*
In languages like C# and Java, one of the main tools in the toolbox for creating reusable
components is 'generics', that is,being able to create a component that can work over a
variety of types rather than a single one. This allows users to consume these components
and use their own types.
*/
var Human = /** @class */ (function () {
    function Human() {
        this.name = [];
        this.age = [];
    }
    Human.prototype.Data = function (Name, Age) {
        this.name.push(Name);
        this.age.push(Age);
        console.log(Name, Age);
    };
    return Human;
}());
var recordName = new Human();
var recordAge = new Human();
recordName.Data("Romi", 20);
recordAge.Data(25, "Root");
