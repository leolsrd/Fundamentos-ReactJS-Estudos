import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Home </NavLink> |
      <NavLink to="/contato"> Contato </NavLink> |
      <NavLink to="/sobre"> Sobre</NavLink> |
      <NavLink to="/produtos"> Produtos</NavLink>
    </div>
  );
}

export default Navbar;
