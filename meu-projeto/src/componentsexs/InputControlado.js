import React, { useState } from 'react'

const InputControlado = () => {
    const [texto, setTexto] = useState('')

  return (
    <div style={{marginTop: '10px'}}>
        <input onChange={(e) => {setTexto(e.target.value)}} value={texto}/>
        <p>Texto: {texto}</p>
    </div>
  )
}

export default InputControlado