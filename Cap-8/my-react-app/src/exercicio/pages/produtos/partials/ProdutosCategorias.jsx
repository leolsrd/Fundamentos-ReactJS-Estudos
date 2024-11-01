import { useParams } from "react-router-dom";
import NavbarCategoriaProduto from "../../../ui/components/NavbarCategoriaProduto";
import CategoriasProdutos from "../../../data/services/CategoriasProdutos";

function ProdutosCategorias() {
  const { categoriaPath } = useParams();
  console.log(categoriaPath);

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
