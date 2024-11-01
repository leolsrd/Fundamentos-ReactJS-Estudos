import { Link } from "react-router-dom";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";
import ProdutoLista from "../../../data/services/ProdutosLista";

function ProdRoupas() {
  return (
    <div className="prod-categorias">
      <h4>Produtos Vestuário</h4>

      {ProdutoLista.map((e) =>
        e.categoria === "roupas" ? (
          <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
            {e.produto}
            <br />
          </Link>
        ) : null
      )}
    </div>
  );
}

export default ProdRoupas;
