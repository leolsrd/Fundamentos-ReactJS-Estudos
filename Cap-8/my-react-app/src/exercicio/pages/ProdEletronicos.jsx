import { Link } from "react-router-dom";
import ProdEletronicosLista from "../components/ProdEletronicosLista";

function ProdEletronicos() {
  function montaRotaDetailsProduto(idProduto) {
    let rotaMontada = "/produtos-details/eletronicos/" + idProduto;

    return rotaMontada;
  }

  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>
      {ProdEletronicosLista.map((e) => (
        <Link to={montaRotaDetailsProduto(e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdEletronicos;
