import { Link } from "react-router-dom";
import ProdRoupasLista from "../../../data/services/ProdRoupasLista";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";

function ProdRoupas() {
  return (
    <div className="prod-categorias">
      <h4>Produtos Vestuário</h4>

      {ProdRoupasLista.map((e) => (
        <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdRoupas;
