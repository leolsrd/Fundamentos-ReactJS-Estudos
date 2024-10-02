import { useState } from "react";

function FormularioMultiplosCampos() {
  const [form, setForm] = useState({ nome: "", idade: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    console.log(`Nome: ${form.nome}, Idade: ${form.idade}`);
  };

  return (
    <form>
      <label htmlFor="nome">
        Nome:
        <input
          type="text"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="idade">
        Idade:
        <input
          type="text"
          name="idade"
          value={form.idade}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}

export default FormularioMultiplosCampos;
