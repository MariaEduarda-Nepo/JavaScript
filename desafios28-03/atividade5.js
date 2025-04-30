function rastrearPedido() {
    const sigla = document.getElementById("sigla").value.toUpperCase();
    let estado;

    switch (sigla) {
        case "AB":
            estado = "São Paulo (SP)";
            break;
        case "CD":
            estado = "Rio de Janeiro (RJ)";
            break;
        case "EF":
            estado = "Minas Gerais (MG)";
            break;
        default:
            estado = "Sigla inválida. Por favor, tente novamente.";
    }

    document.getElementById("resultado").innerText = estado;
}