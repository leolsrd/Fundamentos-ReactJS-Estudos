import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "./exercicio/pages/Home.jsx";
import Sobre from "./exercicio/pages/Sobre.jsx";
import Contato from "./exercicio/pages/Contato.jsx";
import AreaAdministrativa from "./exercicio/pages/AreaAdministrativa.jsx";
import Produtos from "./exercicio/pages/produtos/Produtos.jsx";
import ProdutosCategorias from "./exercicio/pages/produtos/partials/ProdutosCategorias.jsx";
import ProdDetails from "./exercicio/pages/produtos/partials/ProdDetails.jsx";

const MyRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/contato",
        element: <Contato />,
      },
      {
        path: "produtos",
        element: <Produtos />,
      },
      {
        path: "/produtos/:categoriaPath",
        element: <ProdutosCategorias />,
      },
      {
        path: "/produtos-details/:categoria/:id",
        element: <ProdDetails />,
      },
      {
        path: "/area-administrativa",
        element: <AreaAdministrativa />,
      },
    ],
  },
]);

export default MyRoutes;
