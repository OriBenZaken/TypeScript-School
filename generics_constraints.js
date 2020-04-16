/*
In Generic Constraints you may sometimes want to write a generic that works only on a set of
types where you have some knowledge about the capabilities
*/
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
var Human = /** @class */ (function () {
    function Human() {
    }
    return Human;
}());
var Data = /** @class */ (function () {
    function Data() {
        this.age = [];
    }
    Data.prototype.add = function (Info) {
        this.age.push(Info);
        console.log(Info.name + " method add");
    };
    return Data;
}());
//let record1 = new Data<string>();  // error 
//let record2 = new Data<number>();  // error  
var showData = /** @class */ (function (_super) {
    __extends(showData, _super);
    function showData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    showData.prototype.display = function () {
        console.log(this.name + " display method");
    };
    return showData;
}(Human));
var record = new showData();
record.name = "james";
record.display();
var record2 = new Data();
record2.add(record);
