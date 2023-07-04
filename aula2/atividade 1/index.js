import { Calculadora } from './calculadora.js';

const resultado = new Calculadora(4, 2);

console.log("SOMA: " + resultado.soma());
console.log("SUBTRAÇÃO: " + resultado.subtracao());
console.log("DIVISÃO: " + resultado.divisao());
console.log("MULTIPLICAÇÃO: " + resultado.multiplicacao());