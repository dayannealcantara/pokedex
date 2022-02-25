import React, { useMemo, useContext } from 'react';
import { ReactComponent as BackIcon } from '../../imagens/back.svg';
import PokemonCard from '../../components/PokemonCard';
import Header from '../../components/Header';

import {
  Container,
  Wrapper,
  LogoFavoritos,
  TextFavorito,
  GoBack,
  ContainerMenu,
  SearchContainer,
  PokemonsContainer,
  PokemonCardVazio,
} from './styles';

import Logofavoritos from '../../imagens/curtir.png';
import { FavoritesContext } from '../../contexts/favorites';


function Favoritos() {
  const { pokemons } = useContext(FavoritesContext);
  const PokemonVazio = useMemo(() => {

    if(pokemons.length < 12){
      const listPokeVazio = new Array( 12 - pokemons.length ).fill(undefined); 
      return (<>
         {listPokeVazio.map((row, index) => <PokemonCardVazio
         key={index}></PokemonCardVazio>) } 
      </>) 
    }
    return <></>
  },[pokemons])
  
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
            <ContainerMenu >
              <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
              <TextFavorito>Meus Favoritos</TextFavorito>
            </ContainerMenu>
            <div style={{ width: '151px' }} />
          </SearchContainer>

          <PokemonsContainer>
            {pokemons?.map(pokemon => (              
              <PokemonCard  key={pokemon.name} name={pokemon.name} />
            ))}
            {PokemonVazio}
          </PokemonsContainer>
        </Wrapper>
      </Container>
    </>
  );
}

export default Favoritos;
