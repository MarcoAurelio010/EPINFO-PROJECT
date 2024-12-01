import { StrictMode } from "react";
import React from "react";
import ReactDom from 'react-dom/client'
import './index.css'
import Login from "./pages/Login/index.jsx"

ReactDom.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>
)
