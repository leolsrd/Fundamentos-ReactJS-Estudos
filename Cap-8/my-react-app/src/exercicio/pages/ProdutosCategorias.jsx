import { useParams } from "react-router-dom";
import CategoriasProdutos from "../components/CategoriasProdutos";
CategoriasProdutos;
import NavbarCategoriaProduto from "../components/NavbarCategoriaProduto";

function ProdutosCategorias() {
  const { categoriaPath } = useParams();

  return (
    <div className="produtos-categorias">
      <h2>Categoria de Produtos</h2>
      <NavbarCategoriaProduto />
      {CategoriasProdutos.map((e) => (
        <div key={e.id}>
          {e.categoriaPath === categoriaPath ? e.element : null}
        </div>
      ))}
    </div>
  );
}

export default ProdutosCategorias;
