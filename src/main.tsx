import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRouter from "./routes/AppRouter";

const rootElement = document.getElementById("root");

// Validación de seguridad: si no existe el div root, lanza error
if (!rootElement) {
  throw new Error("No se encontró el elemento #root en el index.html");
}

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </StrictMode>
);
