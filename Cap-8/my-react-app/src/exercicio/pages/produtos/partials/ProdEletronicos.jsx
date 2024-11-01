import { Link } from "react-router-dom";
// import ProdEletronicosLista from "../../../data/services/ProdEletronicosLista";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";
import ProdutoLista from "../../../data/services/ProdutosLista";

function ProdEletronicos() {
  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>

      {ProdutoLista.map((e) =>
        e.categoria === "eletronicos" ? (
          <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
            {e.produto}
            <br />
          </Link>
        ) : null
      )}
    </div>
  );
}

export default ProdEletronicos;
