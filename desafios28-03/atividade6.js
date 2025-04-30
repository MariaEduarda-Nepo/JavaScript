function verificarPlaca() {
    const placa = document.getElementById('placa').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    if (placa.startsWith('ABC')) {
        resultado.textContent = 'Acesso liberado sem cobrança!';
        resultado.style.color = 'green';
    } else {
        resultado.textContent = 'Cobrança de R$1,00 pela entrada.';
        resultado.style.color = 'red';
    }
}