import React, { useState } from 'react'
import './Contador.css'

const Contador = () => {
    const [contador, setContador] = useState(0)

    const incrementar = () =>{
        setContador(contador+1)
    }
  const decrementar = () => {
    setContador(contador - 1);
  };

  return (
    <div className='contador'>
      <h2>Contador: {contador}</h2>
      <button onClick={incrementar}>+</button>
      <button onClick={decrementar}>-</button>
    </div>
  );
}

export default Contador