import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./components/App";
import { TodoProvider } from "./contexts/TodoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
