import { useState, useMemo } from "react";

function UseMemo() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculando o fatorial");

    let result = 1;

    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }, [number]);

  const increment = () => {
    setInc(inc + 1);
  };

  return (
    <div>
      <div>UseMemo</div>
      <h1>
        Fatorial de {number} é {factorial}
      </h1>
      <button onClick={() => setNumber(number + 1)}>Incrementar Número</button>
      <button onClick={increment}>Incrementar Contador</button>
      <h2>Contador: {inc}</h2>
    </div>
  );
}

export default UseMemo;
