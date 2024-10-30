import ProdAlimentos from "../pages/ProdAlimentos";
import ProdEletronicos from "../pages/ProdEletronicos";
import ProdRoupas from "../pages/ProdRoupas";

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
