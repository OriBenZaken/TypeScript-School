export {};

// Named function with optional and default parameters
function Info(firstName: string, lastName = "suns"): string{
  return firstName+" "+lastName;
}

var result1 = Info("jhon"); //works correctly because last parameter is default
console.log(result1);
var result2 = Info("pretty","roses"); //correct because last parameter in optional also
console.log(result2);



// Anonymous function with default parameters

var Info2 : (firstName:string, lastName:string) => string =
function(firstName:string, lastName = "suns"):string{
    if(lastName){
      return firstName+" "+lastName;
    }
    else{
        return firstName;
    }

}