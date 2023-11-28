// class Carro{
//     constructor(valorMarca,valorModelo,valorAno,valorCor,VelocidadeMaxima,VelocidadeAtual){
//         this.marca = valorMarca;
//         this.modelo = valorModelo;
//         this.ano = valorAno;
//         this.cor = valorCor;
//         this.velocidadeAtual = 0;
//         this.VelocidadeMaxima = VelocidadeMaxima;
//    }
// }

// var carro = new Carro ( "VW","G4", "2006","preto", 150);




// correçao professor
 // velocidade atual + valor
 class Carro {
     constructor( marca,modelo,ano,cor,velocidademax){
          this.marca = marca;
          this.modelo = modelo;
          this.ano = ano ;
          this.cor = cor;
          this.velocidademax = velocidademax;
          this. velocidadeAtual = 0;
     }

     acelerar(velocidadeAcelerada){
         if( velocidadeAcelerada <= 0 ){
             return "velocidade nao permitida! coloque uma aceleracao acima de 0";
             

         } else{
             if( velocidadeAcelerada + this.velocidadeAtual > this.velocidademax){
                 return " velocidade nao permitida! velocidade maxima utrapassada!";
             } else{
                 this.velocidadeAtual += velocidadeAcelerada;
                 return"voce acelerou" + velocidadeAcelerada;
             }
         }
      
     }
 }

 var btnCarro = document.querySelector("#btnCarro");

 btnCarro.addEventListener('click',criarCarro);

 function criarCarro(){
     let marcaInput = document.querySelector("#marca").value;
     let modeloInput = document.querySelector("#modelo").value;
     let dataInput = document.querySelector("#data").value;
     let corInput = document.querySelector("#cor").value;
     let velocidademaxInput = document.querySelector("#velocidademax").value;
     let resposta = document.querySelector("#resposta");

     var carro = new Carro(marcaInput, modeloInput,dataInput,corInput,velocidademaxInput);
    
     resposta.innerHTML = `<div class ="post">
     <h3> Modelo :${carro.modelo}</h3>
     <p>Marca :${carro.marca}</p>
     <p>Ano :${carro.ano}</p>
     <p>Cor : <span style="color:${carro.cor}">Carro</span></p>
     <p>Velocidademax :${carro.velocidademax}</p>
     </div>`;
    

 }   

