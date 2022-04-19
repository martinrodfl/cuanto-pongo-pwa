import React, { useContext } from 'react';
import { CompradorItem } from './CompradorItem';
import { AppContext } from '../context/AppContext';
import './CompradoresLista.css';

export const CompradoresLista = () => {
  const { compradores } = useContext(AppContext);

  return (
    <ul className='compradores-lista'>
      {
        compradores.map((comprador) => (
          <CompradorItem
            key={comprador.id}
            id={comprador.id}
            nombre={comprador.nombre}
            gasto={comprador.gasto}
          />
        ))
      }
    </ul>
  );
};
