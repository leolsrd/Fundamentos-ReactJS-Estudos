import PropTypes from "prop-types";

function Filho({ mensagem }) {
  return <p>{mensagem}</p>;
}

Filho.propTypes = {
  mensagem: PropTypes.string.isRequired,
};

export default Filho;
