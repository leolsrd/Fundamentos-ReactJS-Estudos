import { useState } from "react";

function FormInputText() {
  const [valInput, setValInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Valor submetido ${valInput}`);
  };

  const handleChange = (e) => {
    setValInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="input">
        Digite algo:
        <input type="text" onChange={handleChange} value={valInput} />
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormInputText;
