function SaudacaoValueDefault({ nome }) {
  return <h1>Olá, {nome}</h1>;
}

SaudacaoValueDefault.defaultProps = {
  nome: "Visitante",
};

export default SaudacaoValueDefault;
