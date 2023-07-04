export class Aluno{
    nome;
    sobreNome;

    constructor(n1, n2){
        this.nome = n1;
        this.sobreNome = n2;
    }
    falar(){
        return this.nome; 
    }
}