import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // si usás Tailwind o estilos globales
import App from "./src/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
