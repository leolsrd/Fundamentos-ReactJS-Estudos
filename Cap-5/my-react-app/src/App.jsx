// ? App para exemplo dos exercício proposto do livro
import "./App.css";
import AlterarTema from "./exercicio/AlterarTema";
import CarregarDados from "./exercicio/CarregarDados";
import ListaDeTarefas from "./exercicio/ListaDeTarefas";
import MostrarEsconderElementos from "./exercicio/MostrarEsconderElementos";
// import AlterarTemaLivro from "./exercicio/AlterarTemaLivro";

function App() {
  return (
    <>
      <AlterarTema />
      <br />
      {/* Exemplo do livro */}
      {/* <AlterarTemaLivro /> */}
      <MostrarEsconderElementos />
      <br />
      <ListaDeTarefas />
      <br />
      <CarregarDados />
    </>
  );
}

export default App;
