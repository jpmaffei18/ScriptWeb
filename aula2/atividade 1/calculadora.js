export class Calculadora{
valor1;
valor2;

    constructor(n1, n2){
        this.valor1 = n1;
        this.valor2 = n2;
    }

    soma(){
        return this.valor1 + this.valor2;
           
    }

    subtracao(){
        return this.valor1 - this.valor2;
    }

    divisao(){
        return this.valor1 / this.valor2;
    }

    multiplicacao(){
        return this.valor1 * this.valor2;
    }

}