function changeLight() {
    const input = document.getElementById('inputValue').value;
    const redLight = document.getElementById('red');
    const yellowLight = document.getElementById('yellow');
    const greenLight = document.getElementById('green');

    // Reset all lights to gray
    redLight.style.backgroundColor = 'gray';
    yellowLight.style.backgroundColor = 'gray';
    greenLight.style.backgroundColor = 'gray';

    // Change light based on input
    if (input == 1) {
        redLight.style.backgroundColor = 'red';
        alert('Vermelho');
    } else if (input == 2) {
        yellowLight.style.backgroundColor = 'orange';
        alert('Laranja');
    } else if (input == 3) {
        greenLight.style.backgroundColor = 'green';
        alert('Verde');
    } else {
        alert('Por favor, insira um número válido (1, 2 ou 3).');
    }
}