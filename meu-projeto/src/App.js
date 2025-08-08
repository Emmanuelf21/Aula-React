
import React from 'react';
import MeuComponente from './components/MeuComponente';
import Contador from './components/Contador';
import BotaoPersonalizado from './components/BotaoPersonalizado';
import CardInfo from './components/CardInfo';
import Alerta from './components/Alerta';
import InputComLabel from './components/InputComLabel';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import AvatarUsuario from './components/AvatarUsuario';
import ListaInterativa from './components/ListaInterativa';
import NavbarResponsiva from './components/NavbarResponsiva';
import FooterSimples from './components/FooterSimples';
import BadgeStatus from './components/BadgeStatus';
import ProgressBar from './components/ProgressBar';
import Accordion from './components/Accordion';
import TabsNavegacao from './components/TabsNavegacao';
import GaleriaImagens from './components/GaleriaImagens';
import CartaoPerfil from './componentsexs/CartaoPerfil';
import BotaoToggle from './componentsexs/BotaoToggle';
import InputControlado from './componentsexs/InputControlado';
import ListaFrutas from './componentsexs/ListaFrutas';

function App() {
  return (
    <div className="App">
      <div>

      {/* Componentes sem props obrigatórias */}
      <MeuComponente />
      <Contador />
      <BotaoPersonalizado texto="Clique Aqui" onClick={() => alert('Clicado!')} />
      <CardInfo titulo="Título Exemplo" descricao="Descrição do card aqui." />
      <Alerta tipo="sucesso" mensagem="Operação realizada com sucesso!" />
      <InputComLabel label="Digite algo:" placeholder="Texto aqui" />
      <Modal aberto={false} fechar={() => {}}>Conteúdo do modal</Modal>
      <Spinner />
      <AvatarUsuario nome="Gabriel" imagem="https://via.placeholder.com/48" />
      <ListaInterativa itens={['Item 1', 'Item 2']} aoClicar={(item) => alert(item)} />
      <NavbarResponsiva />
      <FooterSimples />
      <BadgeStatus tipo="ativo" texto="Ativo" />
      <ProgressBar valor={75} />
      <Accordion perguntas={[
        { pergunta: 'O que é React?', resposta: 'Uma biblioteca JavaScript para UIs.' },
        { pergunta: 'O que é um componente?', resposta: 'Bloco reutilizável de interface.' }
      ]} />
      <TabsNavegacao abas={[
        { titulo: 'Aba 1', conteudo: <p>Conteúdo da aba 1</p> },
        { titulo: 'Aba 2', conteudo: <p>Conteúdo da aba 2</p> }
      ]} />
      <GaleriaImagens imagens={[
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/150'
      ]} />
      </div>
      <div style={{marginTop:'40px', marginLeft:'20px'}}>
        <h1>Exercícios</h1>
        <CartaoPerfil/>
        <BotaoToggle/>
        <InputControlado/>
        <ListaFrutas/>
      </div>
    </div>
  );
}

export default App;

