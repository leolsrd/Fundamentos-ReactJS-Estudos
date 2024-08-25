import { useState } from "react";

function FormularioCadastro() {
  const [formulario, setFormulario] = useState({
    userName: "",
    senha: "",
    confirmarSenha: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="userName"
          value={formulario.userName}
          onChange={handleChange}
          placeholder="Nome de usuário"
          autoComplete="current-userName"
        />
      </div>
      <div>
        <input
          type="password"
          name="senha"
          value={formulario.senha}
          onChange={handleChange}
          placeholder="Senha"
          autoComplete="current-password"
        />
      </div>
      <div>
        <input
          type="password"
          name="confirmarSenha"
          value={formulario.confirmarSenha}
          onChange={handleChange}
          placeholder="Confirmar Senha"
          autoComplete="current-password"
        />
      </div>
      <button type="submit">Enviar</button>
    </div>
  );
}

export default FormularioCadastro;
