import PropTypes from "prop-types";

function Contador3({ valor }) {
  return <p>Contador: {valor}</p>;
}

Contador3.propTypes = {
  valor: PropTypes.number,
};

export default Contador3;
