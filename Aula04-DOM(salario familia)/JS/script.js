 var btnCalcular = document.querySelector("#btnCalcular");

btnCalcular.addEventListener("click",calcular);


function calcular(){
    //var empregado = document.getElementById("empregado");
let empregado = document.querySelector("#empregado").value;
let filhos = document.querySelector("#filhos").value;
let salarios = document.querySelector("#salarios").value;
let resultadoSpan = document.querySelector("#resultado");
     if( filhos == 0 || salarios == 0){
         resultadoSpan.innerHTML = ` dados invalidos! insira as informaçoes corretamente`;


    
     } else if(salarios <= 806.80){
      let resultado = filhos * 41.27;
      resultadoSpan.innerHTML = ` o salario familia do empregado ${empregado} e de R$ ${resultado}`;
      
    }else if(salarios >= 806.81 && salarios <= 1212.64){
        let resultado = filhos * 29.16;
      resultadoSpan.innerHTML = ` o salario familia do empregado ${empregado} e de R$ ${resultado}`;

    } else{
        resultadoSpan.innerHTML = ` Nao ha salario familia para o empregado ${empregado}`;
    }
}