// ? Estudo do livro Fundamentos ReactJS
import "./App.css";
import Alternador from "./components/Alterarnador";
import Contador from "./components/Contador";
import ContadorUseEffect from "./components/ContadorUseEffect";
import DadosUsuario from "./components/DadosUsuario";
import Dobrador from "./components/Dobrador";
import FormularioCadastro from "./components/FormularioCadastro";
import FormularioContato from "./components/FormularioContato";
import Multiplicador from "./components/Multiplicador";
import Pai from "./components/Pai";
import Temporizador from "./components/Temporizador";

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
      {/* Dados do usuário */}
      <DadosUsuario />
      <br />
      {/* Contador com useEffect */}
      <ContadorUseEffect />
      <br />
      {/* Temporizador */}
      <Temporizador />
      <br />
      {/* Pai */}
      <Pai />
      <br />
    </>
  );
}

export default App;
