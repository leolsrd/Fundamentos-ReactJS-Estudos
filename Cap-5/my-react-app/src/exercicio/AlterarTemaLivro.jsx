// ? Exemplo do livro
import { useState } from "react";

function AlterarTemaLivro() {
  const [tema, setTema] = useState("claro");

  const alterarTema = () => {
    setTema(tema === "claro" ? "escuro" : "claro");
  };

  return (
    <div
      style={{
        background: tema === "claro" ? "#fff" : "#333",
        color: tema === "claro" ? "#000" : "#fff",
      }}
    >
      <p>O tema atual é {tema}</p>
      <button onClick={alterarTema}>Alterar Tema</button>
    </div>
  );
}

export default AlterarTemaLivro;
