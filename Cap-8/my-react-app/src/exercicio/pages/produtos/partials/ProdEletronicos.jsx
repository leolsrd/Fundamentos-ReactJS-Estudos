import { Link } from "react-router-dom";
import ProdEletronicosLista from "../../../data/services/ProdEletronicosLista";
import CriarRotaProdutoDetails from "../../../utils/CriarRotaProdutoDetails";

function ProdEletronicos() {
  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>

      {ProdEletronicosLista.map((e) => (
        <Link to={CriarRotaProdutoDetails(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdEletronicos;
