// import { useState } from "react";
import "./App.css";
import Alternador from "./components/Alterarnador";
import Contador from "./components/Contador";
import Dobrador from "./components/Dobrador";
import FormularioCadastro from "./components/FormularioCadastro";
import FormularioContato from "./components/FormularioContato";
import Multiplicador from "./components/Multiplicador";

function App() {
  return (
    <>
      {/* Contador*/}
      <Contador />
      {/* Dobrador */}
      <Dobrador />
      {/* Alternador */}
      <Alternador />
      {/* Multiplicador */}
      <Multiplicador />
      {/* Formulário de Cadastros */}
      <FormularioCadastro />
      {/* fomrulário de Contato */}
      <FormularioContato />
    </>
  );
}

export default App;
