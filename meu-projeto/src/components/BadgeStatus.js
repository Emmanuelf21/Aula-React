
import React from "react";
import "./BadgeStatus.css";

function BadgeStatus({ tipo = "ativo", texto = "Status" }) {
  return <span className={`badge badge-${tipo}`}>{texto}</span>;
}

export default BadgeStatus;

