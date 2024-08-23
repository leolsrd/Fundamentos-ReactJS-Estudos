// * Exercício 1
// * Enunciado:  Crie um componente funcional chamado BemVindo que aceita
// * uma prop nome e renderiza uma saudação. Em seguida, use esse componente
// * no seu componente principal para renderizar uma saudação personalizada.

import PropTypes from "prop-types";

function BemVindo({ nome = "Desconhecido" }) {
  return <h1>Olá, {nome}</h1>;
}

BemVindo.propTypes = {
  nome: PropTypes.string,
};

export default BemVindo;
