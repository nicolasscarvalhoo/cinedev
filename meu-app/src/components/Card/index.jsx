import React, { useState } from 'react';
import * as S from './style';

export default function Card({ filme, onVerMais }) {
  const [favoritado, setFavoritado] = useState(false);

  return (
    <S.CardBox>
      <S.Imagen src={filme.imagem} alt={filme.titulo} />
      
      <S.Info>
        <S.Badge>{filme.genero}</S.Badge>
        
        <S.TituloCard>{filme.titulo}</S.TituloCard>
        <S.AnoCard>Ano: {filme.ano}</S.AnoCard>
        
        <S.BotonDetalhes onClick={onVerMais}>
          Ver Detalhes
        </S.BotonDetalhes>

        <S.BotonFav $fav={favoritado} onClick={() => setFavoritado(!favoritado)}>
          {favoritado ? 'Favoritado' : 'Favoritar'}
        </S.BotonFav>
      </S.Info>
    </S.CardBox>
  );
}