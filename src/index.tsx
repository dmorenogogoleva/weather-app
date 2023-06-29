import dotenv from "dotenv";
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ErrorBoundary } from "components/ErrorBoundary";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

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

serviceWorkerRegistration.register();
