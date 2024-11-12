import { useCallback, useState } from "react";

function Callback() {
  const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <div>Callback</div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </div>
  );
}

export default Callback;
