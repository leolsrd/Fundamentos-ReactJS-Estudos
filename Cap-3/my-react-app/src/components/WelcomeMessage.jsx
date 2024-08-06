/* eslint-disable react/prop-types */
// * import PropTypes from "prop-types";

// * function WelcomeMessage({ nome }) {
// *   return <h1>Olá, {nome}!</h1>;
// * }

// * WelcomeMessage.propTypes = {
// *  nome: PropTypes.string,
// * };

function WelcomeMessage(props) {
  return <h1>Olá, {props.name}</h1>;
}

export default WelcomeMessage;
