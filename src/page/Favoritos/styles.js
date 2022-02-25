import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  margin-top: 55px;
  align-items: center;
  gap: 72px;
`;

export const LogoFavoritos = styled.img``;

export const TextFavorito = styled.p`
  color: #ec0344;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: space-between;
  border-top: 2px solid #dde2ea;
  padding-top: 56px;

  @media (max-width: 500px) : {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  color: #b3b3b3;
  text-transform: none;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  gap: 12px;
`;

export const PokemonsContainer = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 18%);
  gap: 25px;

  @media (max-width: 500px) : {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const Card = styled.div`
  display: flex;
  height: 150px;
  width: inherit;
  border-radius: 13px;
  background: #f2f4f7;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  transition: all ease 0.5s;
`;
export const PokemonCardVazio = styled.div `
  height: 150px;
  width: 100%;        
  background: ${props => props.theme.colors.cardVazio};
  border-radius: 10px;
`