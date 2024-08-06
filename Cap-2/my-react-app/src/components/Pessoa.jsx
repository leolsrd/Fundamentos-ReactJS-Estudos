import PropTypes from "prop-types";

function Pessoa({ nome, idade, profissao }) {
  return (
    <div>
      <h2>Nome: {nome}</h2>
      <p>Idade: {idade}</p>
      <p>Profissao: {profissao}</p>
    </div>
  );
}

Pessoa.propTypes = {
  nome: PropTypes.string,
  idade: PropTypes.number,
  profissao: PropTypes.string,
};

export default Pessoa;
