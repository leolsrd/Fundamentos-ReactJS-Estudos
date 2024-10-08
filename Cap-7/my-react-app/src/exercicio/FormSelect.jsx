import { useState } from "react";

function FormSelect() {
  const cidadesList = [
    "Porto de Galinhas",
    "Itamaracá",
    "Gravatá",
    "Ponta de Pedras",
    "Garanhuns",
  ];

  const [cidade, setCidade] = useState(cidadesList[0]);

  const handleChange = (e) => {
    setCidade(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Cidade escolhida para viajar: ${cidade}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="escolhaCidade">
        Escolha a cidade para aonde viajar:
        <select
          name="cidade"
          id="idCidade"
          value={cidade}
          onChange={handleChange}
        >
          {cidadesList.map((data, key) => (
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

export default FormSelect;
