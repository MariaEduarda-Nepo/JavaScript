//exercicio 4: combinando operadores

let a = true;
let b = false;
let c = true;

console.log(a && b || c); // vrdadeiro
console.log((a && b) && !c); // falso
console.log(!(a && b) || (c && b)); // verdadeiro
console.log(a && (b || c) && !b); //verdadeiro