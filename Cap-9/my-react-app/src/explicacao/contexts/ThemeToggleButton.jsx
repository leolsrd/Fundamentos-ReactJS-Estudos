import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemeToggleButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Mudar para {theme === "light" ? "dark" : "ligth"}
    </button>
  );
}

export default ThemeToggleButton;
