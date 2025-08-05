
import React from "react";
import "./Alerta.css";

function Alerta({ tipo, mensagem }) {
  return <div className={`alerta alerta-${tipo}`}>{mensagem}</div>;
}

export default Alerta;

