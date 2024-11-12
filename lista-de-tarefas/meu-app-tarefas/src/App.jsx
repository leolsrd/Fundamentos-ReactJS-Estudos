// import './App.css'

import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import TaskCounter from "./components/TaskCounter";
import useStateWithLocalStorage from "./hooks/useStateWithLocalStorage";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useStateWithLocalStorage("todos", []);
  const [filter, setFilter] = useState("all");

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const handleToggleTask = (id) => {
    console.log("Chegou aqui");
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "active") return !task.completed;
    return false;
  });

  return (
    <>
      <div className="app">
        <Header />
        <TaskInput onAddTask={handleAddTask} />
        <div>
          <button onClick={() => setFilter("all")}>Todas</button>
          <button onClick={() => setFilter("completed")}>Completas</button>
          <button onClick={() => setFilter("active")}>Ativas</button>
        </div>
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
        <TaskCounter tasks={tasks} />
      </div>
    </>
  );
}

export default App;
