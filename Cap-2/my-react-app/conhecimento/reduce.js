// * Reduce
// * Reduce ele processa e reduz os elementos de um array/ lista a um único
// * valor.
// * Ele executa uma função em cada elemento do array/ lista resultando em um
// * único valor de saída.

const number = [1, 2, 3, 4, 5];
const sum = number.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

// ? O 0 (zero) acima é o valor iniciaal do accumulator
