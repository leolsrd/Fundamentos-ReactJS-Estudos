import { useState, useEffect } from "react";

function ContadorUseEffect() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p> {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default ContadorUseEffect;
