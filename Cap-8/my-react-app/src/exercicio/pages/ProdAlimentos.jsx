function ProdAlimentos() {
  const prodAlimentos = [
    "Cuscuz 500G Vitamilho",
    "Carne de Sol 1kg",
    "Cerveja Spaten 600ml ",
    "Sarapatel Congelado",
  ];

  return (
    <div className="prod-categoria">
      <h4>Produtos Alimentícios</h4>
      <ul>
        {prodAlimentos.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProdAlimentos;
