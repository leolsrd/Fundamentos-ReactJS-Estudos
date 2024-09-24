import PropTypes from "prop-types";

function Botao({ onClick, texto }) {
  return <button onClick={onClick}>{texto}</button>;
}

Botao.propTypes = {
  onClick: PropTypes.func,
  texto: PropTypes.string.isRequired,
};

export default Botao;
