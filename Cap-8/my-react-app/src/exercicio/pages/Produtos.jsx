import { Link } from "react-router-dom";
import CategoriasProdutos from "../components/CategoriasProdutos";
CategoriasProdutos;

function Produtos() {
  function montarRota(categoria) {
    let rotaMontada = "/produtos/" + categoria;
    return rotaMontada;
  }
  return (
    <>
      <div>
        <h1>Produtos</h1>
      </div>

      <h2>Categoria dos Produtos</h2>

      {CategoriasProdutos.map((e) => (
        <Link to={montarRota(e.categoriaPath)} key={e.id}>
          {e.categoria} {"| "}
        </Link>
      ))}
    </>
  );
}

export default Produtos;
