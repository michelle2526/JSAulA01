// *OPERADORES  LOGICOS*(COMPARAR)
// > MOIOR QUE
// < MENOR QUE 
// != DIFERENTE (<>)
// == IGUAL (=RECEBE, == COMPARAR VALOR, ===COMPARA VALOR E TIPO)
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL

// *OPERADORES ALTERNÁRIOS*
// && E ( DUAS CONDIÇOES DEVERAO SER IGUAIS EM RESULTADO)
// || OU ( SE UMA DAS CONDIÇOES FOR VERDADEIRA SERA EXECUTADA)
// ! NAO (SE NAO FOR A CONDIÇAO)

// *CONDICIONAIS* 
// IF( SE  SENAO)
 if(true){
     console.log("sou verdadeiro");
 }else{
     console.log("sou falso");
 }

//  *verificar idade*

 var idade = Number (prompt("Qual é a sua idade?"));

 if(idade >= 18){
     alert("seja bem vindo!");

 } else{
     if(idade == 0){
         alert("idade inavlida, tente novamente!");
         location.reload();
     }else{
         alert("vace nao autorizaçao para entrar neste site!");
         location.href = "https://www.google.com.br/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjt37q1yNeCAxUGr5UCHbOZBy8QPAgJ" 
     }


     alert("Voce nao tem autorizaçao para entrar neste site!");
      //location.reload(); //location comando para nao deixar o menor entrar no site
      // location.href = "https://www.google.com.br/webhp?hl=pt-BR&sa=X&ved=0ahUKEwjt37q1yNeCAxUGr5UCHbOZBy8QPAgJ" muda a localizaçao para outra pagina
 }

//  condiçao ? bloco1 : bloco2 if ternario
// x > 10 ? alert("legal") : ("maneiro")