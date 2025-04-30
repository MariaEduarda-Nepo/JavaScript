// Exercicio de fixação
//checar idade com habilitação para dirigir
function dirigir(idade, habilitacao) { return idade >= 18 && habilitacao;}

console.log(dirigir(17, true)); // falso
console.log(dirigir(30, true)); // verdadeiro
console.log(dirigir(12, true)); //falso
console.log(dirigir(25, true)); //verdadeiro

//Exercicios de fixação
let a = true;
let b = true;

console.log(a || b); //verdadeiro
console.log(b || false); //verdadeiro

//exercicio de fixação
function fimdesemana(dia) {
    return dia == 'Sabado' || dia == 'Domingo';
}
console.log(fimdesemana('Sabado')); //verdadeiro
console.log(fimdesemana('Domingo')); // verdadeiro

//Exercicio de fixação
function naoAdulto(idade) {
    return ! (idade >= 18);
}

console.log(naoAdulto(20)); // falso
console.log(naoAdulto(16)); // verdadeiro