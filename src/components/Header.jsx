import React from 'react';
import './Header.css'

import pagarImg from '../images/pagar-editada.png';

export const Header = () => {
  return (
    <header className="header">
    <div className='header-titulos'>
      <h1>CUANTO</h1>
      <h1 className='pongo'>PONGO?</h1>
    </div>
    <div className='animate__animated animate__delay-3s animate__rollIn'>
      <img src={pagarImg} alt='pagar-imag'></img>
    </div>
    </header>
  );
};
