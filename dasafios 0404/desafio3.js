function calcularNotas() {
    const nome = document.getElementById("nome").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const trabalhos = parseFloat(document.getElementById("trabalhos").value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(trabalhos)) {
        alert("Por favor, insira todas as notas corretamente.");
        return;
    }

    const media = (nota1 + nota2 + nota3 + trabalhos) / 4;
    let resultado;

    if (media >= 6) {
        resultado = "Aprovado";
    } else if (media >= 5) {
        resultado = "Recuperação";
    } else {
        resultado = "Reprovado";
    }

    alert(`Aluno: ${nome}\nMédia: ${media.toFixed(2)}\nResultado: ${resultado}`);
}