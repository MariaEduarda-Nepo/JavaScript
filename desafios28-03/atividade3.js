function calcularTotal() {
    const produtos = [
        { codigo: 1, nome: "Produto A", preco: 100 },
        { codigo: 2, nome: "Produto B", preco: 200 },
        { codigo: 10, nome: "Produto C", preco: 300 },
        { codigo: 3, nome: "Produto D", preco: 400 }
    ];

    let total = 0;

    produtos.forEach(produto => {
        const quantidade = parseInt(document.getElementById(`quantidade-${produto.codigo}`).value) || 0;
        let precoFinal = produto.preco;

        if (produto.codigo === 1 || produto.codigo === 10) {
            precoFinal *= 1.10; // Aumento de 10%
        }

        total += precoFinal * quantidade;
    });

    document.getElementById("resultado").innerText = `Total da compra: R$ ${total.toFixed(2)}`;
}