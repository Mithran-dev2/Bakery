// src/index.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";  // Ensure App.tsx exists in the src folder
import "./index.css";

const rootElement = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
