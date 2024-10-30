import { Link } from "react-router-dom";
import ProdEletronicosLista from "../components/ProdEletronicosLista";

function ProdEletronicos() {
  function montaRotaDetailsProduto(categoria, idProduto) {
    console.log(`id: ${idProduto}`);
    let rotaMontada = "/produtos-details/" + categoria + "/" + idProduto;
    console.log(`Rota montada: ${rotaMontada}`);

    return rotaMontada;
  }

  return (
    <div className="prod-categorias">
      <h4>Produtos eletrônicos</h4>
      {ProdEletronicosLista.map((e) => (
        <Link to={montaRotaDetailsProduto(e.categoria, e.id)} key={e.id}>
          {e.produto}
          <br />
        </Link>
      ))}
    </div>
  );
}

export default ProdEletronicos;
