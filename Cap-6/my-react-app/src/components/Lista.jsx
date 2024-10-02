import PropTypes from "prop-types";

function Lista({ itens }) {
  const handleClick = (e) => {
    alert(`Item clicado: ${e.target.textContent}`);
  };

  return (
    <ul onClick={handleClick}>
      {itens.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

Lista.propTypes = {
  itens: PropTypes.array,
};

export default Lista;
