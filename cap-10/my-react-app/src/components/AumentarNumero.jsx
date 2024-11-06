import { useEffect, useState } from "react";

export default function AumentarNumero() {
  const [numero, setNumero] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    document.title = numero;
    // console.log("Chamou o useEffect");
  }, [numero]);

  return (
    <div>
      <div>Aumentar Numero</div>
      <h3>Entendendo o uso de useEffect</h3>
      <button onClick={() => setNumero((item) => item + 1)}>Aumentar</button>
      <br />
      <h2>Numero: {numero}</h2>
      <hr />
      <br />
      <button onClick={() => setShow(!show)}>Esconder / Mostrar</button>
      {show && <Tecla />}
    </div>
  );
}

function Tecla() {
  useEffect(() => {
    console.log("Componente Tecla useEffect");

    function handleKeyUp() {
      console.log("Apertou alguma tecla");
    }

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      // Cleanup
      console.log("Cleanup chamado");
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return <h4>Componente Tecla</h4>;
}
