import PropTypes from "prop-types";

function Button({ type }) {
  return <button type={type}>Click me</button>;
}

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
};

export default Button;
