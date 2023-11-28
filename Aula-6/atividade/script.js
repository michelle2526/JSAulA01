function cadastrarFilme() {
    // Obter valores do formulário
    var nome = document.getElementById("nome").value;
    var descricao = document.getElementById("descricao").value;
    var data = document.getElementById("data").value;
    var diretor = document.getElementById("diretor").value;
    var categoria = document.getElementById("categoria").value;

    // Validar se os campos foram preenchidos
    if (nome && descricao && data && diretor && categoria) {
        // Criar objeto de filme
        var filme = {
            nome: nome,
            descricao: descricao,
            data: data,
            diretor: diretor,
            categoria: categoria
        };

        // Adicionar filme à lista
        adicionarFilmeNaLista(filme);

        // Limpar o formulário
        document.getElementById("formularioFilme").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

function adicionarFilmeNaLista(filme) {
    // Obter a lista de filmes
    var filmeList = document.getElementById("filmeList");

    // Criar um novo item de filme
    var novoFilmeItem = document.createElement("li");
    novoFilmeItem.className = "filmeItem";
    novoFilmeItem.innerHTML = "<strong>Nome:</strong> " + filme.nome +
        "<br><strong>Descrição:</strong> " + filme.descricao +
        "<br><strong>Data de Lançamento:</strong> " + filme.data +
        "<br><strong>Diretor:</strong> " + filme.diretor +
        "<br><strong>Categoria:</strong> " + filme.categoria;

    // Adicionar o novo item à lista
    filmeList.appendChild(novoFilmeItem);
}