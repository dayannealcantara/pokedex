import styled from 'styled-components';


export const Container = styled.div`
display: flex;

justify-content: center;

border-top: 15px solid #EC0344;
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: row;
 max-width: 840px;
 width: 100%;
 padding-top: 60px;
 justify-content: space-between;
`;
export const ContainerTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 11px;

`;

export const Logo = styled.img`
 width: 28.65px;
 height: 22.28px;
`;


export const Title = styled.p`
  color: #ec0344;
  font-size: 28px;
  font-style: normal;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
`;