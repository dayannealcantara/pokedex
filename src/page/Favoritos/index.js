import React, { useState } from 'react';
import { ReactComponent as BackIcon } from '../../imagens/back.svg';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Wrapper,
  LogoFavoritos,
  TextFavorito,
  GoBack,
  ContainerMenu,
  SearchContainer,
  PokemonsContainer,
} from './styles';

import Logofavoritos from '../../imagens/curtir.png';

function Favoritos({ getQuery }) {
  const [pokemons, setPokemons] = useState([]);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SearchContainer>
            <GoBack to="/">
              <BackIcon />
              Voltar
            </GoBack>
            <ContainerMenu to="meus-favoritos">
              <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
              <TextFavorito>Meus Favoritos</TextFavorito>
            </ContainerMenu>
            <div style={{ width: '151px' }} />
          </SearchContainer>

          <PokemonsContainer>
            {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.name} name={pokemon.name} />
            ))}
            {pokemons.length <= 12
              ? new Array(12).map(row => <div>teste, {row}</div>)
              : null}
          </PokemonsContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default Favoritos;
