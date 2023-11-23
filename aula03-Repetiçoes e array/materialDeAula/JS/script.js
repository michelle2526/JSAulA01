// Repatiçoes
// while * SIGNIFICA ENQUANTO* ( verifica e depois faz)

var contador = 0;


// enquanto(condiçao) faca
// contador + 1
// contador ++
//fIMenquanto

while ( contador <= 10){
    console.log(contador);
    //contador ++
    // ou tano um quanto o outro funciona
    contador = contador + 1;

}


// DO while * siginifica repita* ( faz e verifica)

// contador 
// ate (condiçao)

 var cont = 0;
do{
 console.log (`fiz $ {cont} vezes`);
 cont++;
} while( cont <= 10);

// FOR * SIGINIFCA PARA *
// PARA( var, condicao,controlador)
//FIMPARA

for (let controlador = 0; controlador <= 10; controlador++ ){
    console.log( controlador +" - for e legal");
}


// FOR EACH
console.log("elementos");
var elementos =["elemento1","elemento2","elemento3"];
 // funcion pseudofunction, anonima
elementos.forEach(( cadaElementos) => {
    let cont = 1
    console.log( "-"+ cadaElementos);

} );