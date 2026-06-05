import React, { useState } from 'react';
import { filmes } from '../../data/dados';
import Card from '../../components/Card';
import * as S from './style';

export default function HomeFilmes({ onSeleccionarFilme }) {
  const [generoSelecionado, setGeneroSelecionado] = useState('Todos');

  const generosDisponiveis = ['Todos', 'Drama', 'Ação', 'Comédia', 'Fantasia', 'Crime', 'Infantil'];

  const filmesFiltrados = generoSelecionado === 'Todos'
    ? filmes
    : filmes.filter(filme => filme.genero.toLowerCase().includes(generoSelecionado.toLowerCase()));

  return (
    <S.PaginaContainer>
      <S.HeaderTitulo>
        <span className="emoji">🎬</span>
        <span className="texto">CineDev</span>
      </S.HeaderTitulo>
      
      <S.Subtitulo></S.Subtitulo>

      <S.ContainerFiltros>
        {generosDisponiveis.map((genero) => (
          <S.BotaoFiltro
            key={genero}
            $ativo={generoSelecionado === genero}
            onClick={() => setGeneroSelecionado(genero)}
          >
            {genero}
          </S.BotaoFiltro>
        ))}
      </S.ContainerFiltros>

      <S.GridFilmes>
        {filmesFiltrados.map((filme) => (
          <Card 
            key={filme.id} 
            filme={filme} 
            onVerMais={() => onSeleccionarFilme(filme)} 
          />
        ))}
      </S.GridFilmes>
    </S.PaginaContainer>
  );
}