import React from 'react';
import './HeroSection.css';

function HeroSection({ onLoginClick, usuario, handleLogout }) {
  
  return (
    <div className="hero">
      <h1>Bem-vindo à E-Shop</h1>
      <p>Os melhores produtos você encontra aqui!</p>
      {usuario ? <div>
        <p>{usuario.email}</p>
        <button className="btn-logout" onClick={handleLogout}>Logout</button>
        </div>:<button className="btn-login" onClick={onLoginClick}>Login</button>}
    </div>
  );
}

export default HeroSection;