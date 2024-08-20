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

function App() {
  const frutas = ["Maçã", "Banana", "Laranja"];

  const pessoa = { nome: "João", idade: 30 };

  function handleClick() {
    alert("Botão calicado!");
  }

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
    </div>
  );
}

export default App;
