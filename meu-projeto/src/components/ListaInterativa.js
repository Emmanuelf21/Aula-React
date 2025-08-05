
import React from "react";
import "./ListaInterativa.css";

function ListaInterativa({ itens, aoClicar }) {
  return (
    <ul className="lista-interativa">
      {itens.map((item, idx) => (
        <li key={idx} onClick={() => aoClicar(item)}>{item}</li>
      ))}
    </ul>
  );
}

export default ListaInterativa;

