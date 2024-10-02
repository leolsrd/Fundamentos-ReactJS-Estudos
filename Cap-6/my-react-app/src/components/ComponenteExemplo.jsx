import { useState, useEffect } from "react";

function ComponenteExemplo() {
  const [largura, setLargura] = useState(window.innerWidth);

  useEffect(() => {
    const handleSize = () => setLargura(window.innerWidth);

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  });

  return <p>Largura da janela: {largura}</p>;
}

export default ComponenteExemplo;
