import { useState } from "react";

function FormValidacao() {
  const [erro, setErro] = useState("");
  const [nome, setNome] = useState("");

  // const validarNome = () => {
  //   console.log("Chegou na validação");
  //   if (nome.trim() === "") {
  //     const erroRetornado = "Nome não pode ser vazio";
  //     console.log(erroRetornado);
  //     setErro(erroRetornado);
  //   } else if (nome.trim() <= 2) {
  //     const erroRetornado = "Nome tem que ter mais que 2 caracteres";
  //     console.log(erroRetornado);
  //     setErro(erroRetornado);
  //   } else if (nome.trim() === Number) {
  //     const erroRetornado = "Nome não pode ter números";
  //     console.log(erroRetornado);
  //     setErro(erroRetornado);
  //   } else {
  //     const erroRetornado = "";
  //     console.log(erroRetornado);
  //     setErro(erroRetornado);
  //   }
  // };

  const handleChange = (e) => {
    setNome(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Nome digitado: ${nome}`);
    console.log(`Erro submit: ${erro}`);
  };

  const handleBlur = () => {
    console.log(`Nome Trim: ${nome.trim()}`);
    if (nome.trim() === "") {
      const erroRetornado = "Nome não pode ser vazio";
      console.log(erroRetornado);
      setErro(erroRetornado);
    } else if (nome.length <= 2) {
      const erroRetornado = "Nome tem que ter mais que 2 caracteres";
      console.log(erroRetornado);
      setErro(erroRetornado);
    } else if (!isNaN(nome)) {
      const erroRetornado = "Nome não pode ter números";
      console.log(erroRetornado);
      setErro(erroRetornado);
    } else {
      const erroRetornado = "";
      console.log(erroRetornado);
      setErro(erroRetornado);
    }
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
        {erro && <p className="error-message">{erro}</p>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormValidacao;
