import "./App.css";
import AumentarNumero from "./components/AumentarNumero";
import Callback from "./components/Callback";
import Counter from "./components/Counter";
import Relogio from "./components/Relogio";
import Task from "./components/Task";
import UseMemo from "./components/UseMemo";

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
      <br />
      <Callback />
      <br />
      <UseMemo />
    </>
  );
}

export default App;
