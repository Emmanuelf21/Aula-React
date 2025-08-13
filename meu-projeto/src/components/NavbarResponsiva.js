

import { NavLink } from "react-router";
import "./NavbarResponsiva.css";

function NavbarResponsiva() {
  return (
    <nav className="navbar">
      <h2 className="logo">MeuSite</h2>
      <NavLink to='/Exercicios' className='link-exercicios'>Exercicios</NavLink>
      <ul className="nav-links">
        <li><a href="#">Início</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  );
}

export default NavbarResponsiva;


