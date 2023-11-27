class Cliente {
    nome;
    dataDeNascimento;
    cpf;
    conta;
    agencia;
    saldo;
    sacar(valor){
      //saldo -= valor;
      //saldo += valor;
      // this.atributo => atributo da classe
      if(this.saldo >= valor){
      this.saldo = this.saldo - valor;
      return "valor sacado" -valor;
    }else{
        return" Operaçao nao autorizada! Faca um deposito de pelo menos 0,01";
    }
    };

    Depositar(valor){
        if(this.saldo >= 0){
        this.saldo = this.saldo + valor;
        return  " valor depositado "+valor;
      }else{
          return" Operaçao nao autorizada";
      };
      }
      consultarSaldo(){
        return " o saldo da conta e de: R$"+this.saldo;
    }
}
   


var cliente1 = new Cliente();
cliente1.nome = "leonardo";
cliente1.dataDeNascimento  = "25/05/1999";
cliente1.cpf = 00666;
cliente1.conta = "001";
cliente1.agencia = "x001";
cliente1.saldo = 100;

console.log(cliente1);


var cliente2 = new Cliente();


// Comandos
cliente1.saldo =1;
cliente1.Depositar(2000);
cliente1.saldo();
cliente1.consultarSaldo();