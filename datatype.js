// boolean is an True and False values use for different Statements
var True = true;
console.log(True);
var False = false;
console.log(False);
// string  could be any type of string
var Name = "Jhon";
console.log(Name);
// Number to store number and also decimal values
var num = 26;
console.log(num);
// Array is used store temporary data
var data = [1, 2, 3];
console.log(data[0]);
// generic array type
var data2 = ["jhon", "poll", "Kami"];
console.log(data2[2]);
// Enum  represents a group of similarities
var forest;
(function (forest) {
    forest[forest["horse"] = 1] = "horse";
    forest[forest["lion"] = 2] = "lion";
    forest[forest["elephant"] = 4] = "elephant";
})(forest || (forest = {}));
;
var a = forest.lion;
var AniName = forest[4];
console.log(AniName);
// Tuple   
/*
 Tuple types allow you to express an array where the type of a fixed number of
 elements is known, but need not be the same.For example, you may want to represent
 a value as a pair of a string and a number:
*/
// Declare a tuple type
var val;
// Initialize it
val = ["hello", 6];
// Initialize it incorrectly
val = [5, "hello"];
console.log(val);
// Any can be any datatype describe any time in code
var anyThing = "name";
console.log(anyThing);
anyThing = 5;
console.log(anyThing);
anyThing = true;
console.log(anyThing);
