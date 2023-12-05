

alert("deseja fechar sua conta?")
 var numeroDeclientes =  Number (prompt("quanos clientes estao na mesa?"));
 var valorConta =  Number (prompt("Digite o valor da conta"));

 var Dividir = valorConta / numeroDeclientes;

//  parseInt(valordividido*100)100

 alert(` o valor para cada cliente é de  ${Dividir.toFixed}`);