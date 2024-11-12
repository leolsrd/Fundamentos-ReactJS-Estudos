import { useState } from "react";
/* eslint-disable react/prop-types */

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmite = (e) => {
    e.preventDefault();

    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmite}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Digite sua tarefa..."
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default TaskInput;
