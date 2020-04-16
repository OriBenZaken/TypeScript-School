// In TypeScript, each member is public by default.
var Human = /** @class */ (function () {
    function Human(FullName) {
        this.name = FullName;
    }
    Human.prototype.Age = function (age) {
        alert(this.name + " is " + age + " years old");
    };
    return Human;
}());
// private members can only be access to their respective class
var record = new Human("micheal").name;
console.log(record);
