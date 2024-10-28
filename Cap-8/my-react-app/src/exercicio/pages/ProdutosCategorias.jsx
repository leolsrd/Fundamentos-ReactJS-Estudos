import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProdEletronicos from "./ProdEletronicos";
import ProdRoupas from "./ProdRoupas";
import ProdAlimentos from "./ProdAlimentos";
import CategoriasProdutos from "../components/CategoriasProdutos";
CategoriasProdutos;
import NavbarCategoriaProduto from "../components/NavbarCategoriaProduto";

function ProdutosCategorias() {
  const { categoriaPath } = useParams();

  const navigate = useNavigate();

  function carregarCategoria() {
    if (categoriaPath === "eletronicos") {
      return <ProdEletronicos />;
    } else if (categoriaPath === "roupas") {
      return <ProdRoupas />;
    } else if (categoriaPath === "alimentos") {
      return <ProdAlimentos />;
    } else {
      return navigate("/produtos/");
    }
  }

  return (
    <div className="produtos-categorias">
      <h2>Categoria de Produtos</h2>
      <NavbarCategoriaProduto />
      <Outlet />
      {carregarCategoria()}
    </div>
  );
}

export default ProdutosCategorias;
