
import React from "react";
import "./GaleriaImagens.css";

function GaleriaImagens({ imagens }) {
  return (
    <div className="galeria">
      {imagens.map((src, i) => (
        <img key={i} src={src} alt={`img-${i}`} />
      ))}
    </div>
  );
}

export default GaleriaImagens;

