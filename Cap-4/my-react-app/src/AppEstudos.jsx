import "./App.css";
import WelcomeClass from "./components/WelcomeClass";
import WelcomeFunction from "./components/WelcomeFunction";
import MeuComponente from "./components/MeuComponente";
import { ComponenteA, ComponenteB } from "./components/ExportacaoNomeada";
import { ComponenteA as PrimeiroComponente } from "./components/ExportacaoNomeada";
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";
import Container from "./components/Container";
import Mensagem from "./components/Mensagem";
import ListaDeFrutas from "../../../Cap-3/my-react-app/src/components/ListaDeFrutas";
import Botao from "./components/Botao";
import { useState } from "react";
import Saudacao from "./components/Saudacao";
import User from "./components/User";
import UserProfile from "./components/UserProfile";
import NumberList from "./components/NumberList";
import Button from "./components/Button";
import SaudacaoValueDefault from "./components/SaudacaoValueDefault";

function App() {
  const [texto, setTexto] = useState("Olá, Mundão!");

  const frutas = ["Maçã", "Banana", "Laranja"];

  const pessoa = { nome: "João", idade: 30 };

  const userProfile = {
    name: "Léo Lourenço",
    email: "leolsrrd@gmail.com",
    age: 41,
  };

  function handleClick() {
    alert("Botão clicado!");
  }

  const handleChange = () => {
    setTexto("Texto Alterado");
  };

  return (
    <div>
      {/* Componente de Classe */}
      <WelcomeClass name="Joana" />
      {/* Componente de Função */}
      <WelcomeFunction name="Léo" />
      {/* Exportando um componente */}
      <MeuComponente />
      {/* Exportação nomeada */}
      <ComponenteA />
      <ComponenteB />
      {/* Usando alias ao importar */}
      <PrimeiroComponente />
      {/* Composição de componentes */}
      <Container>
        <Cabecalho />
        <p>Esta é a minha primeira aplicação React!</p>
        <Rodape />
      </Container>
      {/* Passando Strings e Números */}
      <Mensagem texto="Olá, Mundo!" contador={3} />
      {/* Passando Array e Objetos */}
      <ListaDeFrutas frutas={frutas} pessoa={pessoa} />
      {/* Passando Funções */}
      <Botao onClick={handleClick} />
      {/* Padrão de dados descendentes */}
      <div>
        <Mensagem texto={texto} />
        <button onClick={handleChange}>Alterar Texto</button>
      </div>
      {/* PropTypes */}
      <Saudacao nome={"Léo Lourenço"} />
      {/* PropTypes Tipos Primitivos */}
      <User name={"Ana Clara"} age={37} />
      {/* PropTypes Array */}
      <UserProfile user={userProfile} />
      {/* PropTypes de number (Tipos específicos) */}
      <NumberList numbers={[1, 2, 3, 4]} />
      {/* PropTypes Enum */}
      <Button type="submit" />
      {/* PropTypes Value Default */}
      <SaudacaoValueDefault />
    </div>
  );
}

export default App;
