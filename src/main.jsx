import { StrictMode } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importando o Router
import './index.css';
import Login from "./pages/Login/index.jsx";
import Home from "./pages/home/index.jsx";  // Importe a página Home
import App from "./pages/Capacete-EPI";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Envolvendo toda a aplicação com Router */}
      <Routes>
        <Route path="/" element={<Login />} />  {/* Rota para a página de login */}
        <Route path="/home" element={<Home />} />  {/* Rota para a página Home */}
        <Route path="/capacete" element={<App/>} />  {/* Rota para a página Home */}
      </Routes>
    </Router>
  </StrictMode>
);
