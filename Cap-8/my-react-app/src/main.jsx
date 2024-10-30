import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import MyRoutes from "./routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={MyRoutes} />
  </StrictMode>
);
