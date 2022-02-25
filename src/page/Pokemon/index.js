import React, { useState, useEffect, useContext } from 'react';
import { ReactComponent as BackIcon } from '../../imagens/back.svg';
import { ReactComponent as KgIcon } from '../../assets/iconPokemon/kg.svg';
import { ReactComponent as AltIcon } from '../../assets/iconPokemon/alt.svg';
import { ReactComponent as CoracaoIcon } from '../../assets/coracao.svg';
import Header from '../../components/Header';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

import {
  Container,
  PokemonsContainer,
  ImagePokemon,
  TitleContainer,
  GoBack,
  DataPokemon,
  ContainerTitle,
  TitlePokemon,
  IdPokemon,
  PokemonType,
  Content,
  DataContent,
  ContainerType,
  ContainerContent,
  TitleCharacters,
  ContainerCaracter,
  ContainerStats,
  RowStats,
  BarStatus,
} from './styles';
import theme from '../../styles/theme';
import { FavoritesContext } from '../../contexts/favorites';

function Pokemon() {
  const { colors } = theme;
  const { togglePokemon, isMarked, pokemons, curti,setCurti } = useContext(FavoritesContext);
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('normal');

  const baseStatsName = ['HP', 'ATK', 'DEF', 'SATK', 'SDEF', 'SPD'];

  useEffect(() => {
    api.get(`/pokemon/${name}`).then(response => {
      const { id, weight, height, stats, sprites, types, abilities, species } =
        response.data;

        setBackgroundColor(types[0].type.name);

      if (types[0].type.name === 'normal' && types.length > 1) {
        setBackgroundColor(types[1].type.name);
      }

      setPokemon({
        id,
        number: `#${'000'.substr(id.toString().length)}${id}`,
        image:
          sprites.other['official-artwork'].front_default ||
          sprites.front_default,
        weight: `${weight / 10} kg`,
        specie: species.name,
        abilities: abilities
          .map(ability =>
            ability.ability.name
              .toLowerCase()
              .split('-')
              .map(s => s.charAt(0).toUpperCase() + s.substring(1))
              .join(' '),
          )
          .join(' / '),
        height: `${height / 10} m`,

        baseStats: [
          stats[0].base_stat,
          stats[1].base_stat,
          stats[2].base_stat,
          stats[3].base_stat,
          stats[4].base_stat,
          stats[5].base_stat,
        ],
        type: types?.map(pokemonType => ({
          name: pokemonType.type.name,
          color: colors.type[pokemonType.type.name],
        })),
      });
    });

    
  }, [name, colors]);
  
  console.log(pokemons.length)
  console.log(backgroundColor)
  const onClickFavoritos = () => {
    togglePokemon({...pokemon, name})

  }
  
   useEffect(() => {
    setCurti(isMarked(pokemon));
  },[pokemons, pokemon, isMarked])

 
  return (
    <>
      <Header color={colors.backgroundType[backgroundColor]} />
      <Container>
        <PokemonsContainer color={colors.backgroundType[backgroundColor]}>
          <TitleContainer>
            <GoBack to="/">
              <BackIcon />
              Voltar
            </GoBack>
            About
          </TitleContainer>
          <ImagePokemon src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
        </PokemonsContainer>
        <DataPokemon>
          <ContainerTitle curti={curti} >
            <a onClick={onClickFavoritos}>
          <CoracaoIcon />
            </a>
            <TitlePokemon color={colors.backgroundType[backgroundColor]}>
              {pokemon.specie}
            </TitlePokemon>
            <IdPokemon color={colors.backgroundType[backgroundColor]}>{pokemon.number}</IdPokemon>
          </ContainerTitle>
          {pokemon.type && (
            <ContainerType>
              {pokemon?.type.map(pokemonType => (
                <PokemonType color={pokemonType.color} key={pokemonType.name}>
                  <span>{pokemonType.name}</span>
                </PokemonType>
              ))}
            </ContainerType>
          )}
          <ContainerContent>
            <Content>
              <DataContent>
                <KgIcon />
                {pokemon.weight}
              </DataContent>
              <span>Weight</span>
            </Content>
            <Content>
              <DataContent>
                <AltIcon />
                {pokemon.height}
              </DataContent>
              <span>Height</span>
            </Content>
            <Content>
              <DataContent>{pokemon.abilities}</DataContent>
              <span>Moves</span>
            </Content>
          </ContainerContent>
          <ContainerCaracter>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</ContainerCaracter>
          <ContainerStats>
            <TitleCharacters color={colors.backgroundType[backgroundColor]}>
              Base Stats
            </TitleCharacters>
            {pokemon?.baseStats?.map((stat, index) => (
              <RowStats color={colors.backgroundType[backgroundColor]} key={index}>
                <strong>{baseStatsName[index]}</strong>
                <span>
                  {'000'.substr(stat.toString().length)}
                  {stat}
                </span>

                <BarStatus percentage={stat} color={colors.backgroundType[backgroundColor]}>
                  <span />
                </BarStatus>
              </RowStats>
            ))}
          </ContainerStats>
        </DataPokemon>
      </Container>
    </>
  );
}

export default Pokemon;
