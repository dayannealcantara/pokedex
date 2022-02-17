import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

export const Container = styled(Link)`
  display: flex;
  height: 150px;
  width: inherit;
  border-radius: 10.5px;
  background: #fff;
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  transition: all ease 0.5s;
  border: 1px solid ${(props) => props.color};
`;

export const Pokemon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > svg {
    position: absolute;
    right: 5px;
    top: 0;
    height: 180px;
    width: 180px;

    path {
      fill: rgba(255, 255, 255, 0.2);
    }
  }

  > img {
    height: 95px;
    width: 95px;
  }
  /* Seção dos types do pokémon */
  div {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-top: 5px;
  }
`;

export const PokemonNumber = styled.span`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 2px;
  /* O número 99 aplica uma opacidade de 60% no hex da cor */
  color: ${theme.colors.text.number}99;
`;

export const PokemonName = styled.span`
background: ${(props) => props.color};
 font-size: 13.1068px;
line-height: 21px;
  text-transform: capitalize;
  color: ${theme.colors.text.white};
`;

