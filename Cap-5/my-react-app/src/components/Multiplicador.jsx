import { useState } from "react";

function Multiplicador() {
  const [numero, setNumero] = useState(1);
  const [fator, setFator] = useState(2);

  const multiplicar = () => {
    setNumero((numeroAnterior) => numeroAnterior * fator);
  };

  const handleFactorChange = (event) => {
    setFator(event.target.value);
  };

  return (
    <div>
      <p>Número: {numero}</p>
      <input
        type="number"
        value={fator}
        onChange={handleFactorChange}
        placeholder="Fator"
      />
      <button onClick={multiplicar}>Multiplicar</button>
    </div>
  );
}

export default Multiplicador;
