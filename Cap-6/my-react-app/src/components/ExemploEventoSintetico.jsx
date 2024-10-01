function ExemploEventoSintetico() {
  const handleClick = (evento) => {
    console.log(evento); // Este é um evento sintético
    console.log(evento.nativeEvent); // Este é um evento nativo
  };

  return <button onClick={handleClick}>Clique Aqui</button>;
}

export default ExemploEventoSintetico;
