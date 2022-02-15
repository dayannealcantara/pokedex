import React from 'react';
import './style.css';
import Logo from "../../imagens/Vector.png"
import Switch from "@material-ui/core/Switch"

function Header() {
  return (
    <>
      <header></header>
      <container>
          <div className='containerEsquerdo'>
          <img className='HeaderLogo' src={Logo} alt="logoIoasys"></img>
          <p className='HeaderTexto' >Ioasys Pokédex</p>
          </div>
          <div className='containerDireito'>
          <Switch />
          </div>
          
      </container>
    </>
  );
}
export default Header;
