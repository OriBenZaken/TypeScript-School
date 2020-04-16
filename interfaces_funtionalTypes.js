"use strict";
exports.__esModule = true;
//Note: there is no name assigned to the function signature
var world = function (name, age) {
    var record = name.search(age);
    if (record == -1) {
        return false;
    }
    else {
        return true;
    }
};
//For function types to correctly type-check, the name of the parameters do not need to match. 
//Function parameters are checked one at a time, with the type in each corresponding parameter 
//position checked against each other.  
