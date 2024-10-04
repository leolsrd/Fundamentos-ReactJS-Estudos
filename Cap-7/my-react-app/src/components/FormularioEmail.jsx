import { useState } from "react";

function FormularioEmail() {
  // * Gerenciamento de estado para armazenar o valor do input
  const [email, setEmail] = useState("");
  // * Gerenciamento de estado para verificar se e-mail é válido
  const [isEmailValid, setIsEmailValid] = useState(false);

  // * Função para atualizar o estado do e-mail e validar o formato
  const handleChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // * Verifica se o e-mail tem formato válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(newEmail));
  };

  // * Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`E-mail enviado: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        E-mail
        <input
          type="email"
          value={email}
          onChange={handleChange}
          style={{ borderColor: isEmailValid ? "green" : "red" }}
        />
      </label>
      <button type="submit" disabled={!isEmailValid}>
        Enviar
      </button>
    </form>
  );
}

export default FormularioEmail;
