// * Usado para responder os exercícios.

import "./App.css";
import FormCheckBox from "./exercicio/FormCheckBox";
import FormInputText from "./exercicio/FormInputText";
import FormSelect from "./exercicio/FormSelect";
import FormValidacao from "./exercicio/FormValidacao";

function App() {
  return (
    <>
      <FormInputText />
      <br />
      <br />
      <FormSelect />
      <br />
      <br />
      <FormCheckBox />
      <br />
      <br />
      <FormValidacao />
    </>
  );
}

export default App;
