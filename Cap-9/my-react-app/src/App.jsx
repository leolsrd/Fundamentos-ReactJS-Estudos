import "./App.css";
import DisplayTheme from "./explicacao/contexts/DisplayTheme";
import { ThemeProvider } from "./explicacao/contexts/ThemeContext";
import ThemeToggleButton from "./explicacao/contexts/ThemeToggleButton";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeToggleButton />
        <DisplayTheme />
      </ThemeProvider>
    </>
  );
}

export default App;
