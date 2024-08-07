import "./App.css";
import Greeting from "./components/Greeting";
import Greeting2 from "./components/Greeting2.";
import LoginStatus from "./components/LoginStatus";
import AlertButton from "./components/AlertButton";
import PerfilCardReturn from "./components/PerfilCardReturn";
import Button from "./components/Button";
import WelcomeMessage from "./components/WelcomeMessage";
import NameList from "./components/NameList";
import TaskList from "./components/TaskList";
import TodoList from "./components/TodoList";
import CabecalhoBlog from "./exerc-cap-3/CabecalhoBlog";
import BtnCliqueAqui from "./exerc-cap-3/BtnCliqueAqui";
import ListaNomes from "./exerc-cap-3/ListaNomes";

function App() {
  const user = "Aninha";

  const tasks = [
    { id: 1, text: "Fazer compras", completed: true },
    { id: 2, text: "Limpar a casa", completed: false },
    { id: 3, text: "Pagar as contas", completed: false },
  ];

  const alunos = [
    { id: 1, nome: "Ana" },
    { id: 2, nome: "Carlos" },
    { id: 3, nome: "Beatriz" },
  ];

  return (
    <div className="App">
      <Greeting />
      <Greeting2 />
      <LoginStatus />
      <AlertButton />
      <PerfilCardReturn />
      <Button className="primary" label="Clique aqui" />
      <WelcomeMessage name={user} />
      <NameList />
      <TaskList tasks={tasks} />
      <TodoList tasks={tasks} />
      <CabecalhoBlog />
      <BtnCliqueAqui />
      <ListaNomes listaNomes={alunos} />
    </div>
  );
}

export default App;
