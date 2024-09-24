import { useState } from "react";
import PropTypes from "prop-types";

function Filho2({ enviarMensagemParaPai2 }) {
  const [mensagem, setMensagem] = useState("Olá do Filho");

  const nullSetMensagem = () => setMensagem(null);

  console.log(nullSetMensagem);

  return (
    <div>
      <p>{mensagem}</p>
      <button onClick={() => enviarMensagemParaPai2(mensagem)}>
        Enviar Menagem para o Pai 2
      </button>
    </div>
  );
}

Filho2.propTypes = {
  enviarMensagemParaPai2: PropTypes.string.isRequired,
  setMensagem: PropTypes.useState,
};

export default Filho2;
