// calcular média de notas com base em duas notas, sendo a primeira 6 e a segunda 10 e mais 4 para trabalhos
let nota1 = parseFloat(prompt("Digite a primeira nota: ", "6"));
let nota2 = parseFloat(prompt("Digite a segunda nota: ", "10"));
let notaTrabalhos = parseFloat(prompt("Digite a nota dos trabalhos: ", "4"));

let media = (nota1 + nota2 + notaTrabalhos) / 3;

alert("A média das notas é: " + media);


