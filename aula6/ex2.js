function media() {
    let nome = window.prompt('Qual é o nome do aluno?')
    let n1 = Number(window.prompt(`Qual é a nota de ${nome}?`))
    let n2 = Number(window.prompt(`Alem de ${n1}, qual é a outra nota de ${nome}?`))
    med = (n1 + n2) / 2;

    let msg // cria uma variavel e deixa ela vazia
    if (med >= 6) { //se por acaso a media for maior ou igual a 6
        msg = 'meus parabens!'
    } else { // se não..
        msg = 'estude mais um pouco!'
    }


let res = document.getElementById('situacao')
res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
res.innerHTML = `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark></p>`
res.innerHTML = `<p>a média final será <mark>${med}</mark></p>`
res.innerHTML = `<p>A mensagem que temos é: <strong style='color: pink;'>${msg}</strong></p>`
}