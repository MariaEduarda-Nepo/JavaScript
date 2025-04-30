function realizarPedido() {
    const menu = {
        1: { nome: "Café Expresso", preco: 5.00 },
        2: { nome: "Cappuccino", preco: 8.00 },
        3: { nome: "Chocolate Quente", preco: 7.50 },
        4: { nome: "Chá", preco: 4.00 }
    };

    let total = 0;
    let continuar = true;
    let pedidoDetalhes = "";

    while (continuar) {
        let opcao = prompt(
            "Bem-vindo ao Café Expresso! Escolha uma opção do menu:\n" +
            "1 - Café Expresso: R$ 5,00\n" +
            "2 - Cappuccino: R$ 8,00\n" +
            "3 - Chocolate Quente: R$ 7,50\n" +
            "4 - Chá: R$ 4,00\n" +
            "Digite 0 para finalizar o pedido."
        );

        opcao = parseInt(opcao);

        if (opcao === 0) {
            continuar = false;
        } else if (menu[opcao]) {
            const pedido = menu[opcao];
            total += pedido.preco;
            pedidoDetalhes += `${pedido.nome} - R$ ${pedido.preco.toFixed(2)}\n`;
            alert(`Você adicionou: ${pedido.nome}\nSubtotal: R$ ${total.toFixed(2)}`);
        } else {
            alert("Opção inválida. Por favor, tente novamente.");
        }
    }

    alert(`Resumo do pedido:\n${pedidoDetalhes}Total: R$ ${total.toFixed(2)}`);
}