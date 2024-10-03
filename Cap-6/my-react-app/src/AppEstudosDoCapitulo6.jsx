import { useEffect } from "react";
import "./App.css";
import ComponenteExemplo from "./components/ComponenteExemplo";
import ComponenteExemplo2 from "./components/ComponenteExemplo2";
import Contador from "./components/Contador";
import ExemploEventoSintetico from "./components/ExemploEventoSintetico";
import Formulario from "./components/Formulario";
import FormularioMultiplosCampos from "./components/Formulario2";
import Lista from "./components/Lista";
import MeuComponente from "./components/MeuComponente";
import ComponentePai from "./components/ComponentePai";

function App() {
  useEffect(() => {
    const handleKeyPress = (e) => {
      console.log(`Tecla pressionada: ${e.key}`);
    };
    window.addEventListener("keypress", handleKeyPress);

    // Limpeza do evento
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
  }, []);

  return (
    <>
      <MeuComponente />
      <br />
      <ExemploEventoSintetico />
      <br />
      <Contador />
      <br />
      <ComponenteExemplo />
      <br />
      <ComponenteExemplo2 />
      <br />
      <Formulario />
      <br />
      <FormularioMultiplosCampos />
      <br />
      <Lista itens={["Maçã", "Laranja", "Tangerina", "Uva", "Abacaxi"]} />
      <br />
      <div>Pressione uma tecla....</div>
      <br />
      <ComponentePai />
    </>
  );
}

export default App;
