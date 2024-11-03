import { Outlet } from "react-router-dom";
import "./App.css";
import DisplayTheme from "./explicacao/contexts/DisplayTheme";
import { ThemeProvider } from "./explicacao/contexts/ThemeContext";
import ThemeToggleButton from "./explicacao/contexts/ThemeToggleButton";
import Navbar from "./explicacao/components/Navbar";
// My Style
import "../src/explicacao/ui/Style.css";
import Login from "./explicacao/components/Login";

// Login Context
import { LoginContext } from "./explicacao/contexts/LoginContext";
import { useState } from "react";
import Profile from "./explicacao/components/Profile";

function App() {
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
        <h4>Login Context</h4>
        <LoginContext.Provider value={(userName, setUserName, setShowProfile)}>
          {showProfile ? <Profile /> : <Login />}
        </LoginContext.Provider>
      </div>
    </>
  );
}

export default App;
