import { Outlet } from "react-router-dom";
import "./App.css";
// * Exemplo/ Explicação do livro
import DisplayTheme from "./explicacao/contexts/DisplayTheme";
import { ThemeProvider } from "./explicacao/contexts/ThemeContext";
import ThemeToggleButton from "./explicacao/contexts/ThemeToggleButton";
import Navbar from "./explicacao/components/Navbar";
// * My Style
import "../src/explicacao/ui/Style.css";

// * Exemplo de um vídeo do youtube para reforçoar o conhecimento
// * Login Context
import Login from "./explicacao/components/Login";
import { LoginContext } from "./explicacao/contexts/LoginContext";
import { useState } from "react";
import Profile from "./explicacao/components/Profile";
import { UserContext } from "./explicacao/contexts/UserContext";
import { ThemeContext2 } from "./explicacao/contexts/ThemeContext2";
import ComponenteFilho from "./explicacao/components/ComponenteFilho";

function App() {
  // * Exemplo de um vídeo do youtube para reforçoar o conhecimento
  const [userName, setUserName] = useState();
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <ThemeProvider>
        <ThemeToggleButton />
        <DisplayTheme />
      </ThemeProvider>
      <div className="createContextVideoYoutube">
        <br />
        <br />
        <h3>Vídeo do Create Context Youtube</h3>
        <Navbar />
        <div className="navbar-outlet">
          <Outlet />
        </div>
      </div>
      <br />
      <div>
        <h3>Multiplos Contextos</h3>
        <UserContext.Provider value={{ name: "João", loggedIn: true }}>
          <ThemeContext2.Provider value={{ theme: "dark" }}>
            <ComponenteFilho />
          </ThemeContext2.Provider>
        </UserContext.Provider>
      </div>
      {/* Exemplo de um vídeo do youtube para reforçoar o conhecimento */}
      <div>
        <h4>Login Context</h4>
        <LoginContext.Provider
          value={{ setUserName, setShowProfile, userName }}
        >
          {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
      </div>
    </>
  );
}

export default App;
