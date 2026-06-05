import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Titulo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;

  font-size: 2.5rem;
  line-height: 1.3; 
  flex-wrap: wrap;  

  @media (max-width: 768px) {
    font-size: 1.8rem; 
    gap: 5px;
  } 
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`;