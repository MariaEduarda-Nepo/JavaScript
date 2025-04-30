//desafio: algoritimo para vacinação para COVID-19 acima de 60 anos
function vacinar(idade, permissao ) { return idade >= 60 && permissao;}

console.log(vacinar(17, true)); // falso
console.log(vacinar(76, true)); // verdadeiro
console.log(vacinar(30, true)); // falso