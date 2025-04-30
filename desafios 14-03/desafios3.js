function mostrarAntecessorSucessor() {
    const numero = parseInt(document.getElementById('numero').value);
    if (!isNaN(numero)) {
        const antecessor = numero - 1;
        const sucessor = numero + 1;
        alert(`O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`);
    } else {
        alert('Por favor, insira um número válido.');
    }
}