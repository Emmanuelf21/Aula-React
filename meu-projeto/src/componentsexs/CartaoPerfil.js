import React from 'react'
import './CartaoPerfil.css'
import verstappen from '../assets/verstappen.webp'
import Curtir from './Curtir'

const CartaoPerfil = () => {
  return (
    <div className='card-perfil'>
        <img src={verstappen}/>
        <div>
            <h2>Cid Verstappen</h2>
            <p>A primeira preguiça a ser campeã mundial de formula 1</p>
        </div>
        <div>
            <Curtir/>
        </div>
    </div>
  )
}

export default CartaoPerfil