import PropTypes from "prop-types";

function Button({ label }) {
  return <button className={label.className}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
