// ? Estudo / Explicação do livro Fundamentos ReactJS
import "./App.css";
import Alternador from "./components/Alterarnador";
import Botao from "./components/Botao";
import Contador from "./components/Contador";
import Contador3 from "./components/Contador3";
import ContadorUseEffect from "./components/ContadorUseEffect";
import DadosUsuario from "./components/DadosUsuario";
import Dobrador from "./components/Dobrador";
import FormularioCadastro from "./components/FormularioCadastro";
import FormularioContato from "./components/FormularioContato";
import Multiplicador from "./components/Multiplicador";
import Pai from "./components/Pai";
import Pai2 from "./components/Pai2";
import Temporizador from "./components/Temporizador";

// useState
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const incrementar = () => setContador(contador + 1);
  const decrementar = () => setContador(contador - 1);

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
      {/* Exemplo de contador Compartilhado */}
      <div>
        <Botao onClick={incrementar} texto="Incrementar" />
        <Contador3 valor={contador} />
        <Botao onClick={decrementar} texto="Decrementar" />
      </div>
      <br />
      {/* Callbacks para enviar dados para cima */}
      <Pai2 />
      <br />
    </>
  );
}

export default App;
