import { useEffect, useState } from "react";

function Temporizador() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSegundos((segundosAnteriores) => segundosAnteriores + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Tempo: {segundos}</div>;
}

export default Temporizador;
