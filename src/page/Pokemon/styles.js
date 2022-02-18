import styled from 'styled-components';
import { Link } from 'react-router-dom';
import pokeball from '../../imagens/Pokeball.png';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 89.2%;
  padding-top: 60px;
`;
export const PokemonsContainer = styled.div`
  display: flex;
  width: 30%;
  height: 100%;
  background-image: url(${pokeball});
  background-color: #74cb48;
  /* justify-content: flex-end; */
  flex-direction: column;
`;
export const ImagePokemon = styled.img`
  display: block;
  position: absolute;
  left: 9%;
  height: 400px;
  width: 400px;
  margin-top: 50px;
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
  text-transform: ;
  color: #ffffff;
  text-transform: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  gap: 12px;
`;
