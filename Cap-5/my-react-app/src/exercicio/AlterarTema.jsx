import { useState } from "react";
import "./style.css";

function AlterarTema() {
  // * Get color white in style.css
  const themeWhite = getComputedStyle(document.body).getPropertyValue(
    "--white"
  );

  // * Get color darkReact in style.css
  const themeDefaultReact = getComputedStyle(document.body).getPropertyValue(
    "--darkReact"
  );

  const [theme, setTheme] = useState(themeDefaultReact);

  const changeTheme = () => {
    setTheme((themeAfter) =>
      themeAfter ===
      (document.documentElement.style.backgroundColor = themeDefaultReact)
        ? (document.documentElement.style.backgroundColor = themeWhite)
        : (document.documentElement.style.backgroundColor = themeDefaultReact)
    );
  };

  let pThemeCurrent = null;

  if (theme === "#242424") {
    pThemeCurrent = <p className="themeColorDark">Theme Current Dark</p>;
  } else {
    pThemeCurrent = <p className="themeColorWhite">Theme Current White</p>;
  }

  return (
    <div>
      {pThemeCurrent}
      <button onClick={changeTheme} className="btn-theme">
        Change Theme
      </button>
    </div>
  );
}

export default AlterarTema;
