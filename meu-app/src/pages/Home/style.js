import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

export const Titulo = styled.h1`
  text-align: center;
  color: #ffffff;
  margin-bottom: 30px;
  font-size: 2.5rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
`;