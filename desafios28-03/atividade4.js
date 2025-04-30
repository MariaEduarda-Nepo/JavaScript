     // Array com os meses do ano
     const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Seleciona o elemento UL
    const listaMeses = document.getElementById('meses');

    // Itera sobre o array e adiciona os meses na lista
    meses.forEach(mes => {
        const item = document.createElement('li');
        item.textContent = mes;
        listaMeses.appendChild(item);
    });
    // Adiciona ícones aos meses
    const icones = [
        "🌱", "❄️", "🌸", "🌧️", "🌼", "☀️",
        "🏖️", "🍉", "🍂", "🎃", "🦃", "🎄"
    ];

    const itens = listaMeses.querySelectorAll('li');
    itens.forEach((item, index) => {
        const icone = document.createElement('span');
        icone.textContent = ` ${icones[index]}`;
        item.appendChild(icone);
    });