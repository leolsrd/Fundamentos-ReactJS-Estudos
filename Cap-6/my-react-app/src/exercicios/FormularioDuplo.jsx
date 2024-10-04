import { useState } from "react";

function FormularioDuplo() {
  const [form, setForma] = useState({ nome: "", idade: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForma({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome: ${form.nome}, Idade: ${form.idade}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
          />
        </label>
        <br />
        <label htmlFor="idade">
          Idade:
          <input
            type="text"
            name="idade"
            value={form.idade}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default FormularioDuplo;
