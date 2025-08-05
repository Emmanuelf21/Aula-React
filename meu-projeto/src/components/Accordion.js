
import React, { useState } from "react";
import "./Accordion.css";

function Accordion({ perguntas }) {
  const [ativa, setAtiva] = useState(null);

  const toggle = (index) => {
    setAtiva(ativa === index ? null : index);
  };

  return (
    <div className="accordion">
      {perguntas.map((item, index) => (
        <div key={index} className="accordion-item">
          <button className="accordion-titulo" onClick={() => toggle(index)}>
            {item.pergunta}
          </button>
          {ativa === index && (
            <div className="accordion-conteudo">
              <p>{item.resposta}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

