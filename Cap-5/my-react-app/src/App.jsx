// import { useState } from "react";
import "./App.css";
import Alternador from "./components/Alterarnador";
import Contador from "./components/Contador";
import Dobrador from "./components/Dobrador";

function App() {
  return (
    <>
      {/* Contador*/}
      <Contador />
      {/* Dobrador */}
      <Dobrador />
      {/* Alternador */}
      <Alternador />
    </>
  );
}

export default App;
