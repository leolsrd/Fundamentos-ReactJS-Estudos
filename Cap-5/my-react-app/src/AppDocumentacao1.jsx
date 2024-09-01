// ? Estudo direto da Documentação para entender mais sobre useState
import "./App.css";
import Counter from "./documentacao/Counter";
import MyCheckbox from "./documentacao/MyCheckbox";
import MyForm from "./documentacao/MyForm";
import MyFormObjeto from "./documentacao/MyFormObjeto";
import MyFormObjetoAninhado from "./documentacao/MyFormObjetoAninhado";
import TextChange from "./documentacao/TextChange";

function App() {
  return (
    <>
      {/* Counter Click */}
      <Counter />
      {/* Text Change */}
      <br />
      <br />
      <TextChange />
      <br />
      <br />
      <MyCheckbox />
      <br />
      <br />
      <MyForm />
      {/* Form Objeto */}
      <MyFormObjeto />
      {/* Form Objeto Aninhado */}
      <MyFormObjetoAninhado />
    </>
  );
}

export default App;
