import { useParams } from "react-router-dom";
import ProdEletronicosLista from "../components/ProdEletronicosLista";

function ProdDetails() {
  const { id } = useParams();
  const { categoria } = useParams();
  console.log(`Categoria Param: ${categoria}`);

  return (
    <div>
      <h3>Detalhes do produto</h3>
      {ProdEletronicosLista.map((e) =>
        e.id === Number(id) ? (
          <div key={e.id}>
            <p>{e.produto}</p>
          </div>
        ) : null
      )}
    </div>
  );
}

export default ProdDetails;
