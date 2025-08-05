import React, { useState } from 'react'

const BotaoToggle = () => {
    const [status, setStatus] = useState('ON')
    const toggle = () => {
        setStatus(!status);
    };

    const estilo ={
        border: 'none',
        height: '30px',
        width: '40px',
        textAlign: 'center',
        marginTop: '10px',
        color: 'white',
        backgroundColor: status ? 'green':'red'
    }
    return (
        <div className='btn'>
            <button style={estilo} onClick={toggle}>{status ? 'ON':'OFF'}</button>
        </div>
    )
}

export default BotaoToggle