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
    api.get(`/pokemon/${name}`).then(response => {
      const { id, types, sprites } = response.data;

      let backgroundColor = types[0].type.name;

      if (backgroundColor === 'normal' && types.length > 1) {
        backgroundColor = types[1].type.name;
      }

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        backgroundColor: colors.backgroundType[backgroundColor],
        image: sprites.other['official-artwork'].front_default,
      });
    });
  }, [name, colors]);

  return (
    <Container to={`pokemon/${name}`} color={pokemon.backgroundColor}>
      <Pokemon>
        <PokemonNumber color={pokemon.backgroundColor}>
          {pokemon.number}
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
