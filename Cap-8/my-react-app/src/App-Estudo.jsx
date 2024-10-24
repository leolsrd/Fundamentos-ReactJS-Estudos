import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar-Estudo";
import "./Style.css";
// * Importando o React Router DOM

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Rotas</h1>
      <Outlet />
      <h2>
        <p>Footer</p>
      </h2>
    </div>
  );
}

export default App;
