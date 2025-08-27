import { useState } from 'react';
import './App.css';

function App() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const produtosItems = [
    { name: "Sintetizadores", link: "#" },
    { name: "Drum Machines", link: "#" },
    { name: "Acessórios", link: "#" },
    { name: "Vinils", link: "#" }
  ];

  const galeriaItems = [
    { name: "Fotos", link: "#" },
    { name: "Vídeos", link: "#" },
    { name: "Eventos", link: "#" }
  ];

  const sobreItems = [
    { name: "Nossa História", link: "#" },
    { name: "Equipe", link: "#" },
    { name: "Missão", link: "#" }
  ];

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
            <li>
              <a href="#" className="neon-link">Início</a>
            </li>
            
            <li className="dropdown">
              <a 
                href="#" 
                className="neon-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(0);
                }}
              >
                Produtos ▾
              </a>
              {activeDropdown === 0 && (
                <ul className="dropdown-menu">
                  {produtosItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="dropdown-item">{item.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li>
              <a href="#" className="neon-link">Contato</a>
            </li>
            
            <li className="dropdown">
              <a 
                href="#" 
                className="neon-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(1);
                }}
              >
                Galeria ▾
              </a>
              {activeDropdown === 1 && (
                <ul className="dropdown-menu">
                  {galeriaItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="dropdown-item">{item.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            
            <li className="dropdown">
              <a 
                href="#" 
                className="neon-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown(2);
                }}
              >
                Sobre ▾
              </a>
              {activeDropdown === 2 && (
                <ul className="dropdown-menu">
                  {sobreItems.map((item, index) => (
                    <li key={index}>
                      <a href={item.link} className="dropdown-item">{item.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
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