import { useState, useReducer } from "react";

type Task = {
  id: number;
  text: string;
};

const initialState: Task[] = [];

type Action =
  | { type: "add"; text: string }
  | { type: "remove"; id: number }
  | { type: "reset" };

function reducer(state: Task[], action: Actin) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text }];
    case "remove":
      return state.filter((task) => task.id !== action.id);
    case "reset":
      return [];
  }
}

export default function Task() {
  const [input, setInput] = useState("");

  const [state, dispath] = useReducer(reducer, initialState);

  function addTask() {
    dispath({ type: "add", text: input });
    setInput("");
  }

  return (
    <div>
      <h3>Tarefa</h3>
      <button onClick={() => dispath({ type: "reset" })}>
        Resetar Tarefas
      </button>
      <br />
      <br />
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTask}>Adicionar Tarefa</button>
      <hr />
      <br />
      <ul>
        {state.map((task) => (
          <li key={task.id}>
            <span>
              {task.text} -{" "}
              <button onClick={() => dispath({ type: "remove", id: task.id })}>
                Remover
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
