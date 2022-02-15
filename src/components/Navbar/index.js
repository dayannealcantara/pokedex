import React from 'react';
import './style.css'
import Logopesquisar from '../../imagens/pesqui.png';
import Logofavoritos from '../../imagens/curtir.png';

function Navbar() {
  return (
    <div>  
        <fieldset>
          <legend>Buscar</legend>
          <img  className='logoBuscar' src={Logopesquisar} alt="logo de pesquisa"></img>
        </fieldset>      
      <div>
        <img  className='logoFavoritos'src={Logofavoritos} alt="logo favoritos"></img>
        <p>Meus Favoritos</p>
      </div>
    </div>
  );
}

export default Navbar;
