import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import AppDefault from "./components/AppDefault.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="AppDefault" element={<AppDefault />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
);
