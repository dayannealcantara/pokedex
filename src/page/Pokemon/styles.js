import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { lighten } from 'polished';
import pokeball from '../../assets/pokeball.svg';
import theme from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 83.8%;
  padding-top: 60px;
  gap: 10%;
`;
export const PokemonsContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  background-size: 80%;
  background-position: left center;
  background-repeat: no-repeat;
  background-image: url(${pokeball}); 
  background-color: ${({ color }) => color};
  flex-direction: column;
`;
export const ImagePokemon = styled.img`
  display: flex;

  margin-left: 25%;
  height: 400px;
  width: 400px;
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 30%;
  margin: 4% 6% 0 0;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  color: #ffffff;
  text-transform: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  gap: 12px;
`;

export const DataPokemon = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  gap: 35px;

  div {
    display: flex;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
  a{
    cursor: pointer;
  }
  path {
    fill: ${({ curti }) => curti ? "#EC0344" : null};
  }
`;

export const TitlePokemon = styled.p`
  font-size: 24px;

  font-weight: 700;
  line-height: 32px;

  text-transform: capitalize;
  color: ${({ color }) => color};
  margin-right: 25px;
`;

export const IdPokemon = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 32px;
  color: ${({ color }) => color};
`;

export const DataContent = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.fontPokemon};
  font-size: 14px;
  line-height: 16px;
  gap: 8px;

  path {
    fill: ${props => props.theme.colors.fontPokemon};
  }
`;

export const ContainerType = styled.div`
  display: flex;
  gap: 10px;
`;

export const PokemonType = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px 8px;
  background: ${({ color }) => color};
  border-radius: 10px;

  span {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: #b3b3b3;
    padding-top: 12px;
    font-size: 12px;
    line-height: 12px;
    text-align: center;
  }
`;

export const TitleCharacters = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 16px;
  color: ${({ color }) => color};
  margin-bottom: 20px;
`;

export const Row = styled.div``;

export const ContainerCaracter = styled.div`
 display: flex;
  align-items: center;
  color: ${props => props.theme.colors.fontPokemon};
  font-size: 14px;
  line-height: 16px;

`;

export const ContainerStats = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const RowStats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  strong {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    color: ${({ color }) => color};
    width: 150px;
    border-right: 2px solid #e0e0e0;
  }

  > span {
    font-size: 22px;
    line-height: 25px;
    color: ${theme.colors.text.gray};
    width: 100px;
    text-align: center;
  }
`;

export const BarStatus = styled.div`
  display: flex;
  width: 100%;
  height: 6px;
  background-color: ${props => lighten(0.2, props.color)};
  border-radius: 2px;

  span {
    width: ${props => props.percentage}%;
    height: 100%;
    background: ${props => props.color};
  }
`;
