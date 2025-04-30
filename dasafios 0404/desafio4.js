document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        const imc = weight / (height * height);
        let classification = '';

        if (imc < 18.5) {
            classification = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc <= 24.9) {
            classification = 'Peso normal';
        } else if (imc >= 25 && imc <= 29.9) {
            classification = 'Sobrepeso';
        } else {
            classification = 'Obesidade';
        }

        document.getElementById('result').textContent = 
            `${name}, seu IMC é ${imc.toFixed(2)} (${classification}).`;
    } else {
        document.getElementById('result').textContent = 
            'Por favor, insira valores válidos para peso e altura.';
    }
});