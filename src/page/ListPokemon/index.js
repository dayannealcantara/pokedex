import React from 'react';
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
} from './styles';
import Logopesquisar from '../../imagens/pesqui.png';
import Logofavoritos from '../../imagens/curtir.png';

function ListPokemon() {
  return (
    <Container>
      <Wrapper>
        <Fieldset>
          <Legend>Buscar</Legend>
          <Buscar placeholder={'Busque seu Pokemon'} />
          <LogoBuscar src={Logopesquisar} alt="logo de pesquisa" />
        </Fieldset>
        <ContainerMenu>
          <LogoFavoritos src={Logofavoritos} alt="logo favoritos" />
          <TextFavorito>Meus Favoritos</TextFavorito>
        </ContainerMenu>
      </Wrapper>
    </Container>
  );
}
export default ListPokemon;
