import "./App.css";
import ExibirEvento from "./exercicios/ExibirEvento";
import FormularioDuplo from "./exercicios/FormularioDuplo";
import FormularioSubmit from "./exercicios/FormularioSubmit";
import TamanhoDaPagina from "./exercicios/TamanhoDaPagina";

function App() {
  return (
    <>
      <ExibirEvento />
      <br />
      <FormularioSubmit />
      <br />
      <TamanhoDaPagina />
      <br />
      <FormularioDuplo />
    </>
  );
}

export default App;
