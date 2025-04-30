function calcularTroco() {
    const produto = prompt("Informe o produto que deseja comprar:");
    const valorProduto = parseFloat(prompt("Informe o valor do produto:"));
    const valorPago = parseFloat(prompt("Informe o valor pago pelo produto:"));

    if (isNaN(valorProduto) || isNaN(valorPago)) {
        alert("Por favor, insira valores numéricos válidos.");
        return;
    }

    const troco = valorPago - valorProduto;

    alert(`Produto: ${produto}\nValor Pago: R$${valorPago.toFixed(2)}\nTroco: R$${troco.toFixed(2)}`);
}