import "./App.css";
import FormularioControlado from "./components/FormularioControlado";
import FormularioEmail from "./components/FormularioEmail";
import FormularioSelecao from "./components/FormularioSelecao";

function App() {
  return (
    <>
      <FormularioControlado />
      <br />
      <FormularioEmail />
      <br />
      <FormularioSelecao />
    </>
  );
}

export default App;
