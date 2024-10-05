import { useState } from "react";

function FormularioSelecao() {
  const listaFrutas = ["Abacaxi", "Banana", "Kiwi", "Mamão", "Maçã"];

  const [fruta, setFruta] = useState(listaFrutas[0]);

  const handleChange = (e) => {
    setFruta(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Fruta escolhida: ${fruta}`);
  };

  return (
    <form method="post" onSubmit={handleSubmit}>
      <label htmlFor="fruta">
        Escolha sua fruta:
        <select name="fruta" id="idFruta" value={fruta} onChange={handleChange}>
          {/* <option value="maçã">Maçã</option>
          <option value="banana">Banana</option>
          <option value="mamão">Mamão</option> */}
          {listaFrutas.map((data, key) => (
            <option value={data} key={key}>
              {data}
            </option>
          ))}
        </select>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioSelecao;
