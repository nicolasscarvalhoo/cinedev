import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 60px 20px;
  color: white;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const BoxDiretor = styled.div`
  background-color: #1f1f1f;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #2d2d35;
  margin-top: 20px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza a foto e os textos */
`;

// NOVO ESTILO: Foto redonda com borda vermelha temática
export const FotoDiretor = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #e50914;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
`;

export const BotonVoltar = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`;