import React, { useState, useEffect } from "react";

function App() {
  const [epiData, setEpiData] = useState({
    name: "",
    image: "",
    exchangeDate: "",
    quantity: 0,
    tips: "",
    damagedInfo: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5173/"); // Flask API
      const data = await response.json();
      setEpiData(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-b from-blue-800 to-blue-900">
    <div className="bg-gradient-to-b from-cyan-400 to-cyan-600 w-full h-screen sm:h-auto sm:w-full sm:max-w-md sm:rounded-lg p-8 shadow-lg text-center">
      <div className="flex justify-between items-start mb-6">
        {/* Lado esquerdo (Imagem e Nome) */}
        <div className="flex items-center gap-4">
          {epiData.image ? (
            <img
              src={epiData.image}
              alt={epiData.name}
              className="w-20 h-20 border-2 border-gray-300"
            />
          ) : (
            <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
          )}
          <h2 className="text-lg font-bold text-white">{epiData.name || "Capacete"}</h2>
        </div>

        {/* Lado direito (Data de Troca e Quantidade) */}
        <div className="flex flex-col items-end">
          <p className="text-sm text-white">
            <strong>Troca prevista em:</strong> {epiData.exchangeDate || "DD/MM/YYYY"}
          </p>
          <p className="text-sm text-white">
            <strong>Quantidade:</strong> {epiData.quantity || 0}
          </p>
        </div>
      </div>

      {/* Texto de EPI avariado */}
      <div className="bg-gray-100 p-3 rounded-lg mb-4">
        <h3 className="font-medium text-sm text-gray-700 mb-2">Como saber quando o EPI está avariado?</h3>
        <p className="text-xs text-gray-600">{epiData.damagedInfo || "Texto informativo será exibido aqui."}</p>
      </div>

      {/* Dicas de conservação */}
      <div className="bg-gray-100 p-3 rounded-lg">
        <h3 className="font-medium text-sm text-gray-700 mb-2">Dicas para manter seu EPI conservado</h3>
        <p className="text-xs text-gray-600">{epiData.tips || "Texto com dicas será exibido aqui."}</p>
      </div>
    </div>
  </div>
);
}

export default App;
