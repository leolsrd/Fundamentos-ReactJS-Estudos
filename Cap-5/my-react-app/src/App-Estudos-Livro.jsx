// ? Estudo do livro Fundamentos ReactJS
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
      <br />
      {/* Dobrador */}
      <Dobrador />
      <br />
      {/* Alternador */}
      <Alternador />
      <br />
      {/* Multiplicador */}
      <Multiplicador />
      <br />
      {/* Formulário de Cadastros */}
      <FormularioCadastro />
      <br />
      {/* fomrulário de Contato */}
      <FormularioContato />
      <br />
    </>
  );
}

export default App;
