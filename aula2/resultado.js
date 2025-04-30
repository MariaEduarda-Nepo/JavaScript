let ab = true;
let bc = false;

// Operador E (&&)
let eResultado = ab && bc;
console.log("resultado de ab && bc: " + eResultado); //falso

// Operador OU (||)
let ouResultado = ab || bc;
console.log("resultado de ab || bc: " + ouResultado); //verdadeiro

// Operador NÃO (!)
let naoResultado = !ab;
console.log("resultado de !ab: " + naoResultado); //falso

// Combinações de operadores logicos
let combinados = (ab && !bc) || (!ab && bc);
console.log("resultado de (ab && !bc) || (!ab && bc): " + combinados); //verdadeiro