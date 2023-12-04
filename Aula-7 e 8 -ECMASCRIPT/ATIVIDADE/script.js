const jogos ={
    freeFire,
    Minecraf,
    Fortnite,
}

const jogosKey = Object.keys(jogos);
   var pesquisa = prompt("insira o jogo")
   var processo = jogosKey.indexOf(pesquisa);
  
  if (processo == -1){
    alert ("jogo nao encontrado");
   } else{
     alert(`jogo encontrado ${pesquisa} da nossa lista`);
   };