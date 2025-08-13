import React from 'react';
import './CarrinhoModal.css';

function CarrinhoModal({ carrinho, onFechar, onRemoverItem }) {
  const total = carrinho.reduce((soma, item) => soma + (item.preco*item.quantidade), 0);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Carrinho de Compras</h2>
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index}>
                {item.nome_produto} - R$ {item.preco.toFixed(2)}{' '} - {item.quantidade}x
                <button onClick={() => onRemoverItem(item.id)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
        <p><strong>Total:</strong> R$ {total.toFixed(2)}</p>
        <button onClick={onFechar}>Fechar</button>
      </div>
    </div>
  );
}

export default CarrinhoModal;