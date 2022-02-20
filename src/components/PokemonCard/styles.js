import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from '../../styles/theme';

export const Container = styled(Link)`
  display: flex;
  height: 150px;
  width: inherit;
  border-radius: 13px;
  background: ${props => props.theme.colors.card};
  box-shadow: 1px 3px 12px 0 rgba(0, 0, 0, 0.3);
  transition: all ease 0.5s;
  border: 2px solid ${props => props.color};
`;

export const Pokemon = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > img {
    height: 95px;
    width: 95px;
  }
`;

export const PokemonNumber = styled.span`
  font-size: 10.4854px;
  line-height: 16px;
  width: 85%;
  padding-top: 5px;
  text-align: right;
  color: ${props => props.color};
`;

export const ContainerPokemonName = styled.div`
  display: flex;
  background: ${props => props.color};
  width: 100%;
  height: 100%;
  font-size: 13.1068px;
  border-radius: 0px 0px 10px 10px;
  justify-content: center;
  align-items: center;
`;

export const PokemonName = styled.span`
  color: ${theme.colors.text.white};
  font-size: 13px;
  line-height: 21px;
  text-transform: capitalize;
`;
