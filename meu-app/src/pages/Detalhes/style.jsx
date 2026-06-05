import styled from 'styled-components';

export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  color: white;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

  h1, h2 {
    color: #ffffff;
    font-size: 2.5rem;
    line-height: 1.4;   
    text-align: center; 
    margin-bottom: 20px;

    @media (max-width: 768px) {
      font-size: 1.8rem; 
    }
  }
`;

export const BotonVoltar = styled.button`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 30px;
  transition: all 0.2s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

export const Banner = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
`;

export const InfoSet = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SinopseText = styled.p`
  color: #cccccc;
  font-size: 18px;
  line-height: 1.6;
`;

export const DiretorLink = styled.span`
  color: #e50914;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  margin-left: 5px;
  transition: color 0.2s, text-decoration 0.2s;

  &:hover {
    color: #b81d24;
    text-decoration: underline;
  }
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

export const AtoresGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 15px;
  justify-content: center; 
`;

export const AtorChip = styled.span`
  background-color: #26262b;
  color: #e5e5e5;
  font-size: 14px;
  padding: 6px 14px;
  border-radius: 20px;
  border: 1px solid #383842;
  font-weight: 500;
  cursor: pointer; 
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #e50914; 
    color: white;
    border-color: #e50914;
    transform: scale(1.05); 
  }
`;