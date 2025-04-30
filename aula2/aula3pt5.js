// exemplos de operadores lógicos com valores numéricos

let x = 10;
let y = 5;
let z = 0;

// operador E (&&) com valores numericos
let ResultadoE = (x > y) && (y > z);
console.log("resultado de (x > y) && (y > z): " + ResultadoE);  //verdadeiro
console.log("resultado de (z < y) && (x > z): " + (z < y) && (x > z)); //

//operador OU (||) com valores numericos
let ResultadoOU = (x < y) || (y < z);
console.log("resultado de (x < y) || (y > z): "  + ResultadoOU);  // falso

//operador NÃO (!) com valores numericos
let ResultadoN = !(x < y);
console.log("Resultado de !(x < y): " + ResultadoN); //Verdadeiro

// Combinação de operadores lógicos com valores numéricos
let ResultadoC = ((x > y) && (y > z)) || ((x < y) && (z > y));
console.log("Resultado de ((x > y) && ( y > z)) || ((x < y) && z > y)): " + ResultadoC); //verdadeiro
