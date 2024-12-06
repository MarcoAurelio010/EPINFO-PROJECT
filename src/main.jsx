import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from "./pages/Capacete-EPI";
import Login from "./pages/Login";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
    <Route path="/" element={<Login />} />  {/* Rota para a página de login */}
    <Route path="/Homeoi" element={<App/>} />  {/* Rota para a página Home */}
    </Router>
  </React.StrictMode>
);