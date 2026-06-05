import React, { useState } from 'react';
import HomeFilmes from './pages/HomeFilmes';
import Detalhes from './pages/Detalhes';
import PerfilAtor from './pages/PerfilAtor'; 

export default function App() {
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);
  const [atorSelecionado, setAtorSelecionado] = useState(null);
  const [diretorSelecionado, setDiretorSelecionado] = useState(null); 
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

  return (
    <HomeFilmes onSeleccionarFilme={(filme) => setFilmeSelecionado(filme)} />
  );
}