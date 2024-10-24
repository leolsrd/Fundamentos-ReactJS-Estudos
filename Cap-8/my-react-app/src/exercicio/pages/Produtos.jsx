import { Link } from "react-router-dom";

function Produtos() {
  let categorias = [
    { id: 1, categoria: "Eletrônicos" },
    { id: 2, categoria: "Roupas" },
    { id: 3, categoria: "Alimentos" },
  ];

  return (
    <div className="produtos-categorias">
      <h2>Categoria dos Produtos</h2>
      {categorias.map((e) => (
        <Link to="/produtos/{e.id}" key={e.id}>
          {e.categoria} {"| "}
        </Link>
      ))}
    </div>
  );
}

export default Produtos;
