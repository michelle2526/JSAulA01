// pegar input
var input = document.querySelector("#inputText");
var mensagem = document.querySelector("#mensagem");


// adicionar evento foco e perder foco
input.addEventListener("focus", mudarCor);
input.addEventListener9("blur", mudarCorVerifica);


// fazer input ficar amarelo quando selecionado
function mudarCor(){
    let mensagem = document.querySelector("#mensagem")
    input.style.backgroundColor = "yellow";
    mensagem.innerHTML = " Digite uma senha com mais de 3 digitos"
}
 function mudarCorVerifica(){
     let inputValor = input.value;

    if(inputValor  < 3){
       input.style.backgroundColor = "red";
    } else{
        input.style.backgroundColor = "green";
    }

 }



// pegar quantidade de caracteres
// vereficar se tem 3 ou mais para verde
//verificar se menos que 3 para  vermelho

