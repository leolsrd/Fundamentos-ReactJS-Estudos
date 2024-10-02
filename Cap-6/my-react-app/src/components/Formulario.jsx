import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  const handleChange = (e) => {
    setNome(e.target.value);
    console.log(nome);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome submetido: ${nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Submeter</button>
    </form>
  );
}

export default Formulario;
