let temperatura = parseFloat(prompt("Digite a temperatura: "));
if (temperatura > 30) {
    console.log("Está calor!");
    //prompt(temperatursa);
} else if (temperatura >= 20) {
    console.log("está agradável!");
} else if (temperatura >= 10) {
    console.log("Está frio!");
} else {
    console.log("Está muito frio!");
    alert(temperatura);
} 