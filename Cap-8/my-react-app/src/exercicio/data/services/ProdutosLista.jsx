import ProdAlimentos from "../../pages/produtos/partials/ProdAlimentos";
import ProdEletronicos from "../../pages/produtos/partials/ProdEletronicos";
import ProdRoupas from "../../pages/produtos/partials/ProdRoupas";

const ProdutoLista = [
  // * Roupas
  {
    id: 1,
    produto: "Calça Jeans Azul 48",
    categoria: "roupas",
    element: <ProdRoupas />,
  },
  {
    id: 2,
    produto: "Camisa Polo Amarela GG",
    categoria: "roupas",
    element: <ProdRoupas />,
  },

  {
    id: 3,
    produto: "Calça Jeans Preta 60",
    categoria: "roupas",
    element: <ProdRoupas />,
  },
  {
    id: 4,
    produto: "Camisa Regata Speedo M",
    categoria: "roupas",
    element: <ProdRoupas />,
  },
  // * Alimentos
  {
    id: 5,
    produto: "Cuscuz 500G Vitamilho",
    categoria: "alimentos",
    element: <ProdAlimentos />,
  },
  {
    id: 6,
    produto: "Carne de Sol 1kg",
    categoria: "alimentos",
  },
  {
    id: 7,
    produto: "Cerveja Spaten 600ml",
    categoria: "alimentos",
  },
  {
    id: 8,
    produto: "Sarapatel Congelado",
    categoria: "alimentos",
  },
  // * Eletrônicos
  {
    id: 9,
    produto: "Notebook Dell 8GB de Ram e SSD 256",
    categoria: "eletronicos",
    element: <ProdEletronicos />,
  },
  {
    id: 10,
    produto: "Celular S10 Lite 6GB de Ram 128 de Armazenamento",
    categoria: "eletronicos",
    element: <ProdEletronicos />,
  },
  {
    id: 11,
    produto: "Kindle 128Gb",
    categoria: "eletronicos",
    element: <ProdEletronicos />,
  },
  {
    id: 12,
    produto: "Teclado Mecânico Redragon Draconik",
    categoria: "eletronicos",
    element: <ProdEletronicos />,
  },
];

export default ProdutoLista;
