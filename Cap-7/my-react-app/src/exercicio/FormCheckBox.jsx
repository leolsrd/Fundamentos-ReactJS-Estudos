import { useState } from "react";

function FormCheckBox() {
  const [jogos, setJogos] = useState(false);
  const [musica, setMusica] = useState(false);

  const handleChangeJogos = (e) => {
    setJogos(e.target.checked);
  };

  const handleChangeMusica = (e) => {
    setMusica(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Gosta de música: ${musica}`);
    console.log(`Gosta de jogos: ${jogos}`);
  };
}
