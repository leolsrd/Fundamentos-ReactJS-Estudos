import { useState } from "react";

function FormularioControlado() {
  const [nome, setNome] = useState("");

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome submentido: ${nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Nome:
        <input type="text" value={nome} onChange={handleChange} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioControlado;
