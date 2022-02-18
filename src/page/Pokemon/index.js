import React from 'react';
import { ReactComponent as BackIcon } from '../../imagens/back.svg';
// import api from '../../services/api';

import {
  Container,
  PokemonsContainer,
  ImagePokemon,
  TitleContainer,
  GoBack,
} from './styles';

function Pokemon() {
  return (
    <Container>
      <PokemonsContainer  alt="logo favoritos">
        <TitleContainer>
          <GoBack to="/">
            <BackIcon /> Voltar
          </GoBack>
          About
        </TitleContainer>
        <ImagePokemon src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" />
      </PokemonsContainer>
    </Container>
  );
}

export default Pokemon;
