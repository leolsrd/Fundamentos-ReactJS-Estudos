import { Link } from "react-router-dom";
import CategoriasProdutos from "../../data/services/CategoriasProdutos";

function NavbarCategoriaProduto() {
  function montarRota(categoria) {
    let rotaMontada = "/produtos/" + categoria;
    return rotaMontada;
  }

  return (
    <div>
      {CategoriasProdutos.map((e) => (
        <Link to={montarRota(e.categoriaPath)} key={e.id}>
          {e.categoria} {"| "}
        </Link>
      ))}
    </div>
  );
}

export default NavbarCategoriaProduto;
