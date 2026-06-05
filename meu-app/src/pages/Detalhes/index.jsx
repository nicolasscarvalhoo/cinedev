import React from 'react';
import * as S from './style';

export default function Detalhes({ filme, onVoltar, onVerAtor, onVerDiretor }) {
  if (!filme) {
    return (
      <S.Container>
        <S.BotonVoltar onClick={onVoltar}>← Voltar para o Catálogo</S.BotonVoltar>
        <p style={{ textAlign: 'center' }}>Carregando dados do filme...</p>
      </S.Container>
    );
  }

  const enderecoBusca = `${filme.local || ''} ${filme.pais || ''}`;

  return (
    <S.Container>
      <S.BotonVoltar onClick={onVoltar}>← Voltar para o Catálogo</S.BotonVoltar>
      
      <S.Banner src={filme.imagemBanner || filme.imagem} alt={filme.titulo} />
      
      <h1>{filme.titulo}</h1>
      
      <S.InfoSet>
        <p><strong>Ano de Lançamento:</strong> {filme.ano}</p>

        <p>
          <strong>Diretor:</strong> 
          <S.DiretorLink onClick={() => onVerDiretor({ nome: filme.diretor, foto: filme.imgDiretor, bio: filme.bioDiretor })}>
            {filme.diretor}
          </S.DiretorLink>
        </p>
        
        <p style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '0px' }}>Elenco Principal:</p>
        <S.AtoresGrid>
          {filme.atores && filme.atores.length > 0 ? (
            filme.atores.map((ator, index) => (
              <S.AtorChip key={index} onClick={() => onVerAtor(ator)}>
                {ator.nome}
              </S.AtorChip>
            ))
          ) : (
            <p style={{ color: '#aaaaaa', fontSize: '14px' }}>Elenco não disponível.</p>
          )}
        </S.AtoresGrid>
      </S.InfoSet>

      <hr style={{ borderColor: '#2d2d35', margin: '20px 0' }} />

      <S.SinopseText><strong>Sinopse:</strong> {filme.sinopse}</S.SinopseText>

      <h2>Cenário e Local de Gravação</h2>
      <p style={{ textAlign: 'center', color: '#b3b3b3', marginBottom: '20px' }}>
        Este filme foi gravado em: <strong>{filme.local || 'Não informado'} ({filme.pais || 'Não informado'})</strong>
      </p>

      {filme.local && (
        <S.MapBox>
          <iframe
            title="Mapa de Gravação"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src={`https://maps.google.com/maps?q=${encodeURIComponent(enderecoBusca)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          ></iframe>
        </S.MapBox>
      )}
    </S.Container>
  );
}