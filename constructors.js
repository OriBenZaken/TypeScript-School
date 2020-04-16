// example 1
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//if child class has no constructor and parent class provides constrcutor then 
//is going to use parent constrcutor and child's object creation will required use 
//of parent's constructor parameters 
var A = /** @class */ (function () {
    function A(theName, age) {
        this.name = theName;
        console.log("A constrcutor");
    }
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return B;
}(A));
var a = new A("A", 4); // This will work 
var b = new B("C", 8); // This is also working too as child class use parents constructor
var c = new B(); // This is not working as child class must use parents constructor
var d = new B("C"); // This will also not work
// example 2
// If parent class does not provide constructor and child class provide constrcutor then 
// child class must call super() within child's class constructor
// call to super can be at any line in constructor unlike any other object oriented language 
// with call to super must be as first line
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
var D = /** @class */ (function (_super) {
    __extends(D, _super);
    function D(theName, age) {
        var _this = _super.call(this) || this;
        _this.name = theName;
        console.log("D constrcutor");
        return _this;
    }
    return D;
}(C));
var a1 = new C(); // This will work
var b1 = new D(); // This is not working because child class has its 2 argumnet constrcutor
var c1 = new D("C", 8); // This is working as expected
