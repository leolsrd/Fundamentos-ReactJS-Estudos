import { useState } from "react";

function FormValidacao() {
  const [inputValue, setInputValue] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      setErro("O Campo não pode ser vazio");
      console.log(`Submeteu em branco ${inputValue}`);
    } else {
      setErro("");
      console.log(`Valor do input: ${inputValue}`);
    }
  };

  const handleChangeInput = () => {
    if (inputValue.trim() === "") {
      setErro("O Campo não pode ser vazio");
    } else {
      setErro("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="validando-input-vazio">
        Valição de input vazio:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleChangeInput}
        />
        {erro && <p className="error-message">{erro}</p>}
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormValidacao;
