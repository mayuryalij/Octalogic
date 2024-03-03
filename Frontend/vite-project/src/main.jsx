import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import StepContext from "./StepContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StepContext>
      <App />
    </StepContext>
  </React.StrictMode>
);
