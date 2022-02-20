import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  width: 100%;
  margin: 72px 72px 0px 72px;
  align-items: center;
  gap: 72px;
`;

export const Fieldset = styled.fieldset`
  width: 70%;
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
  background-color: ${props => props.theme.colors.primary};
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

export const PaginationContainer = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;

export const App = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 4rem;
  justify-content: space-between;

  @media (max-width: 500px) : {
    width: 100%;
    justify-content: flex-start;
  }
`;

export const PokemonsContainer = styled.div`
  flex: 1;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(5, 18%);
  gap: 25px;

  @media (max-width: 500px) : {
    width: 100%;
    justify-content: flex-start;
  }
`;
