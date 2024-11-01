import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function DisplayTheme() {
  const { theme } = useContext(ThemeContext);

  return <p>O tema atual é {theme}</p>;
}

export default DisplayTheme;
