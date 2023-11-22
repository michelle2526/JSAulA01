
//   CASE
// Escolha uma variavel
//  caso isso
//     isso
//     fimCASO
//    Caso...
 //    fimEscola

 // *Condiocionais*
 var numero1 = Number (prompt("Digite o primeiro numero"));
 var operador =  prompt (" digite o operador");
 var numero2 = Number (prompt("digite o seu segundo numero"));

 switch(operador){
     case "+":
         //alert(" funcionou");
         var resultado = numero1 + numero2;
         alert(`o resultado da operaçao e ${resultado}`);
           var novoCalculo = confirm("Deseja fazer um novo calculo");
                    if(novoCalculo ==  true){
                        location.reload();
                        }
         break;
         
         case "-":
             //alert("legal");
             var resultado = numero1 - numero2;
             alert(`o resultado da operaçao e ${resultado}`);
            var novoCalculo = confirm("Deseja fazer um novo calculo");
                 if(novoCalculo ==  true){
                    location.reload();
                    }
             break;

             case "*":
                var resultado = numero1 * numero2;
                alert(`o resultado da operaçao e ${resultado}`);
                    var novoCalculo = confirm("Deseja fazer um novo calculo");
                         location.reload();
                            if(novoCalculo ==  true){
                                location.reload();
                            }
                    break;

                case "/":
                    var resultado = numero1 / numero2;
                    alert(`o resultado da operaçao e ${resultado}`);
                   var novoCalculo = confirm("Deseja fazer um novo calculo");
                         if(novoCalculo ==  true){
                         }
                    break;

                    // case undefined:
                    //     alert(" operador invalido");
                    //     location.reload();
                    //     break;
                    //     case null:
                    //         alert(" operador invalido");
                    //     location.reload();
                    //     break;
                    default:
                        alert(" operador invalido");
                        location.reload();
                        break;

 }
