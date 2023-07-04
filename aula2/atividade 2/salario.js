export class Salario{

_aumento;


constructor(salario, meta, feito){
    this.salario = salario;
    this.meta = meta;
    this.feito = feito;
}

calculaSalario(){
    if(this.feito >= this.meta){
        this._aumento = this.salario * 1.1;
    }else{
        let msg = "Você não atingiu a meta. VAI TRABALHAR VAGABUNDO";
        return msg;

    }
}

get aumento(){
    return this._aumento;
}
}
