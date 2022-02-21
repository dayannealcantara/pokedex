import React, { useState, useEffect, useCallback, useMemo } from 'react';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';
import api from '../../services/api';
import InfiniteScroll from 'react-infinite-scroll-component';
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
  const NUMBER_POKEMONS = 30;
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

  const PlusPokemons = () => {
    console.log('teste');
    // setTimeout(async () => {
    //   const response = await api.get(`/pokemon`, {
    //     params: {
    //       limit: NUMBER_POKEMONS,
    //       offset: pokemonsOffsetApi,
    //     },
    //   });
    //   setPokemons(state => [...state, ...response.data.results]);
    setPokemonsOffsetApi((pokemonsOffsetApi += NUMBER_POKEMONS));
    // }, 500);
  };

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
            <ContainerMenu to="meus-favoritos">
              <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
              <TextFavorito>Meus Favoritos</TextFavorito>
            </ContainerMenu>
          </SearchContainer>
          {pokemonSearch.length >= 2 && pokemons.length === 0 ? (
            <Error />
          ) : (
            // <div
            //   id="scrollableDiv"
            //   style={{
            //     width: '100%',
            //   }}
            // >
            //   <InfiniteScroll
            //     dataLength={pokemonsOffsetApi.length}
            //     next={PlusPokemons()}
            //     hasMore={true}
            //     loader={<h4>Loading...</h4>}
            //   >
            <PokemonsContainer>
              {pokemons.map(pokemon => (
                <PokemonCard key={pokemon.name} name={pokemon.name} />
              ))}
            </PokemonsContainer>
            //   </InfiniteScroll>
            // </div>
          )}
          {/* {pokemons.length === 0 && pokemonSearch.length <= 2 && (
            <button
              type="button"
              onClick={() => handleMorePokemons(pokemonsOffsetApi)}
            >
              CARREGAR MAIS
            </button>
          )} */}
        </Wrapper>
      </Container>
    </>
  );
}

export default ListPokemon;
