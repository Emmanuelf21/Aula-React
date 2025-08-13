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
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);

  const abrirModalLogin = () => setMostrarModalLogin(true);
  const fecharModalLogin = () => setMostrarModalLogin(false);
  const abrirCarrinho = () => setMostrarCarrinho(true);
  const fecharCarrinho = () => setMostrarCarrinho(false);

  // --- Carregar carrinho do banco ---
  const carregarCarrinho = async (usuarioId) => {
    const { data, error } = await supabase
      .from('carrinhos')
      .select('itens')
      .eq('usuario_id', usuarioId)
      .single();

    if (error && error.code !== 'PGRST116') console.error('Erro ao carregar carrinho:', error);
    else setCarrinho(data?.itens || []);
  };

  // --- Adicionar produto ao carrinho ---
  const adicionarAoCarrinho = async (produto) => {
    if (!usuario) return alert("Faça login para adicionar produtos!");

    const novoCarrinho = [...carrinho];
    const index = novoCarrinho.findIndex(item => item.id === produto.id);

    if (index !== -1) {
      novoCarrinho[index].quantidade += 1;
    } else {
      novoCarrinho.push({ ...produto, quantidade: 1 });
    }

    setCarrinho(novoCarrinho);

    const { error } = await supabase
      .from('carrinhos')
      .upsert(
        { usuario_id: usuario.id, itens: novoCarrinho },
        { onConflict: ['usuario_id'] }
      );

    if (error) console.error('Erro ao salvar carrinho:', error);
  };

  // --- Remover produto do carrinho ---
  const removerItemDoCarrinho = async (produtoId) => {
    if (!usuario) return;

    const novoCarrinho = carrinho
      .map(item =>
        item.id === produtoId ? { ...item, quantidade: item.quantidade - 1 } : item
      )
      .filter(item => item.quantidade > 0);

    setCarrinho(novoCarrinho);

    const { error } = await supabase
      .from('carrinhos')
      .upsert(
        { usuario_id: usuario.id, itens: novoCarrinho },
        { onConflict: ['usuario_id'] }
      );

    if (error) console.error('Erro ao atualizar carrinho:', error);
  };

  // --- Inicialização ---
  useEffect(() => {
    const init = async () => {
      // Buscar produtos
      const { data: produtosData, error: produtosError } = await supabase
        .from('produtos')
        .select('*');

      if (produtosError) console.error('Erro ao buscar produtos:', produtosError);
      else setProdutos(produtosData);

      // Checar usuário logado
      const { data: userData } = await supabase.auth.getUser();
      if (userData?.user) {
        setUsuario(userData.user);
        await carregarCarrinho(userData.user.id);
      }

      setLoading(false);
    };

    init();

    // Subscrição de auth
    const { data: subscription } = supabase.auth.onAuthStateChange(async (_event, session) => {
      setUsuario(session?.user ?? null);
      if (session?.user) await carregarCarrinho(session.user.id);
      else setCarrinho([]);
    });

    return () => subscription.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error("Erro ao deslogar:", error.message);
    else {
      setUsuario(null);
      setCarrinho([]);
      console.log("Usuário deslogado com sucesso!");
    }
  };

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <header style={{ padding: "20px", textAlign: "right", backgroundColor: "#fff", borderBottom: "1px solid #eee" }}>
        <button onClick={abrirCarrinho} style={{background: 'none', border: '1px solid #ccc', padding: '8px 16px', borderRadius: '5px', cursor: 'pointer'}}>
          Ver Carrinho ({carrinho.reduce((sum, item) => sum + item.quantidade, 0)})
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
