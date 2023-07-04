class Pessoa {
    constructor(nome, idade) {
          this.nome = "joao";
          this.idade = "19";
        }

        falarNome(){
            return this.nome
        }

        falarIdade(){
            return this.idade
        }
    }

const aluno = new Pessoa();
aluno.nome = "João Pedro";
aluno.idade = 37;

console.log("Nome:" + aluno.falarNome());
console.log("Idade:" + aluno.falarIdade());

