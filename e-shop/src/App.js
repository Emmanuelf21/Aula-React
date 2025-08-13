import React, { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import LoginModal from './components/LoginModal';
import ProductList from './components/ProductList';
import CarrinhoModal from './components/CarrinhoModal';
import { supabase } from './supabaseClient';

function App() {
  const [mostrarModalLogin, setMostrarModalLogin] = useState(false);
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);
  const [carrinho, setCarrinho] = useState([]);

  const produtos = [
    { id: 1, nome: 'Camisa E-Shop', preco: 59.90 },
    { id: 2, nome: 'Boné Estiloso', preco: 39.90 },
    { id: 3, nome: 'Tênis Urbano', preco: 129.90 }
  ];

  const abrirModalLogin = () => setMostrarModalLogin(true);
  const fecharModalLogin = () => setMostrarModalLogin(false);
  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const removerItemDoCarrinho = (index) => {
    const novoCarrinho = [...carrinho];
    novoCarrinho.splice(index, 1);
    setCarrinho(novoCarrinho);
  };

  const [usuario, setUsuario] = useState();
  useEffect(()=>{
    const checkUser = async () =>{
      const {data, error} = await supabase.auth.getUser()
      if(data?.user){
        setUsuario(data.user)
      }else if(error){
        console.log('Falha ao achar usuário!');
      }
    }
    checkUser()

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUsuario(session?.user ?? null)
    })

    return () => {
      subscription.subscription.unsubscribe()
    }
  }, [])

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error("Erro ao deslogar:", error.message)
    } else {
      console.log("Usuário deslogado com sucesso!")
      // Se quiser, redireciona para login
      window.location.href = "/login"
    }
  }

  return (
    <div>
      <header style={{ padding: "20px", textAlign: "right", backgroundColor: "#fff", borderBottom: "1px solid #eee" }}>
        <button onClick={abrirCarrinho} style={{background: 'none', border: '1px solid #ccc', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer'}}>
          Ver Carrinho ({carrinho.length})
        </button>
      </header>

      <HeroSection onLoginClick={abrirModalLogin} usuario={usuario} handleLogout={handleLogout}/>
      <ProductList produtos={produtos} onAdicionarAoCarrinho={adicionarAoCarrinho} />

      {mostrarModalLogin && <LoginModal onClose={fecharModalLogin} />}
      
      {mostrarCarrinho && (
        <CarrinhoModal
          carrinho={carrinho}
          onFechar={fecharCarrinho}
          onRemoverItem={removerItemDoCarrinho}
        />
      )}
    </div>
  );
}

export default App;