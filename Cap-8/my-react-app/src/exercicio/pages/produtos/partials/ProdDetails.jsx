import { useParams } from "react-router-dom";
import ProdutoLista from "../../../data/services/ProdutosLista";

function ProdDetails() {
  const { id } = useParams();
  const { categoria } = useParams();
  console.log(`Categoria Param: ${categoria}`);

  return (
    <div>
      <h3>Detalhes do produto</h3>

      {ProdutoLista.map((e) =>
        e.id === Number(id) && e.categoria === categoria ? (
          <div key={e.id}>
            <p>{e.produto}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default ProdDetails;
