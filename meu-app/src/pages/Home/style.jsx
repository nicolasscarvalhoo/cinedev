import styled from 'styled-components';

export const PaginaContainer = styled.div`
  max-width: 820px;
  margin: 0 auto;
  padding: 40px 20px;
  color: #ffffff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const HeaderTitulo = styled.h1`
  display: flex;
  align-items: center;       
  justify-content: center;   
  gap: 12px;                 
  font-size: 3.5rem;
  font-weight: 800;
  margin: 30px 0 0 0;        
  color: #ffffff;
  letter-spacing: -1px;

  .emoji {
    font-size: 3rem;         
    display: inline-flex;
    align-items: center;
  }

  .texto {
    display: inline-block;
    line-height: 1;          
  }

  @media (max-width: 500px) {
    font-size: 2.5rem;
    .emoji { font-size: 2.2rem; }
  }
`;

export const Subtitulo = styled.p`
  text-align: center;
  color: #a3a3a3;            
  margin: 12px 0 35px 0;     
  font-size: 1.1rem;
  font-weight: 400;
`;

export const ContainerFiltros = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

export const BotaoFiltro = styled.button`
  background-color: ${props => props.$ativo ? '#e50914' : 'transparent'};
  color: #ffffff;
  border: 2px solid #e50914;
  padding: 8px 18px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background-color: #e50914;
  }
`; 

export const GridFilmes = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 55px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;