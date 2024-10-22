import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.jsx";
import AppDefault from "./routes/AppDefault.jsx";
import ListaDeUsuarios from "./routes/ListaDeUsuarios.jsx";

// const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "app-default",
        element: <AppDefault />,
      },
      {
        path: "usuarios",
        element: <ListaDeUsuarios />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
