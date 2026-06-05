import * as S from './style';

export default function Diretor({ filme, onVoltar }) {
  return (
    <S.Container>
      <S.BotonVoltar onClick={onVoltar}>← Voltar para o Filme</S.BotonVoltar>
      
      <S.BoxDiretor>
        {/* Renderiza a foto customizada do diretor do filme atual */}
        <S.FotoDiretor src={filme.imgDiretor} alt={filme.diretor} />
        
        <h1 style={{ fontSize: '2.2rem', color: '#e50914', margin: '10px 0 5px 0' }}>
          {filme.diretor}
        </h1>
        
        <p style={{ color: '#b3b3b3', fontSize: '14px', marginBottom: '20px', marginTop: 0 }}>
          Diretor de: <em>{filme.titulo}</em> ({filme.ano})
        </p>
        
        <hr style={{ border: '0.5px solid #2d2d35', margin: '10px 0 20px 0', width: '100%' }} />
        
        <p style={{ fontSize: '1.1rem', color: '#e5e5e5', lineHeight: '1.6', textAlign: 'justify', margin: 0 }}>
          {filme.bioDiretor}
        </p>
      </S.BoxDiretor>
    </S.Container>
  );
}