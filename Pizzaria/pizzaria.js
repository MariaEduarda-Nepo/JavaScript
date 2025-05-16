
let Pizzaria = [];
// let pizzaParaAlterar = null;

function mostrarSecao(secao) {
    // esconde todas as secoes
    document.getElementById("cadastro").classList.add("hidden");

    //mostrar a seçao selecionada 
    document.getElementById(secao).classList.remove("hidden");
}

function atualizarLista() {
  // Exemplo: atualiza uma lista de pizzas em um elemento com id "listaPizzas"
  const lista = document.getElementById("listaPizzas");
  if (!lista) return;
  lista.innerHTML = "";
  Pizzaria.forEach((pizza, index) => {
    const item = document.createElement("li");
    item.textContent = `${pizza.nome} - R$${pizza.preco.toFixed(2)}: ${pizza.descricao}`;
    lista.appendChild(item);
  });
}
function criarCadastro() {
  const nome = document.getElementById("nome").value.trim();
  const preco = parseFloat(document.getElementById("preco").value);
  const descricao = document.getElementById("descricao").value.trim();
  let resultado = document.getElementById("resultado");
  if (nome && !isNaN(preco) && descricao) {
    Pizzaria.push({ nome, preco, descricao });
    document.getElementById("nome").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("descricao").value = "";
    resultado.innerHTML = `Pizza adicionada com sucesso!`;
    atualizarLista();
    // Exibe a mensagem ao cadastrar a pizza

  } else {

  }
}