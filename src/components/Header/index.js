import React from 'react';
import { Container, Logo, Title, Wrapper, ContainerTitle } from './styles';

import Vector from '../../imagens/Vector.png';
import Switch from '../Switch';

function Header({ color = '#ec0344' }) {
  return (
    <Container color={color}>
      <Wrapper>
        <ContainerTitle>
          <Logo src={Vector} alt="logoIoasys" />
          <Title>ioasys pokédex</Title>
        </ContainerTitle>
        <Switch />
      </Wrapper>
    </Container>
  );
}
export default Header;
