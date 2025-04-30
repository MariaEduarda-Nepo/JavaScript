//exercicio 5: operadores numericos

let a = 10;
let b = 20;
let c = 15;


// operador E (&&) com valores numericos
let ResultadoE = (a > b) && (b > c);
console.log("resultado de (a > b) && (b > c): " + ResultadoE);  //verdadeiro
console.log("resultado de (c < b) && (a > c): " + (c < b) && (a > c)); //

//operador OU (||) com valores numericos
let ResultadoOU = (a < b) || (b < c);
console.log("resultado de (a < b) || (b > c): "  + ResultadoOU);  // falso

//operador NÃO (!) com valores numericos
let ResultadoN = !(a < b);
console.log("Resultado de !(a < b): " + ResultadoN); //Verdadeiro

// Combinação de operadores lógicos com valores numéricos
let ResultadoC = ((a > b) && (b > z)) || ((a < b) && (c > b));
console.log("Resultado de ((a > y) && ( b > c)) || ((a < b) && c > b)): " + ResultadoC); //verdadeiro
