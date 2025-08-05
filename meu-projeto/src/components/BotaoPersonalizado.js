import React from 'react'
import './BotaoPersonalizado.css'
const BotaoPersonalizado = ({texto, onClick}) => {
  return (
    <button className="botao-personalizado" onClick={onClick}>
      {texto}
    </button>
  )
}

export default BotaoPersonalizado