

function compras() {
   let preco = Number(window.prompt('Qual o valor da compra : R$'))
   let porc = Number(window.prompt('Qual o percentual de desconto: R$'))
    let valor = (preco * porc) / 100
    let total = preco - valor
    let res = document.getElementById('result')
    res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.<p>`
    res.innerHTML += `<p>Com desconto de ${porc}%, o valor do desconto é R$${valor.toFixed(2)}.<p>`
    res.innerHTML += `<p>O valor final do produto com desconto é R$${total.toFixed(2)}.<p>`
    
}