// instalaçao
// visite https://code.jquery.com/jquery-3.7.1.js para baixar o arquivo!


// seletor JQUERY    = $(# OU . ELEMENTO)
var titulo = $("#tituloDaPagina").text("Jquery AULA");
console.log(titulo);

var paragrafo = $("#textoDaPagina").on("mouseover", function(){
    console.log("este texto e do site");

});


// comportamento
// jQUEY TEM CAPACIDADE DE AVALIAR VLORES NAO DEFINIDOS E VAZIOS

var usuario = "Michelle";
var usuarioIndefinido = undefined;

var usuarioResultado = $("#TesteIndefinido").text(usuario);

// ALGORITMO CONTAGEM DE CARACTERES

var blocoDeTexto = $("#blocoDeTexto").on("input",function(){
   let blocoDeTextoValue = $("#blocoDeTexto").val();
   let resposta = $("#numCaracteres")

   var contagem = blocoDeTextoValue.length;
   resposta.text(contagem);
});