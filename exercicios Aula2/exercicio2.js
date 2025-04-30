//Exercicio 2: operador OU (||)
 
let x = false;
let y = true;

console.log(x || y); //verdadeiro
console.log(x || false); //falso
console.log(y || false); //verdadeiro
console.log(x || (y && false)); //falso