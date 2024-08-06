// * Exercício 7 - Capítulo 1 - (Uso de Reduce)
// ? Dado o array [1, 2, 3, 4], calcule a soma de todos os elementos usando
// ? reduce().

const numbers = [1, 2, 3, 4];

const sumNumbers = numbers.reduce((current, next) => current + next, 0);

console.log(sumNumbers);
