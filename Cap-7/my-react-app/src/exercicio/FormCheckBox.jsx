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

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="interesses">
        Diga-nos seus interesses:
        <div>
          <input
            type="checkbox"
            name="jogos"
            id="idJogos"
            checked={jogos}
            onChange={handleChangeJogos}
          />
          <label htmlFor="jogos">Jogos</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="musica"
            id="idMusica"
            checked={musica}
            onChange={handleChangeMusica}
          />
          <label htmlFor="musica">Música</label>
        </div>
      </label>
      <button type="submit">Enviar</button>
    </form>
  );
}

export default FormCheckBox;
