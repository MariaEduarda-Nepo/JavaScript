function reservarProduto() {
    const nomeCliente = prompt("Digite o nome do cliente:");
    if (!nomeCliente) {
        alert("O nome do cliente é obrigatório!");
        return;
    }

    const nomeProduto = prompt("Digite o nome do produto:");
    if (!nomeProduto) {
        alert("O nome do produto é obrigatório!");
        return;
    }

    const quantidade = prompt("Digite a quantidade do produto:");
    if (!quantidade || isNaN(quantidade) || quantidade <= 0) {
        alert("A quantidade deve ser um número válido maior que zero!");
        return;
    }

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Reserva Confirmada</h2>
        <p><strong>Cliente:</strong> ${nomeCliente}</p>
        <p><strong>Produto:</strong> ${nomeProduto}</p>
        <p><strong>Quantidade:</strong> ${quantidade}</p>
    `;
    resultadoDiv.style.display = "block";
}