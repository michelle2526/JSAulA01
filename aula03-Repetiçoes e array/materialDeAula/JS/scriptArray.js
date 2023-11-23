
//ARRAY
var estoqueProdutos = ["tenis","bola","videoGame"];
console.log(estoqueProdutos);

//INDICE
console.log(estoqueProdutos);

//metodo alternativos
//  var frutas = Array();
//  frutas[0] = "banana";
//  frutas[1] = "abacaxi";
//  frutas[2] = "laranja";
//  console.log(frutas);

// COMANDOS ARRAY
 
estoqueProdutos.push("chocolate"); // adiciona um novo produto a lista
console.log(estoqueProdutos);

estoqueProdutos.unshift("refrigerante"); // adiciona  o produto no inicio da lista como primeiro produto ou (array)
console.log(estoqueProdutos);

console.log(`existe ${ estoqueProdutos.length} no estoqueProdutos`);  // diz a quantidade de produtos em estoque ou (array)

estoqueProdutos.pop(); // pop - remove um produto da ultima posiçao
console.log(estoqueProdutos);

estoqueProdutos.shift();
console.log(estoqueProdutos); // remove o primeiro elemento do estoque ou (array)

estoqueProdutos.splice(1,0,"chocolate"); // splice -(indice,quantos indices,novo elemento)
 console.log(estoqueProdutos);

console.log(estoqueProdutos.includes("chocolate")); // includes- busca item a lista