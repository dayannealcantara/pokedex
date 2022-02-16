import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 840px;
  width: 100%;
  margin-top: 72px;
  align-items: center;
  gap: 64px;
`;
export const Fieldset = styled.fieldset`
  width: 630px;
  height: 54px;
  border: 2px solid #ec0344;
  border-radius: 5px;
  display: flex;
  padding: 0px 40px 0 30px;
`;
export const Legend = styled.legend`
  height: 16px;
  font-size: 18px;
  font-weight: 500;
  font-style: normal;
  color: #ec0344;
  line-height: 16px;
  margin-left: 5px;
`;
export const LogoBuscar = styled.img`
  width: 27px;
  height: 27px;
`;
export const Buscar = styled.input`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  border: none;
  outline: none;
`;
export const LogoFavoritos = styled.img``;

export const TextFavorito = styled.p`
  color: #ec0344;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const ContainerMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;
