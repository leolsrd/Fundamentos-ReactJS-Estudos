import "./App.css";
import "./Style.css";
// * Importando o React Router DOM
// import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavLink } from "react-router-dom";

// import Home from "./components/Home";
// import AppDefault from "./components/AppDefault";

function App() {
  return (
    <>
      <nav>
        <NavLink
          to="/AppDefault"
          className={({ isActive }) =>
            isActive ? "active-link" : "inactive-link"
          }
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          App Default
        </NavLink>{" "}
        |
        <NavLink
          to="/home"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          style={({ isActive }) => ({ color: isActive ? "red" : "blue" })}
        >
          Home
        </NavLink>
      </nav>
    </>
  );
}

export default App;
