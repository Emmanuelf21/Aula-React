import React, { useState } from 'react'
import './Curtir.css'

const Curtir = () => {
  const [curtidas, setCurtidas] = useState(4)

  const incrementar = ()=>{
    setCurtidas(curtidas+1)
  }
    return (
    <div className='curtir'>
        <p>{curtidas}</p>
        <button onClick={incrementar}>👍</button>
    </div>
  )
}

export default Curtir