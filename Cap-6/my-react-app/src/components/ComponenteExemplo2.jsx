import { useState, useEffect } from "react";

function UseLarguraJanela() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setLargura(window.innerWidth);

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return largura;
}

function ComponenteExemplo2() {
  const largura = UseLarguraJanela();

  return <p>Largunra da janela: {largura}</p>;
}

export default ComponenteExemplo2;
