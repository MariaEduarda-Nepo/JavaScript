function verificarEmprestimo() {
    const tipoUsuario = document.getElementById("tipoUsuario").value;
    const quantidadeLivros = parseInt(document.getElementById("quantidadeLivros").value);
    let limiteLivros;

    if (tipoUsuario === "estudante") {
        limiteLivros = 3;
    } else if (tipoUsuario === "professor") {
        limiteLivros = 5;
    } else if (tipoUsuario === "visitante") {
        limiteLivros = 1;
    } else {
        alert("Tipo de usuário inválido!");
        return;
    }

    if (quantidadeLivros <= limiteLivros) {
        alert("Empréstimo permitido!");
    } else {
        alert("Empréstimo não permitido! Limite de livros excedido.");
    }
}