// * Exercício 4 - Capítulo 1 (Destructuring com Objetos)
// ? Dado o objeto { nome: 'React', tipo: 'Biblioteca', empresa: 'Facebook' },
// ? extraia as propriedades nome e empresa em variáveis.

const { nome, empresa } = {
  nome: "React",
  tipo: "Biblioteca",
  empresa: "Facebook",
};

console.log(nome, empresa);
