import { useState } from 'react';
import Home from './pages/Home';
import Detalhes from './pages/Detalhes';
import Diretor from './pages/Diretor';
import Ator from './pages/Ator'; 
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #141414; 
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
`;

function App() {
  const [filmeAtivo, setFilmeAtivo] = useState(null);
  const [diretorAtivo, setDiretorAtivo] = useState(null);
  const [atorAtivo, setAtorAtivo] = useState(null); 

  return (
    <>
      <GlobalStyle />

      {atorAtivo ? (
        <Ator 
          ator={atorAtivo} 
          onVoltar={() => setAtorAtivo(null)} 
        />
      ) : diretorAtivo ? (
        <Diretor 
          filme={diretorAtivo} 
          onVoltar={() => setDiretorAtivo(null)} 
        />
      ) : filmeAtivo ? (
        <Detalhes 
          filme={filmeAtivo} 
          onVoltar={() => setFilmeAtivo(null)} 
          onVerDiretor={() => setDiretorAtivo(filmeAtivo)}
          onVerAtor={(ator) => setAtorAtivo(ator)} 
        />
      ) : (
        <Home 
          onSelecionarFilme={(filme) => setFilmeAtivo(filme)} 
        />
      )}
    </>
  );
}

export default App;