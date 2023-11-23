// *OPERADORES ALTERNÁRIOS*
// && E ( DUAS CONDIÇOES DEVERAO SER IGUAIS EM RESULTADO)
// || OU ( SE UMA DAS CONDIÇOES FOR VERDADEIRA SERA EXECUTADA)
// ! NAO (SE NAO FOR A CONDIÇAO)


// solicitar a idade do usuario

 var idade =  Number (prompt("informe sua idade"));

 idade = parseInt(idade);

 if( idade >= 0 && idade < 15){
     alert("Criança");

 }else if( idade >= 15 && idade < 30){
     alert("Jovem");

 }else if ( idade >= 30 &&  idade < 60){
     alert("Adulto");

 }else if (idade >= 60){
     alert("Idoso");
 }else{
     alert("Idade inválida");
 }


// Correção do professor

// var idade = Number(prompt( "qual e a sua idade?"));

// if( idade <= 0){
//     alert("idade invalida,tente novamente");
//     location.reload();
// }
// if(idade > 0  && idade  < 15){
//     alert("Criança")
//     location.reload
// }
// if(idade > 15  && idade  < 30){
//     alert("Jovem")
//     location.reload
// }

// if(idade > 30  && idade  < 60){
//     alert("Adulto")
//     location.reload
// }

// if(idade >= 60){
//     alert("idoso")
//     location.reload
// }

// if else
