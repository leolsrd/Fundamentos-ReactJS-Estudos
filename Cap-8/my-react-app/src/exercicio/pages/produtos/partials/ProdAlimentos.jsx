import { Link } from "react-router-dom";
import ProdAlimentosLista from "../../../data/services/ProdAlimentosLista";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";

function ProdAlimentos() {
  return (
    <div className="prod-categoria">
      <h4>Produtos Alimentícios</h4>

      {ProdAlimentosLista.map((e) => (
        <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdAlimentos;
