import { Link } from "react-router-dom";

function Produtos() {
  const categorias = ["Eletrônicos", "Roupas", "Alimentos"];

  return (
    <div className="produtos-categorias">
      <h2>Categoria dos Produtos</h2>
      {categorias.map((value, index) => (
        <Link to={value} key={index}>
          | {value}{" "}
        </Link>
      ))}
    </div>
  );
}

export default Produtos;
