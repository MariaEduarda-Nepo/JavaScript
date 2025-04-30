

// lava rápido do João - 3 serviços
// 1 - lavagem simples - R$ 20,00
// 2 - lavação completa - R$ 30,00
// 3 encerramento - R$ 50,00
// Apresentar o valor total da compra ou serviço escolhido e valor final e o nome do cliente e placa do veiculo
let nomeCliente = prompt("Digite o nome do cliente:");
let placaVeiculo = prompt("Digite a placa do veículo:");
let servicoEscolhido = prompt("Escolha o serviço: 1 - lavagem simples, 2 - lavação completa, 3 - encerramento");

let valorServico;

switch(servicoEscolhido) {
    case '1':
        valorServico = 20.00;
        break;
    case '2':
        valorServico = 30.00;
        break;
    case '3':
        valorServico = 50.00;
        break;
    default:
        alert("Serviço inválido");
        valorServico = 0.00;
}

if (valorServico > 0) {
    alert(`Cliente: ${nomeCliente}\nPlaca do Veículo: ${placaVeiculo}\nValor do Serviço: R$ ${valorServico.toFixed(2)}`);
}