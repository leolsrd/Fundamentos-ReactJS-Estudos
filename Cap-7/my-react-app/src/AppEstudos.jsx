import "./App.css";
import FormularioControlado from "./components/FormularioControlado";
import FormularioEmail from "./components/FormularioEmail";
import FormularioOpcoes from "./components/FormularioOpoces";
import FormularioSelecao from "./components/FormularioSelecao";
import FormValidacao from "./components/FormValidacao";

function App() {
  return (
    <>
      <FormularioControlado />
      <br />
      <FormularioEmail />
      <br />
      <FormularioSelecao />
      <br />
      <FormularioOpcoes />
      <br />
      <FormValidacao />
    </>
  );
}

export default App;
