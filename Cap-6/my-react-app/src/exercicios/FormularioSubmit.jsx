import { useState } from "react";

function FormularioSubmit() {
  const [form, setForm] = useState({ nome: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(`Nome: ${form.nome}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Olá, ${form.nome}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Digite seu nome:
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormularioSubmit;
