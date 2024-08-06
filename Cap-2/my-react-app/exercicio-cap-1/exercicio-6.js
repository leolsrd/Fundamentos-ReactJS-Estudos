// * Exercício 6 - Capítulo 1 (Uso de Filter e Arrow Functions)
// ? Dado o array [3, 5, 8, 10, 15], utilize o método filter() para
// ? selecionar apenas os números pares.

const numbers = [3, 5, 8, 10, 15];

const numbersPairs = numbers.filter((number) => number % 2 === 0);

console.log(numbersPairs);
