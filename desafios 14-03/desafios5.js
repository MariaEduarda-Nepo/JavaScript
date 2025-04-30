function converter() {
    const taxaDeCambio = 5.25; // Exemplo de taxa de câmbio
    const reais = document.getElementById('reais').value;
    const dolares = (reais / taxaDeCambio).toFixed(2);
    document.getElementById('resultado').innerText = `Valor em dólares: $${dolares}`;
}