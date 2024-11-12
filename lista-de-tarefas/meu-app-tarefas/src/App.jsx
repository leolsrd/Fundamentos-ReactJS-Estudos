// import './App.css'

import { useState } from "react";
import Header from "./assets/components/Header";
import TaskInput from "./assets/components/TaskInput";
import TaskList from "./assets/components/TaskList";
import TaskCounter from "./assets/components/TaskCounter";

function App() {
  const [tasks, setTasks] = useState("todos", []);

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);

    tasks.length
      ? localStorage.setItem("tasksSaved", JSON.stringify(tasks))
      : null;
  };

  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <div className="app">
        <Header />
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
        />
        <TaskCounter tasks={tasks} />
      </div>
    </>
  );
}

export default App;
