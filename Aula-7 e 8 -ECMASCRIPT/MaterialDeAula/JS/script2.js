// // PROMISSES

// const primeiroPromise = new Promise((resolve,reject) =>{
//       var nome = "Michelle";
//       if( nome == "Michelle"){
//         resolve(" o usuario é Michelle! Seja bem vindo!");
//       } else{
//         reject(" o usuario nao e Michelle! Acesso negado!")
//       }

// });

// // resolve - cumpri a promessa (deu certo!)
// // reject - nao cumpriu a promessa (deu errado)
// // then - roda a promessa
// // catch - roda apenas se tiver um erro!

// primeiroPromise.then((data) => {
//   console.log(data);
// }
// )

// // objectEntries
// const cursos = {
//   Frontend : 60,
//   BancoDeDados:40,
//   cyberSecurit:80,
//   Python : 100,
// }

// // KEYS DEVOLVE O NOME DO ATRIBUTOS
// const cursosKey = Object.keys(cursos);
//   var pesquisa = prompt("insira o curso")
//    var processo = cursosKey.indexOf(pesquisa);
  
//   if (processo == -1){
//     alert ("Deu ruim,nao encontrei");
//   } else{
//     alert(` deu bom,o curso e o ${pesquisa} da nossa lista`);
//   };


// // ENTRIES DEVOLVE TANTO NOME DO ATRIBUTO E SEU VALOR
// const cursosEntries = Object.entries(cursos);
// console.log(cursosEntries);

// console.log(cursos);


//   var resposta = document.querySelector("#resposta");
//   cursosArray = ["frontend","BancoDeDados","Python"];
//   var cursosMap = cursosArray.map((cadaElemento) => "<li>curso :"+cadaElemento+"</li>");
    

//  resposta.innerHTML = ` o map faz um processo para cada elemento do nosso array!olha só: <ul> ${cursosMap}</ul> `


 // PADSTART/ PADEND
  const nome = " Michelle ";
  const sobreNome = " araujo";
  const cartao = "2255";
  var nomeCompleto = sobreNome.padStart(16,nome) // PADSTAR CONTCATENA NO COMEÇO DO ELEMENTO
  console.log(nomeCompleto);

  var nomeCompleto2 = sobreNome.padEnd(16,nome) // PADEND CONCATENA NO FIM DO ELEMENTO
  console.log(nomeCompleto2);

  var cartaoBanco = cartao.padStart(16,"*");
  console.log(cartaoBanco);