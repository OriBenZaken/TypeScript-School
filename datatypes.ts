export {};

// General syntax: <variable type: var/let/const...> <variable name> : <data type> = <value>

// boolean
let True : boolean = true;
console.log(True);

let False : boolean = false;
console.log(False);

// string
let name : string = "Ori";
console.log(name);

// number
let number: number = 17;
console.log(number);

// array
let data : number[] = [1, 2, 3];
console.log(data[0]);
//generic array type
let data2 : Array<string> = ["Ori", "Ben", "Zaken"];

// enum
enum forest {horse, lion, elephant};
let animal : forest = forest.elephant;
console.log(animal); // prints: 2,  the index of element in the enum. starts from 0 by default
let animalName : string = forest[0]; // "horse"
console.log(animalName);

// tuple: Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. For example, you may want to represent a value as a pair of a string and a number
// Decalre a Tuple type
let value : [string, number];
// Initialize it
value = ["Ori", 26];
console.log(value);


// Any - can be any  datatype describe any time in code
let anything : any = "name";
anything = 5;
anything = true;
