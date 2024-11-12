import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispath] = useReducer(reducer, initialState);

  return (
    <>
      <h3>Exemplo de Reducer</h3>
      Count: {state.count}
      <button onClick={() => dispath({ type: "decrement" })}>-</button>
      <button onClick={() => dispath({ type: "increment" })}>+</button>
    </>
  );
}

export default Counter;
