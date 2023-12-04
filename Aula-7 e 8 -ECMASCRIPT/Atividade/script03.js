 var jogos =["call of duty","GTA","DOOM","RESIDENT EVIL","alone in the dark"];

const btnPesquisar = document.querySelector("#btnPesquisar");
btnPesquisar.addEventListener("click", pesquisar);

function pesquisar(){
    let pesquisarInput = document.querySelector("#pesquisa").value
    let resposta = document.querySelector("#resposta");


    var resultado = jogos.includes(pesquisarInput);

    if(resultado == true){
        resposta.innerHTML = `jogo encontrado! o jogo pesquisado foi ${pesquisarInput}`
    }else{
        resposta.innerHTML = ` jogo nao encontrado!`;
    }

}
