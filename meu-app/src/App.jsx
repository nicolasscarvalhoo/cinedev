import React, { useState } from 'react';
import { createGlobalStyle } from 'styled-components'; 
import HomeFilmes from './pages/Home';
import Detalhes from './pages/Detalhes';
import PerfilAtor from './pages/Ator';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0 !important;
    padding: 0 !important;
    background-color: #141414 !important; /* Garante fundo escuro em tudo */
    width: 100%;
    min-height: 100vh;
    box-sizing: border-box;
  }
`;

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [atorSelecionado, setAtorSelecionado] = useState(null);
  const [diretorSelecionado, setDiretorSelecionado] = useState(null);

  const renderizarTelaAtiva = () => {
    if (diretorSelecionado) {
      return (
        <PerfilAtor 
          ator={diretorSelecionado} 
          onVoltar={() => setDiretorSelecionado(null)} 
        />
      );
    }

    if (atorSelecionado) {
      return (
        <PerfilAtor 
          ator={atorSelecionado} 
          onVoltar={() => setAtorSelecionado(null)} 
        />
      );
    }

    if (filmeSelecionado) {
      return (
        <Detalhes 
          filme={filmeSelecionado} 
          onVoltar={() => setFilmeSelecionado(null)} 
          onVerAtor={(ator) => setAtorSelecionado(ator)}
          onVerDiretor={(diretor) => setDiretorSelecionado(diretor)}
        />
      );
    }

    return <HomeFilmes onSeleccionarFilme={(filme) => setFilmeSelecionado(filme)} />;
  };

  return (
    <>
      <GlobalStyle /> 
      
      <div style={{ backgroundColor: '#141414', minHeight: '100vh', margin: 0, padding: 0 }}>
        {renderizarTelaAtiva()}
      </div>
    </>
  );
}