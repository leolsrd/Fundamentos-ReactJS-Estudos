// * Exercício 1, 2, 3, 4 (Acabei sem querer resolvendo os 4 exercício de uma
// * vez)
// * Enunciado:  Crie um componente funcional chamado BemVindo que aceita
// * uma prop nome e renderiza uma saudação. Em seguida, use esse componente
// * no seu componente principal para renderizar uma saudação personalizada.

import PropTypes from "prop-types";

function BemVindo({ nome = "Desconhecido" }) {
  return <h1>Olá, {nome}!</h1>;
}

BemVindo.propTypes = {
  nome: PropTypes.string.isRequired,
};

export default BemVindo;
