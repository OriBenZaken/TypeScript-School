"use strict";
exports.__esModule = true;
// Rest parameter are treated as boundles number of optional parameter
// Only one rest parameter is allowed at a time.
// rest parameter must appear last in the parameter list.
// the type of a rest parameter must be an array type.
function Info(firstName) {
    var groupMembers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        groupMembers[_i - 1] = arguments[_i];
    }
    return firstName + " " + groupMembers.join(" ");
}
var record = Info("jhon", "Micheal", "lotus");
console.log(record);
