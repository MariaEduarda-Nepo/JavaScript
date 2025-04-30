function checkStock() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const result = document.getElementById('result');

    if (isNaN(quantity)) {
        result.textContent = "Por favor, insira uma quantidade válida.";
        result.className = '';
        return;
    }

    if (quantity < 30) {
        result.textContent = "Estoque Baixo";
        result.className = 'low-stock';
    } else if (quantity > 100) {
        result.textContent = "Estoque Bom";
        result.className = 'good-stock';
    } else {
        result.textContent = "Estoque dentro do limite normal.";
        result.className = '';
    }
}