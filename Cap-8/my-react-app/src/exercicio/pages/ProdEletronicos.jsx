function ProdEletronicos() {
  const prodEletronicos = [
    "Notebook Dell 8GB de Ram e SSD 256",
    "Celular S10 Lite 6GB de Ram 128 de Armazenamento",
    "Kindle 128Gb",
    "Teclado Mecânico Redragon Draconik",
  ];

  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>
      <ul>
        {prodEletronicos.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProdEletronicos;
