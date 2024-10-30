import { Link } from "react-router-dom";
import ProdRoupasLista from "../components/ProdRoupasLista";

function ProdRoupas() {
  function montaRotaDetailsProduto(categoria, idProduto) {
    console.log(`id: ${idProduto}`);
    let rotaMontada = "/produtos-details/" + categoria + "/" + idProduto;
    console.log(`Rota montada: ${rotaMontada}`);

    return rotaMontada;
  }

  return (
    <div className="prod-categorias">
      <h4>Produtos Vestuário</h4>
      {ProdRoupasLista.map((e) => (
        <Link to={montaRotaDetailsProduto(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdRoupas;
