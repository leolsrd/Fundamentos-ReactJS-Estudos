function ExibirEvento() {
  const handleButtonClik = (e) => {
    alert("Botão foi clicado");
    console.log(e);
  };

  return (
    <div>
      <button onClick={handleButtonClik}>Clique aqui!</button>
    </div>
  );
}

export default ExibirEvento;
