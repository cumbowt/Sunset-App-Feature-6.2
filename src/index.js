import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//  Uses the StrictMode and createRoot APIs.
import App from "./App";
//  Imports the App COMPONENT
const rootElement = document.getElementById("root");
//  API is used to create a root DOM element for a React application
//  The root DOM element is the element that all of the React components are rendered to.
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
