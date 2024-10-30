import ProdAlimentos from "../../pages/produtos/partials/ProdAlimentos";
import ProdEletronicos from "../../pages/produtos/partials/ProdEletronicos";
import ProdRoupas from "../../pages/produtos/partials/ProdRoupas";

let CategoriasProdutos = [
  {
    id: 1,
    categoria: "Eletrônicos",
    categoriaPath: "eletronicos",
    element: <ProdEletronicos />,
  },
  {
    id: 2,
    categoria: "Roupas",
    categoriaPath: "roupas",
    element: <ProdRoupas />,
  },
  {
    id: 3,
    categoria: "Alimentos",
    categoriaPath: "alimentos",
    element: <ProdAlimentos />,
  },
];

export default CategoriasProdutos;
