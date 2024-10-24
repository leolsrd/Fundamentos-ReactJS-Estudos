import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./exercicio/components/Navbar";

function App() {
  let location = useLocation();
  const { pathname } = location;

  // ! Verificar melhor este retorno
  // console.log(location);

  return (
    <>
      <Navbar />
      <div className="pagina-carregada">
        <h3>Página carregada {pathname}</h3>
        <br />
        <Outlet />
      </div>
    </>
  );
}

export default App;
