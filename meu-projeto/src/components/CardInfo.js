import React from 'react'
import "./CardInfo.css";

const CardInfo = ({titulo, descricao}) => {
  return (
    <div className="card-info">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </div>
  )
}

export default CardInfo