import { useState } from "react";

function FormValidacao() {
  const [erro, setErro] = useState("");
  const [nome, setNome] = useState("");

  const validarNome = (nome) => {
    console.log("Chegou na validação");
    if (nome.trim() === "") {
      const erroRetornado = "Nome não pode ser vazio";
      setErro(erroRetornado);
      return erroRetornado;
    } else if (nome.trim() <= 2) {
      const erroRetornado = "Nome tem que ter mais que 2 caracteres";
      return erroRetornado;
    } else if (nome.trim() === Number) {
      const erroRetornado = "Nome não pode ter números";
      return erroRetornado;
    } else {
      const erroRetornado = "";
      return erroRetornado;
    }
  };

  const handleChange = (e) => {
    // validarNome(e.target.value);
    validarNome(e.target.value);
    setNome(e.target.value);
    console.log(`Erro change: ${erro}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome digitado: ${nome}`);
    console.log(`Erros: ${erro}`);
  };

  const handleBlur = (e) => {
    // validarNome(e.target.value);
    // setErro(validarNome(e.target.value));
    setNome(e.target.value);
    console.log(`Erro: ${erro}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">
        Digite seu nome:
        <input
          type="text"
          name="nome"
          id="idNome"
          onChange={handleChange}
          value={nome}
          onBlur={handleBlur}
        />
        <p>{erro}</p>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormValidacao;
