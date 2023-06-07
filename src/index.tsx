import dotenv from "dotenv";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";

dotenv.config();

const rootElement = document.getElementById("root") as Element;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
