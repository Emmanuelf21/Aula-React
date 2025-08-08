import React from 'react'
import CartaoPerfil from '../componentsexs/CartaoPerfil'
import BotaoToggle from '../componentsexs/BotaoToggle'
import InputControlado from '../componentsexs/InputControlado'
import ListaFrutas from '../componentsexs/ListaFrutas'

const Exercicios = () => {
    return (
        <div style={{ marginTop: '40px', marginLeft: '20px' }}>
            <h1>Exercícios</h1>
            <CartaoPerfil />
            <BotaoToggle />
            <InputControlado />
            <ListaFrutas />
        </div>
    )
}

export default Exercicios