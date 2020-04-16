
export {};

function Info(firstName: string, lastName: string):string;
function Info(firstNum: number, lastNum: number):number;
function Info(trueBool: boolean, falseBool: boolean):boolean;
function Info(value1:any, value2:any):any{
    return value1+" " +value2;
}

console.log(Info(1,4));
console.log(Info(true, false));
console.log(Info("jhon","ducket"));

// error: No overload matches this call.
// Info(1, "Hello"); 

function foo(x:number, y=5, z=4) {
    console.log([x, y, z].join(' '));
}

foo(2, undefined ,4);