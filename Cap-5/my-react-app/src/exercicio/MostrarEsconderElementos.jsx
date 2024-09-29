import { useState } from "react";
import "./style.css";

function MostrarEsconderElementos() {
  const [exibir, setExibir] = useState("none");

  const ocultar = () => {
    setExibir(exibir === "none" ? "show" : "none");
  };

  return (
    <button onClick={ocultar}>
      Clique aqui para exibir ou ocultar
      <p className={exibir}>Isso está vísivel</p>
    </button>
  );
}

export default MostrarEsconderElementos;
