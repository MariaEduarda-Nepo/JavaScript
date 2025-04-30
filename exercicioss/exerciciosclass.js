
// exercicio 1 Verificação de Categoria de Idade

function classificarIdade(idade) {
    if (idade >= 0 && idade <= 12) {
        console.log("Você é uma criança.");
    } else if (idade >= 13 && idade <= 17) {
        console.log("Você é um adolescente.");
    } else if (idade >= 18 && idade <= 64) {
        console.log("Você é um adulto.");
    } else if (idade >= 65) {
        console.log("Você é um idoso.");
    } else {
        console.log("Idade inválida.");
    }
}



//exercicio 2 Verificação de Nota com Mensagem

let nota = 100;
function verificarNota(nota) {
    if (nota >= 90 && nota <= 100) {
        console.log("Excelente! Você tirou um A.");
    } else if (nota >= 80 && nota < 90) {
        console.log("Muito bom! Você tirou um B.");
    } else if (nota >= 70 && nota < 80) {
        console.log("Bom! Você tirou um C.");
    } else if (nota >= 60 && nota < 70) {
        console.log("Satisfatório. Você tirou um D.");
    } else if (nota >= 0 && nota < 60) {
        console.log("Insatisfatório. Você tirou um F.");
    } else {
        console.log("Nota inválida.");
    }
}
verificarNota(nota);

// exercicio 3 Verificação de Dia da Semana

let dia = 1;
function verificarDia(dia) {
    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;
        default:
            console.log("Dia inválido.");
    }
}
verificarDia(dia);

//exercicio 4 Verificação de Horário do Dia

let hora = 12;
function verificarHorario(hora) {
    if (hora >= 0 && hora < 12) {
        console.log("Bom dia!");
    } else if (hora >= 12 && hora < 18) {
        console.log("Boa tarde!");
    } else if (hora >= 18 && hora < 24) {
        console.log("Boa noite!");
    } else {
        console.log("Horário inválido.");
    }
}
verificarHorario(hora);

//exercicio 5 Verificação de Peso Ideal

let altura = 1.70;
let sexo = "F";
function verificarPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo === "M") {
        pesoIdeal = (72.7 * altura) - 58;
    } else if (sexo === "F") {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else {
        console.log("Sexo inválido.");
    }
    console.log(`Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`);
}
verificarPesoIdeal(altura, sexo);

//exercicio 6 Verificação de Número Primo

let numero = 7;
function verificarNumeroPrimo(numero) {
    let primo = true;
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        console.log("O número é primo.");
    } else {
        console.log("O número não é primo.");
    }
}
verificarNumeroPrimo(numero);

//exercicio 7 Verificação de Ano Bissexto

let ano = 2020;
function verificarAnoBissexto(ano) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
        console.log("O ano é bissexto.");
    } else {
        console.log("O ano não é bissexto.");
    }
}
verificarAnoBissexto(ano);

//exercicio 8 Verificação de Nota com Mensagem Personalizada

let nota2 = 100;
let mensagem;
function verificarNotaPersonalizada(nota2) {
    if (nota2 >= 90 && nota2 <= 100) {
        mensagem = "Excelente! Você tirou um A.";
    } else if (nota2 >= 80 && nota2 < 90) {
        mensagem = "Muito bom! Você tirou um B.";
    } else if (nota2 >= 70 && nota2 < 80) {
        mensagem = "Bom! Você tirou um C.";
    } else if (nota2 >= 60 && nota2 < 70) {
        mensagem = "Satisfatório. Você tirou um D.";
    } else if (nota2 >= 0 && nota2 < 60) {
        mensagem = "Insatisfatório. Você tirou um F.";
    } else {
        mensagem = "Nota inválida.";
    }
    console.log(mensagem);
}
verificarNotaPersonalizada(nota2);

//exercicio 9 Verificação de Temperatura com Mensagem

let temperatura = 30;
function verificarTemperatura(temperatura) {
    if (temperatura < 10) {
        console.log("Está muito frio!");
    } else if (temperatura >= 10 && temperatura < 20) {
        console.log("Está frio.");
    } else if (temperatura >= 20 && temperatura < 30) {
        console.log("Está agradável.");
    } else if (temperatura >= 30 && temperatura < 40) {
        console.log("Está quente.");
    } else {
        console.log("Está muito quente!");
    }
}
verificarTemperatura(temperatura);

//exercicio 10 Verificação de Desempenho de Vendas

let vendas = 1000;
function verificarDesempenhoVendas(vendas) {
    if (vendas < 500) {
        console.log("Desempenho ruim.");
    } else if (vendas >= 500 && vendas < 1000) {
        console.log("Desempenho mediano.");
    } else if (vendas >= 1000 && vendas < 5000) {
        console.log("Desempenho bom.");
    } else {
        console.log("Desempenho excelente!");
    }
}
verificarDesempenhoVendas(vendas);