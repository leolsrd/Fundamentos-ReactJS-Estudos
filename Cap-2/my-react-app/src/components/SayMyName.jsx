import PropTypes from "prop-types";

function SayMyName({ nome }) {
  // nome = "Léo Lourenço";
  return <div>Fala aí {nome}, suave?</div>;
}

SayMyName.propTypes = {
  nome: PropTypes.string,
};

export default SayMyName;
