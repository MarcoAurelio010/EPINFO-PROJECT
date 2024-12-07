import { StrictMode } from "react";
import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importando o Router
import './index.css';
import Login from "./pages/Login";
import Home from "./pages/Home";  
import CapaceteInfo from "./pages/Capacete-EPI";
import LuvasInfo from "./pages/Luva-EPI";
import BotasInfo from "./pages/Botas-EPI";
import OculosInfo from "./pages/Oculos-EPI";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>  {/* Envolvendo toda a aplicação com Router */}
      <Routes>
        <Route path="/" element={<Login />} />  {/* Rota para a página de login */}
        <Route path="/home" element={<Home />} />  {/* Rota para a página Home */}
        <Route path="/capacete" element={<CapaceteInfo/>} />  {/* Rota para a página Capacete */}
        <Route path="/luvas" element={<LuvasInfo/>} />  {/* Rota para a página Capacete */}
        <Route path="/botas" element={<BotasInfo/>} />  {/* Rota para a página Capacete */}
        <Route path="/oculos" element={<OculosInfo/>} />  {/* Rota para a página Capacete */}
      
      </Routes>
    </Router>
  </StrictMode>
);