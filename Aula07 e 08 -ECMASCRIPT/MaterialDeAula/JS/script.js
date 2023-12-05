// replace / replaceall

var frase = " Ola mundo, o mundo e muito legal";
console.log(frase);

console.log(frase.replace("mundo","bacana"));
console.log(frase.replaceAll("mundo","bacana"));


//SETATRIBUTO

 document.querySelector("span").setAttribute("style","color: blue;");

// // CLASS LIST --> para gerenciar a classe


// // document.querySelector("#classlist").classList.remove("claro"); // remove o primeiro item
// // document.querySelector("#classlist").classList.add("claro"); // adiciona o item


//  var elemento = document.querySelector("#classlist");
//  if(elemento.classList.contains("claro")){ // contains se contem a classe
//      //elemento.classList.toggle("escuro"); // toggle troca um para o outro
//      elemento.classList.replace("claro","escuro"); // replace subistue o primeiro pelo segundo
//  }

 //INDEX OF

//  var FRUTAS = ['Morango','Banana','Laranja','Uva']

//  console.log(FRUTAS.includes("Morango")); // includes thue e false
//  console.log(FRUTAS.indexOf("Morango")); // index of vlor do index do array(caso nao exista,-1)

//  if(FRUTAS.indexOf("Abacaxi"== 1)){
//      console.log("nao achei")
//  }



 // SET TIMEOUT

 function msg(){
    return new Promise ((resolve) => {
        setTimeout(() => {
            console.log("seja Bem-vindo!");
        },5000);
        resolve()
        
    } )
   
    
 }

  async function carregando(){
      console.log("iniciou");
      await msg();
      console.log("Bom dia!");




}

carregando();

 


