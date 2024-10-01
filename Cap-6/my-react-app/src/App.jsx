import "./App.css";
import Contador from "./components/Contador";
import ExemploEventoSintetico from "./components/ExemploEventoSintetico";
import MeuComponente from "./components/MeuComponente";

function App() {
  return (
    <>
      <MeuComponente />
      <br />
      <ExemploEventoSintetico />
      <br />
      <Contador />
    </>
  );
}

export default App;
