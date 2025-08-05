
import React, { useState } from "react";
import "./TabsNavegacao.css";

function TabsNavegacao({ abas }) {
  const [ativa, setAtiva] = useState(0);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {abas.map((aba, i) => (
          <button key={i}
            className={`tab ${ativa === i ? "ativa" : ""}`}
            onClick={() => setAtiva(i)}
          >
            {aba.titulo}
          </button>
        ))}
        </div>
      <div className="tab-conteudo">{abas[ativa].conteudo}</div>
    </div>
  );
}

export default TabsNavegacao;

