let selectedService = null;
let selectedPrice = 0;

function selectService(service, price) {
    selectedService = service;
    selectedPrice = price;
    alert(`Serviço selecionado: ${service} - R$${price}`);
}

function generateSummary(event) {
    event.preventDefault();
    const clientName = document.getElementById('clientName').value;

    if (!selectedService) {
        alert('Por favor, selecione um serviço antes de finalizar.');
        return;
    }

    const summaryDiv = document.getElementById('summary');
    summaryDiv.innerHTML = `
        <h2>Resumo do Serviço</h2>
        <p><strong>Cliente:</strong> ${clientName}</p>
        <p><strong>Serviço Realizado:</strong> ${selectedService}</p>
        <p><strong>Valor Total:</strong> R$${selectedPrice}</p>
    `;
    summaryDiv.style.display = 'block';
}