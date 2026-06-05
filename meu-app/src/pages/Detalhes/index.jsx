import * as S from './style';

export default function Detalhes({ filme, onVoltar, onVerDiretor, onVerAtor }) {
  return (
    <S.Container>
      <S.BotonVoltar onClick={onVoltar}>← Voltar para o Catálogo</S.BotonVoltar>
      
      <S.Banner src={filme.imagem} alt={filme.titulo} />
      
      <S.InfoSet>
        <S.Badge>{filme.genero}</S.Badge>
        
        <h1 style={{ fontSize: '2.5rem', margin: '10px 0' }}>{filme.titulo}</h1>
        <p style={{ color: '#b3b3b3', margin: 0 }}><strong>Ano de Lançamento:</strong> {filme.ano}</p>
        
        <p style={{ color: '#ffffff', margin: '5px 0', fontSize: '1.1rem' }}>
          <strong>Diretor:</strong> 
          <S.DiretorLink onClick={onVerDiretor}>
            {filme.diretor}
          </S.DiretorLink>
        </p>

        <div style={{ marginTop: '5px', textAlign: 'center' }}>
          <strong style={{ color: '#ffffff', fontSize: '1.1rem' }}>Elenco Principal:</strong>
          <S.AtoresGrid>
            {filme.atores.map((ator, index) => (
              <S.AtorChip key={index} onClick={() => onVerAtor(ator)}>
                 {ator.nome}
              </S.AtorChip>
            ))}
          </S.AtoresGrid>
        </div>
        
        <hr style={{ border: '0.5px solid #2d2d35', margin: '20px 0' }} />
        
        <h2>Sinopse</h2>
        <S.SinopseText>{filme.sinopse}</S.SinopseText>
      </S.InfoSet>
    </S.Container>
  );
}