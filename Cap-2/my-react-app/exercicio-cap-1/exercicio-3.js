// * Exercício 3 - Capítulo 1 (Destructuring com Arrays)
// ? Dado o array [3, 5, 7], utilize destructuring para obter o
// ? primeiro e terceiro elementos em variáveis separadas.

const number = [3, 5, 7, 9, 11, 13, 15];

const [primeiro, , terceiro, ...resto] = number;

console.log(primeiro, terceiro, resto);
