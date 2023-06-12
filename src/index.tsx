import dotenv from "dotenv";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ErrorBoundary } from "components/ErrorBoundary";

dotenv.config();

const rootElement = document.getElementById("root") as Element;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceWorker.js")
      .then((res) => console.log("service worker registered", res))
      .catch((err) => console.error("service worker not registered", err));
  });
}
