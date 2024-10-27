import { Outlet, useNavigate, useParams } from "react-router-dom";
import ProdEletronicos from "./ProdEletronicos";
import ProdRoupas from "./ProdRoupas";
import ProdAlimentos from "./ProdAlimentos";

function ProdutosCategorias() {
  const { categoriaPath } = useParams();
  console.log(`Param: ${categoriaPath}`);

  const navigate = useNavigate();

  function carregarCategoria() {
    if (categoriaPath === "eletronicos") {
      return <ProdEletronicos />;
    } else if (categoriaPath === "roupas") {
      return <ProdRoupas />;
    } else if (categoriaPath === "alimentos") {
      return <ProdAlimentos />;
    } else {
      return navigate("/");
    }
  }

  return (
    <div className="produtos-categorias">
      <Outlet />
      {carregarCategoria()}
    </div>
  );
}

export default ProdutosCategorias;
