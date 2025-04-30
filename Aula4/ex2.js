// imprimir numeros pares de 1 a 20:

for (let i = 12; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

let numero = 5;

numero = Number(numero);

let factorial = 1;
for (let i = 1; i <= numero; i++) {
    factorial *= i;
}
console.log(`o factorial de ${numero} é ${factorial}`);

// iterar sobre um array:
let frutas = ['banana', 'maçã', 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
 
//iterar valores de outro tema:

let esportes = ['futebol', 'volei', 'basquete'];
for (let esporte of esportes) {
    console.log(esporte);
}
//calcular a soma de numeros:
let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
}
console.log(soma);


