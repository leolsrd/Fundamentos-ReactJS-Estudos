import PropTypes from "prop-types";

function ListaNomes({ listaNomes }) {
  return (
    <ul>
      {listaNomes.map((nomeLista) => (
        <li key={nomeLista.id}>{nomeLista.nome}</li>
      ))}
    </ul>
  );
}

ListaNomes.propTypes = {
  listaNomes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      nome: PropTypes.string,
    })
  ),
};

export default ListaNomes;
