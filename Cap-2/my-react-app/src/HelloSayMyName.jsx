// import App from "./App";
import SayMyName from "./components/SayMyName";
import "./HelloSayMyName.css";

function HelloSayMyName() {
  return (
    <div className="container">
      <div className="HelloSayMyName">
        {/* <HelloSayMyName /> */}
        <SayMyName nome="Léo Lourenço" />
        <SayMyName nome="Ana Clara" />
      </div>
    </div>
  );
}

export default HelloSayMyName;
