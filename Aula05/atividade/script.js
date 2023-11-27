class Carro{
    constructor(valorMarca,valorModelo,valorAno,valorCor,VelocidadeMaxima,VelocidadeAtual){
        this.marca = valorMarca;
        this.modelo = valorModelo;
        this.ano = valorAno;
        this.cor = valorCor;
        this.velocidadeAtual = VelocidadeAtual;
        this.VelocidadeMaxima = VelocidadeMaxima;
   }
}

var carro = new Carro ( "VW",G4, "2006","preto",2224555, 150);