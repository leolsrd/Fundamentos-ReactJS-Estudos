import { useState } from "react";

function FormularioOpcoes() {
  const [aceitaTermos, setAceitaTermos] = useState(false);

  const [cor, setCor] = useState("vermelho");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Termos Aceitos: ${
        aceitaTermos === true ? "Sim" : "Não"
      }, Cor selectionada: ${cor}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="termos">
        Aceita os termos?
        <input
          type="checkbox"
          checked={aceitaTermos}
          onChange={() => setAceitaTermos(!aceitaTermos)}
        />
      </label>
      <div>
        Escolha sua cor:
        <label htmlFor="cor-vermelho">
          Vermelho
          <input
            type="radio"
            value="vermelho"
            checked={cor === "vermelho"}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
        <label htmlFor="cor-azul">
          Azul
          <input
            type="radio"
            value="azul"
            checked={cor === "azul"}
            onChange={(e) => setCor(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioOpcoes;
