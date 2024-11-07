import "./App.css";
import AumentarNumero from "./components/AumentarNumero";
import Counter from "./components/Counter";
import Relogio from "./components/Relogio";
import Task from "./components/Task";

function App() {
  return (
    <>
      <Relogio />
      <br />
      <Counter />
      <br />
      <AumentarNumero />
      <br />
      <Task />
    </>
  );
}

export default App;
