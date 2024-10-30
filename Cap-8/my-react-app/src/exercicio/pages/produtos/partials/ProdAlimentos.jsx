import { Link } from "react-router-dom";
import ProdAlimentosLista from "../../../data/services/ProdAlimentosLista";

function ProdAlimentos() {
  function montaRotaDetailsProduto(categoria, idProduto) {
    console.log(`id: ${idProduto}`);
    let rotaMontada = "/produtos-details/" + categoria + "/" + idProduto;
    console.log(`Rota montada: ${rotaMontada}`);

    return rotaMontada;
  }

  return (
    <div className="prod-categoria">
      <h4>Produtos Alimentícios</h4>

      {ProdAlimentosLista.map((e) => (
        <Link to={montaRotaDetailsProduto(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdAlimentos;
