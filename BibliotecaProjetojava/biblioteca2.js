let biblioteca = [];
let livroParaAlterar = null;

function monstrarSecao(secao){
    //esconde todas as seções
    document.getElementById("cadastro").classList.add("hidden");
    document.getElementById("consulta").classList.add("hidden");
    document.getElementById("alterar").classList.add("hidden");

    //mostra a seção selecionada
    document.getElementById(secao).classList.remove("hidden");
    }

function adicionarLivro() {
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;

    if (titulo && autor && ano) {
        biblioteca.push({ titulo, autor, ano });
        document.getElementById("titulo").value = "";
        document.getElementById("autor").value = "";
        document.getElementById("ano").value = "";
        atualizarLista();
        alert("Livro adicionado com sucesso!");
    } else {
        alert("Por favor, preencha todos os campos.");
    }


}

function buscarLivro() {
    const busca = document.getElementById("busca").value.toLowerCase();
    const resultados = biblioteca.filter((livro) =>
        livro.titulo.toLowerCase().includes(busca) ||
        livro.autor.toLowerCase().includes(busca)
    );
    atualizarLista(resultados);
}

function atualizarLista(lista = biblioteca) {
    const tabela = document.getElementById("lista-livros");
    tabela.innerHTML = "";

    lista.forEach((livro) => {
        const linha = document.createElement("tr");
            linha.innerHTML = 
                `<td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.ano}</td>`;
            tabela.appendChild(linha);
        });
    }

    function buscarLivroParaAlterar() {
        const busca = document.getElementById("busca-alterar").value.toLowerCase();
        const resultado = biblioteca.find((livro) =>
            livro.titulo.toLowerCase().includes(busca) ||
            livro.autor.toLowerCase().includes(busca)
        );

        if (resultado) {
            livroParaAlterar = resultado;
            document.getElementById("titulo-alterar").value = resultado.titulo;
            document.getElementById("autor-alterar").value = resultado.autor;
            document.getElementById("ano-alterar").value = resultado.ano;
        } else {
            alert("Livro não encontrado.");
        }
    }
    function alterarLivro() {
        if (livroParaAlterar) {
            const novoTitulo = document.getElementById("titulo-alterar").value;
            const novoAutor = document.getElementById("autor-alterar").value;
            const novoAno = parseInt(document.getElementById("ano-alterar").value);

            if (novoTitulo && novoAutor && novoAno) {
                livroParaAlterar.titulo = novoTitulo;
                livroParaAlterar.autor = novoAutor;
                livroParaAlterar.ano = novoAno;

                atualizarLista();
                alert("Livro alterado com sucesso!");
                document.getElementById("form-alterar").classList.add("hidden");
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        } }