import { Link } from "react-router-dom";
import categoriasProdutos from "./CategoriasProdutos";

function NavbarCategoriaProduto() {
  function montarRota(categoria) {
    let rotaMontada = "/produtos/" + categoria;
    return rotaMontada;
  }

  return (
    <div>
      {categoriasProdutos.map((e) => (
        <Link to={montarRota(e.categoriaPath)} key={e.id}>
          {e.categoria} {"| "}
        </Link>
      ))}
    </div>
  );
}

export default NavbarCategoriaProduto;
