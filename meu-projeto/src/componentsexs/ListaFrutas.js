import React, { useState } from 'react';

const ListaFrutas = () => {
    const [frutas, setFrutas] = useState(['Maçã', 'Pera', 'Uva', 'Abacaxi']);

    const adicionar = () => {
        setFrutas([...frutas, 'Morango']);
    };

    return (
        <div>
            <ul>
                {frutas.map((fruta, index) => (
                    <li key={index}>{fruta}</li>
                ))}
            </ul>
            <button style={{cursor:'pointer'}} onClick={adicionar}>Adicionar Fruta</button>
        </div>
    );
};

export default ListaFrutas;
