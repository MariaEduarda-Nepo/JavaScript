let a = true;
let b = false;

console.log(a && b); // false
console.log(a && true); // true

let c = true;
let d = false;

console.log(c && d); //false
console.log(c && true); //true

console.log(" resultado de a && b = " + ( a && b)); // falso
console.log("a && true = " + (a && true)); // verdadeiro
console.log("resultado de c && d = " + (c && d)); //falso
console.log("resultrado de c && true = " + (c && true)); //verdadeiro
