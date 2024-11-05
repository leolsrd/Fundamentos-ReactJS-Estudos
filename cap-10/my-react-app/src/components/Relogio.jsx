import { useEffect } from "react";
import { useState } from "react";

function Relogio() {
  const [horario, setHorario] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHorario(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h3>Exemplo de useEffect</h3>
      <h2>{horario.toLocaleTimeString()}</h2>
    </div>
  );
}

export default Relogio;
