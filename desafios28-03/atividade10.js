function calculateTicketPrice() {
const age = parseInt(document.getElementById('age').value);
const isStudent = document.getElementById('student').value === 'yes';
const fullPrice = 20; // Valor da entrada inteira
let ticketPrice;

if (age <= 12 || age >= 60 || isStudent) {
    ticketPrice = fullPrice / 2; // Meia entrada
} else {
    ticketPrice = fullPrice; // Entrada inteira
}

document.getElementById('result').textContent = `O valor do ingresso é R$ ${ticketPrice.toFixed(2)}`;
}