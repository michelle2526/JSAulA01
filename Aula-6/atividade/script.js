// function cadastrarFilme() {
//     // Obter valores do formulário
//     var nome = document.getElementById("nome").value;
//     var descricao = document.getElementById("descricao").value;
//     var data = document.getElementById("data").value;
//     var diretor = document.getElementById("diretor").value;
//     var categoria = document.getElementById("categoria").value;

//     // Validar se os campos foram preenchidos
//     if (nome && descricao && data && diretor && categoria) {
//         // Criar objeto de filme
//         var filme = {
//             nome: nome,
//             descricao: descricao,
//             data: data,
//             diretor: diretor,
//             categoria: categoria
//         };

//         // Adicionar filme à lista
//         adicionarFilmeNaLista(filme);

//         // Limpar o formulário
//         document.getElementById("formularioFilme").reset();
//     } else {
//         alert("Por favor, preencha todos os campos.");
//     }
// }

// function adicionarFilmeNaLista(filme) {
//     // Obter a lista de filmes
//     var filmeList = document.getElementById("filmeList");

//     // Criar um novo item de filme
//     var novoFilmeItem = document.createElement("li");
//     novoFilmeItem.className = "filmeItem";
//     novoFilmeItem.innerHTML = "<strong>Nome:</strong> " + filme.nome +
//         "<br><strong>Descrição:</strong> " + filme.descricao +
//         "<br><strong>Data de Lançamento:</strong> " + filme.data +
//         "<br><strong>Diretor:</strong> " + filme.diretor +
//         "<br><strong>Categoria:</strong> " + filme.categoria;

//     // Adicionar o novo item à lista
//     filmeList.appendChild(novoFilmeItem);
// }

class Filmes {
    constructor(valNome,valDescricao,valData,ValDiretor,valCategoria){
        this.nome = valNome;
        this.descricao = valDescricao;
        this.data = valData;
        this.diretor = ValDiretor;
        this.categoria = valCategoria;
    }
}

// seletores

const btnCadastrar = document.querySelector("#cadastrarFilmesbtn");
const btnlistar = document.querySelector("#listarFilmesbtn");
var filmes = []


btnCadastrar.addEventListener("click",cadastrar);
btnlistar.addEventListener("click",listar);     


function cadastrar (){
    let nome =document.querySelector("#nome").value;;
    let descricao = document.querySelector("#descricao").value;
    let data = document.querySelector("#data").value;
    let diretor = document.querySelector("#diretor").value;
    let categoria = document.querySelector("#categoria").value;


 filmes.push = (new Filmes (nome,descricao,data,diretor,categoria))
 

    
    
    
}

function listar(){
    let divresposta = document.querySelector("#resposta");


     filmes.forEach((elementos) =>{
        divresposta.innerHTML += `<div class="Filme">
        <h2> ${elementos.nome}</h2>
        <p> Descriçao do filme ; ${elementos.descricao}</p>
        <p> data de lancamento : ${elementos.data}</p>
        <p> diretor do filme : ${elementos.diretor}</p>
        <p> categoria do filme : ${elementos.categoria}</p>
        </div>
        `;

     }
     );
 }
    