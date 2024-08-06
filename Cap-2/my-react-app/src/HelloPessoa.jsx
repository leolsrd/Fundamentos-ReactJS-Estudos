import Pessoa from "./components/Pessoa";

function HelloPessoa() {
  return (
    <div className="HelloPessoa">
      <Pessoa nome="Léo" idade="44" profissao="Programador" />
    </div>
  );
}

export default HelloPessoa;
