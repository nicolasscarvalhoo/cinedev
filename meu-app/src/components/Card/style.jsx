import styled from 'styled-components';

export const CardBox = styled.div`
  background-color: #1e1e24;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  border: 1px solid #2d2d35;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const Imagen = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-grow: 1;
  color: #ffffff;
`;

export const Badge = styled.span`
  background-color: #e50914; 
  color: white;
  font-size: 11px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
  align-self: flex-start;
  text-transform: uppercase;
`;

export const TituloCard = styled.h3`
  margin: 0;
  color: #ffffff;
  font-size: 1.4rem;
  text-align: center;
  line-height: 1.3;
`;

export const AnoCard = styled.p`
  margin: 0;
  color: #b3b3b3;
  font-size: 14px;
  text-align: center;
`;

export const BotonDetalhes = styled.button`
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: auto; 
  transition: all 0.2s;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const BotonFav = styled.button`
  background-color: ${props => props.$fav ? '#e50914' : 'transparent'};
  color: #ffffff;
  border: 2px solid #e50914;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 4px;
  transition: all 0.2s;

  &:hover {
    background-color: #e50914;
  }
`;