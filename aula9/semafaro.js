let estado = 0;

function mudarLuz() {
    const luzVermelha = document.getElementById("vermelha");
    const luzAmarela = document.getElementById("amarela");
    const luzVerde = document.getElementById("verde");
    const luzLaranja = document.getElementById("laranja");
    const luzRosa = document.getElementById("rosa");
    
    if (luzVermelha) luzVermelha.classList.remove("vermelha");
    if (luzAmarela) luzAmarela.classList.remove("amarela");
    if (luzVerde) luzVerde.classList.remove("verde");
    if (luzLaranja) luzLaranja.classList.remove("laranja");
    if (luzRosa) luzRosa.classList.remove("rosa");

    if (estado === 0) {
        if (luzVermelha) luzVermelha.classList.add("vermelha");
        estado = 1;
    }
    else if (estado === 1) {
        if (luzAmarela) luzAmarela.classList.add("amarela");
        estado = 2;
    } 
    else if (estado === 2) {
        if (luzVerde) luzVerde.classList.add("verde");
        estado = 3;
    } 
    else if (estado === 3) {
        if (luzLaranja) luzLaranja.classList.add("laranja");
        estado = 4;
    } 
    else if (estado === 4) {
        if (luzRosa) luzRosa.classList.add("rosa");
        estado = 0;
    }       

}