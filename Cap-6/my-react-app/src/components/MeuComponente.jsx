function MeuComponente() {
  const handleClick = (e) => {
    console.log("O botão foi clicado!", e);
  };

  return <button onClick={handleClick}>Clique em mim</button>;
}

export default MeuComponente;
