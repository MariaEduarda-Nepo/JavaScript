// 1 exercicio:
// imprimir 11 vezes "ola mundo"

let hello = 'ola mundo';
for (let i = 0; i < 11; i++) {
    console.log(hello);
}

// 2 exercicio:
// imprimir resultado de uma tabuada de 5

let tabuada = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

// 3 exercicio:
//imprimir a soma dos numeros impares de 1 a 100 e imprimir os impares

let impares = 1;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        impares += i;
        console.log(i);
    }
}
console.log(impares);

// 4 exercicio:
// imprimir o resultado em sequencia de 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 e quando chegar a 1 imprimir 'feliz ano novo'

let anoNovo = 10;
for (let i = 10; i >= 1; i--) {
    console.log(i);
    if (i === 1) {
        console.log('feliz ano novo');
    }
}
