function ProdRoupas() {
  const prodRoupas = [
    "Calça Jeans Azul 48",
    "Camisa Polo Amarela GG",
    "Calça Jeans Preta 60",
    "Camisa Regata Speedo M",
  ];

  return (
    <div className="prod-categorias">
      <h4>Produtos Vestuário</h4>
      <ul>
        {prodRoupas.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProdRoupas;
