
import React from "react";
import "./AvatarUsuario.css";

function AvatarUsuario({ nome, imagem }) {
  return (
    <div className="avatar-usuario">
      <img src={imagem} alt={nome} />
      <span>{nome}</span>
    </div>
  );
}

export default AvatarUsuario;

