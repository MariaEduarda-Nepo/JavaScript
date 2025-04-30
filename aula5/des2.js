function supermercado() {
    let total = 0;
    let continuar = true;

    while (continuar) {
        let produto = prompt("Digite o nome do produto:");
        let preco = parseFloat(prompt("Digite o preço do produto:"));
        total += preco;

        continuar = prompt("Deseja adicionar outro produto? (s/n)") === 's';
    }

    alert("O total da compra é: R$ " + total.toFixed(2));
}

supermercado(); 