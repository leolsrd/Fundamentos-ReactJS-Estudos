import PropTypes from "prop-types";

function WelcomeFunction({ name }) {
  return <h1>Olá, {name}</h1>;
}

WelcomeFunction.propTypes = {
  name: PropTypes.string,
};

export default WelcomeFunction;
