

        function Dados() {
            let nome = prompt("Qual é o seu nome?");
            let idade = prompt("Qual é a sua idade?");
            if (nome && idade) {
                alert(`Nome: ${nome}, Idade: ${idade}`);
            } else {
                alert("Por favor, preencha todas as informações.");
            }
        }