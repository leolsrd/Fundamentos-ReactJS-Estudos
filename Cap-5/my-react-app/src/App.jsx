// ? Estudo direto da Documentação para entender mais sobre useState este é
// ? o exemplo do Todo List
import "./App.css";
import AddTodo from "./documentacao/AddTodo";
import TaskList from "./documentacao/TaskList";
import { useState } from "react";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy Milk", done: true },
  { id: 1, title: "Eat Tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((t) => {
        if (t.id === nextTodo.id) {
          return nextTodo;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    setTodos(todos.filter((t) => t.id !== todoId));
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}

export default App;
