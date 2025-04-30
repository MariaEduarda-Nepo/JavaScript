const elevador = document.querySelectorAll('.elevador');
const andar = document.querySelectorAll('.andar-botao');
const tamanho_piso = 70; //Altura em cada andar


let andar_atual = 0; // Andar atual do elevador

andar.forEach(button => {
    button.addEventListener('click', () => {
        const andar_destino = parseInt(button.dataset.floor);
        moverElevador(andar_destino);
    });
});

function moverElevador(andar_destino) {
    const distancia = andar_destino * tamanho_piso //calcula a posição correta
    elevador[0].style.bottom = `${distancia}px`; // Move o elevador para o andar desejado
    andar_atual = andar_destino; // Atualiza o andar atual
}