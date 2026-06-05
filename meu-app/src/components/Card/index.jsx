import * as S from './style';

export default function Card({ filme, onVerMais }) {
  return (
    <S.CardBox>
      <S.Imagen src={filme.imagem} alt={filme.titulo} />
      <S.Info>
        <S.Badge>{filme.genero}</S.Badge>
        <h3 style={{ margin: 0, color: '#ffffff' }}>{filme.titulo}</h3>
        <p style={{ margin: 0, color: '#b3b3b3', fontSize: '14px' }}>Ano: {filme.ano}</p>
        
        {/* Quando clica, avisa o pai qual filme foi selecionado */}
        <S.BotonFav onClick={onVerMais}>
          Ver Mais
        </S.BotonFav>
      </S.Info>
    </S.CardBox>
  );
}