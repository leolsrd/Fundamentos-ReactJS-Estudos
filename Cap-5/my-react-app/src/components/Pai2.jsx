import Filho2 from "./Filho2";

function Pai2() {
  const receberMensagemDoFilho2 = (mensagem) => {
    console.log("Mensagem recebida do filho: ", mensagem);
  };

  return <Filho2 enviarMensagemParaPai2={receberMensagemDoFilho2} />;
}

export default Pai2;
