import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  let location = useLocation();
  const { pathname } = location;

  console.log(location);

  return (
    <>
      <Navbar />
      <div className="pagina-carregada">
        <h3>Página carregada {pathname}</h3>
        <Outlet />
      </div>
      <br />
      <br />
      <h3>Corpo da página</h3>
      <br />
      <br />
      <br />
      <br />
      <footer>Footer</footer>
    </>
  );
}

export default App;
