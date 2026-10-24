import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles/index.css";
import {RouterProvider} from "react-router/dom";
import {router} from "./app/AppRouter";
import ThemeSync from "./app/ThemeSync";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeSync />
    <RouterProvider router={router} />
  </StrictMode>,
);
