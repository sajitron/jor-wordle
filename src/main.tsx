import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./reset.css";
import "./styles.css";
import App from "./App.tsx";

// biome-ignore lint/style/noNonNullAssertion: <safe to ignore>
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
