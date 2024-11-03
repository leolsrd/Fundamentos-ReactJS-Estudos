import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
      </ul>
      <ul>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
