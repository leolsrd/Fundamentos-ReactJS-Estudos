// import { useState } from "react";
import "./style.css";

function AlterarTema() {
  // const [tema, setTema] = useState("temaWhite");
  // const tema = style.backgroundColor = '#FFFFFF';

  const buttonTema = "White";

  return (
    <div>
      <button className="btn-tema">{buttonTema}</button>
      <br />
      <textarea
        name="Área de texto"
        className="text-tema"
        rows={8}
        cols={50}
      ></textarea>
    </div>
  );
}

export default AlterarTema;
