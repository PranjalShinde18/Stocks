import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ExpandContextProvider from "./context/ExpandContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <ExpandContextProvider>
        <App />
      </ExpandContextProvider>
    </StrictMode>
  </BrowserRouter>
);
