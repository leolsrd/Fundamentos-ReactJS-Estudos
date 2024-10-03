import "./App.css";
import ExibirEvento from "./exercicios/ExibirEvento";
import FormularioSubmit from "./exercicios/FormularioSubmit";
import ComponenteExemplo from "./exercicios/TamanhoDaPagina";

function App() {
  return (
    <>
      <ExibirEvento />
      <br />
      <FormularioSubmit />
      <br />
      {/* <TamanhoDaPagina /> */}
      <ComponenteExemplo />
    </>
  );
}

export default App;
