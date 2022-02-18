import React, { useState, useEffect } from 'react';
import theme from '../../styles/theme';
import api from '../../services/api';

import {
  Container,
  Pokemon,
  PokemonNumber,
  PokemonName,
  ContainerPokemonName,
} from './styles';

const PokemonCard = ({ name }) => {
  const { colors } = theme;
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    api.get(`/pokemon/${name}`).then((response) => {
      const { id, types, sprites } = response.data;

      let backgroundColor = types[0].type.name;

      // Qualquer pokémon com duas classes ou mais e que tenha como primeira classe o tipo "normal",
      // Esse codicinal força a pegar a segunda classe, o motivo desse fluxo é a melhor estilização do layout do app
      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        backgroundColor: colors.backgroundType[backgroundColor],
        image: sprites.other['official-artwork'].front_default,
      });
    });
  }, [name, colors]);

  return (
    <Container to={`pokemon/${name}`} color={pokemon.backgroundColor}>
      <Pokemon>
          <PokemonNumber color={pokemon.backgroundColor}>
            #{pokemon.id}
          </PokemonNumber>
        {pokemon.image && (
          <img src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
        )}
        <ContainerPokemonName color={pokemon.backgroundColor}>
          <PokemonName>{name}</PokemonName>
        </ContainerPokemonName>
      </Pokemon>
    </Container>
  );
};

export default PokemonCard;
