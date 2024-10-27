import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./exercicio/components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="pagina-carregada">
        <br />
        <Outlet />
      </div>
    </>
  );
}

export default App;
