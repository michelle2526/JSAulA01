class Aluno {
    constructor(valorNome,valorIdade,valorTurma){
     this.nome = valorNome;
     this.idade = valorIdade;
     this.turma = valorTurma;
}

    }

    class Curso{
        constructor(valorNome,valorDuracao, valorTipo){
            this.nome = valorNome;
            this.duracao = valorDuracao;
            this.tipo = valorTipo;
        }
    }
    
    var curso1 = new Curso ( "front",220, "Tecnologia");
    var curso2 = new Curso ( "java",240,"Tecnologia");



    var aluno1 = new Aluno( "leandro",25,curso1);
    var aluno2 = new Aluno( "alice",25, curso2);
