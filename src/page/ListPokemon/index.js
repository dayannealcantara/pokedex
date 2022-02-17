import React, { useState, useEffect } from 'react';
import PokemonCard from "../../components/PokemonCard";
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
  App,
  PaginationContainer,
  SearchContainer,
  PokemonsContainer,
} from './styles';
import Logopesquisar from '../../imagens/pesqui.png';
import Logofavoritos from '../../imagens/curtir.png';

function Home({ getQuery }) {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [query, setQuery] = useState('');
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  
 
  useEffect(() => {
    const fetchPokemons = async () => {
      setIsLoading(true);
      const response = await api.get('pokemon?limit=15&offset=0');
      const { data } = response;
     
      setPokemons(data.results)
      setIsLoading(false);
    };
    fetchPokemons();
  }, []);

  console.log(pokemons)

  const renderPokemonsList = () => {
    const pokemonsList = [];

    pokemons.forEach((pokemon) => {
      if (!pokemon.name.includes(query)) {
        return;
      }

      pokemonsList.push(<PokemonCard key={pokemon.name} pokemon={pokemon} />);
    });

    return pokemonsList;
  };


  return (
    <Container>
      <Wrapper>
        <SearchContainer>
          <Fieldset>
            <Legend>Buscar</Legend>
            <Buscar
              type="text"
              placeholder={'Busque seu Pokemon'}
              value={text}
              onChange={(e) => onChange(e.target.value)}
            />
            <LogoBuscar src={Logopesquisar} alt="logo de pesquisa" />
          </Fieldset>
          <ContainerMenu>
            <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
            <TextFavorito>Meus Favoritos</TextFavorito>
          </ContainerMenu>
        </SearchContainer>
        <PokemonsContainer>
        {renderPokemonsList()}
        </PokemonsContainer>
      </Wrapper>
    </Container>
  );
}
export default Home;
