import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
