import React, { useState, useEffect, useCallback } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import api from '../../services/api';

import {
  Container,
  Wrapper,
  Fieldset,
  Legend,
  LogoBuscar,
  LogoFavoritos,
  TextFavorito,
  Buscar,
  ContainerMenu,
  SearchContainer,
  PokemonsContainer,
} from './styles';
import Logopesquisar from '../../imagens/pesqui.png';
import Logofavoritos from '../../imagens/curtir.png';
import Error from '../../components/Helper/Error';

function ListPokemon({ getQuery }) {
  const NUMBER_POKEMONS = 15;
  const NUMBER_MAX_POKEMONS_API = 750;

  const [pokemons, setPokemons] = useState([]);
  const [pokemonSearch, setPokemonSearch] = useState('');
  const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(NUMBER_POKEMONS);

  const handleSearchPokemons = useCallback(async () => {
    const response = await api.get(`/pokemon?limit=${NUMBER_MAX_POKEMONS_API}`);

    setPokemonSearch(pokemonSearch.toLocaleLowerCase());

    const pokemonsSearch = response.data.results.filter(({ name }) =>
      name.includes(pokemonSearch),
    );
    setPokemons(pokemonsSearch);
  }, [pokemonSearch]);

  const handlePokemonsListDefault = useCallback(async () => {
    const response = await api.get('/pokemon', {
      params: {
        limit: NUMBER_POKEMONS,
      },
    });
    setPokemons(response.data.results);
  }, []);

  const handleMorePokemons = useCallback(
    async offset => {
      const response = await api.get(`/pokemon`, {
        params: {
          limit: NUMBER_POKEMONS,
          offset,
        },
      });

      setPokemons(state => [...state, ...response.data.results]);
      setPokemonsOffsetApi(state => state + NUMBER_POKEMONS);
    },
    [NUMBER_POKEMONS],
  );

  useEffect(() => {
    const isSearch = pokemonSearch.length >= 2;

    if (isSearch) handleSearchPokemons();
    else handlePokemonsListDefault();
  }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <SearchContainer>
            <Fieldset>
              <Legend>Buscar</Legend>
              <Buscar
                type="text"
                placeholder={'Busque seu Pokemon'}
                value={pokemonSearch}
                onChange={e => setPokemonSearch(e.target.value)}
              />
              <LogoBuscar src={Logopesquisar} alt="logo de pesquisa" />
            </Fieldset>
            <ContainerMenu>
              <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
              <TextFavorito>Meus Favoritos</TextFavorito>
            </ContainerMenu>
          </SearchContainer>
          {pokemons.length === 0 ? (
            <Error />
          ) : (
            <PokemonsContainer>
              {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.name} name={pokemon.name} />
              ))}
            </PokemonsContainer>
          )}
          {pokemons.length === 0 && pokemonSearch.length <= 2 && (
            <button
              type="button"
              onClick={() => handleMorePokemons(pokemonsOffsetApi)}
            >
              CARREGAR MAIS
            </button>
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export default ListPokemon;
