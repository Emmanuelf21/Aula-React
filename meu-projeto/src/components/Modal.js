
import React from "react";
import "./Modal.css";

function Modal({ aberto, fechar, children }) {
  if (!aberto) return null;
  return (
    <div className="modal-overlay" onClick={fechar}>
      <div className="modal-conteudo" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={fechar} className="modal-fechar">Fechar</button>
      </div>
    </div>
  );
}

export default Modal;

