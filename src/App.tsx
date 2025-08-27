import './App.css';

function App() {
  return (
    <div className="App">
      <div className="synthwave-background">
        <div className="stars"></div>
        <div className="sun"></div>
        <div className="mountains"></div>
        <div className="grid-lines"></div>
      </div>
      
      <nav className="synth-nav">
        <div className="nav-container">
          <div className="logo">SYNTHWAVE</div>
          <ul className="menu">
            <li><a href="#" className="neon-link">Início</a></li>
            <li><a href="#" className="neon-link">Produtos</a></li>
            <li><a href="#" className="neon-link">Contato</a></li>
            <li><a href="#" className="neon-link">Galeria</a></li>
            <li><a href="#" className="neon-link">Sobre</a></li>
          </ul>
        </div>
      </nav>
      
      <main className="synth-main">
        <h1 className="neon-title">Bem-vindo ao universo synthwave!</h1>
        <p className="neon-text">Explore nossas opções no menu acima.</p>
        
        <div className="content-section">
          <div className="content-card">
            <h2>Destaques</h2>
            <p>Confira nossos produtos em destaque esta semana.</p>
            <button className="synth-button">Ver mais</button>
          </div>
          <div className="content-card">
            <h2>Novidades</h2>
            <p>Veja o que acabou de chegar em nossa loja.</p>
            <button className="synth-button">Ver mais</button>
          </div>
          <div className="content-card">
            <h2>Ofertas</h2>
            <p>Aproveite as promoções especiais por tempo limitado.</p>
            <button className="synth-button">Ver mais</button>
          </div>
        </div>
      </main>
      
      <footer className="synth-footer">
        <p>© 2023 SynthWave Experience • Todos os direitos reservados</p>
      </footer>
    </div>
  );
}

export default App;