import { Link } from "react-router-dom";
// import ProdEletronicosLista from "../../../data/services/ProdEletronicosLista";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";
import ProdutoLista from "../../../data/services/ProdutosLista";

function ProdEletronicos() {
  const produtosCarregados = [];

  // ! Rever essa função
  function carregarProdutosCategoria() {
    ProdutoLista.map((e) => {
      if (e.categoria === "eletronicos") {
        produtosCarregados.push();
      }
    });
  }

  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>

      {ProdutoLista.map((e) => (
        <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
          {e.categoria != "eletronicos" ? null : e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdEletronicos;
