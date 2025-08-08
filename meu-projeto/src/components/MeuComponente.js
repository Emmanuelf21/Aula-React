import './MeuComponente.css'
import NavbarResponsiva from './NavbarResponsiva'


const MeuComponente = () => {
  return (
    <div className='meu-componente'>
        <h1>Olá, mundo!</h1>
        <p>Este é meu primeiro componente React!</p>
        <NavbarResponsiva/>
    </div>
  )
}

export default MeuComponente