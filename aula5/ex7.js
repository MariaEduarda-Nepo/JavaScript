function calcularMedia(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }
  return soma / numeros.length;
}
let numeros = [];
let quantidade = parseInt(prompt("Digite a quantidade de números:"));           


for (let i = 0; i < quantidade; i++) {
    let numero = parseFloat(prompt(`Digite um número: ${i + 1}`));
    numeros.push(numero);
}   


let media = calcularMedia(numeros);
alert(`A média dos números é ${media}`);