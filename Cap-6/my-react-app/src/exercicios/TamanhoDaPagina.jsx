import { useState, useEffect } from "react";

function TamanhoDaPagina() {
  const [janela, setJanela] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setJanela(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return <p>Tamanho da janela: {janela}</p>;
}

export default TamanhoDaPagina;
