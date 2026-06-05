import { filmes } from '../../data/dados';
import Card from '../../components/Card';
import * as S from './style';

export default function Home({ onSelecionarFilme }) {
  return (
    <S.Wrapper>
      <S.Titulo>🎬 CineDev - Meu Catálogo de Filmes</S.Titulo>
      
      <S.Grid>
        {filmes.map((cadaFilme) => (
          <Card 
            key={cadaFilme.id} 
            filme={cadaFilme} 
            onVerMais={() => onSelecionarFilme(cadaFilme)} 
          />
        ))}
      </S.Grid>
    </S.Wrapper>
  );
}