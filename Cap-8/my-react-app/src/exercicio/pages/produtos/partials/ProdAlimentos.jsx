import { Link } from "react-router-dom";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";
import ProdutoLista from "../../../data/services/ProdutosLista";

function ProdAlimentos() {
  return (
    <div className="prod-categoria">
      <h4>Produtos Alimentícios</h4>

      {ProdutoLista.map((e) =>
        e.categoria === "alimentos" ? (
          <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
            {e.produto}
            <br />
          </Link>
        ) : null
      )}
    </div>
  );
}

export default ProdAlimentos;
