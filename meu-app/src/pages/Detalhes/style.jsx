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

  h2 {
    font-size: 1.8rem;
    margin-top: 40px;
    margin-bottom: 15px;
    border-bottom: 1px solid #2d2d35;
    padding-bottom: 10px;
  }
`;

export const Banner = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.6);
  margin-bottom: 24px;
`;

export const InfoSet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 24px;
  font-size: 16px;
  align-items: center;
  text-align: center;
`;

export const SinopseText = styled.p`
  color: #cccccc;
  font-size: 18px;
  line-height: 1.6;
  margin-top: 10px;
`;

export const AtoresGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;
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

export const MapBox = styled.div`
  width: 100%;
  height: 350px;
  border-radius: 12px;
  overflow: hidden;
  margin-top: 20px;
  border: 1px solid #2d2d35;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
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