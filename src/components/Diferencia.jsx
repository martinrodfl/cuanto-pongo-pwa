import React, { useContext } from 'react';
import { DiferenciaItem } from './DiferenciaItem';
import { AppContext } from '../context/AppContext';
import './Diferencia.css';

export const Diferencia = () => {
  const { totalParticipantes, compradores } = useContext(AppContext);
  const totalCompras = compradores.reduce((total, item) => {
    return (total += item.gasto);
  }, 0);

  const ticket = totalCompras / totalParticipantes;

  const debeMsg = 'se le devuelven: ';
  const pagaMsg = 'se le cobra: ';
  return (
    <ul className="diferencia-lista">
      <h3 className="total">
        Total<span>{totalCompras}$</span>
      </h3>
      <h3 className="ponen-cu">
        Cada uno<span>{ticket > 0 ? ticket : '0'}$</span>
      </h3>
      {compradores.map((comprador) => (
        <DiferenciaItem
          key={comprador.id}
          id={comprador.id}
          nombre={`A ${comprador.nombre}`}
          gasto={`
              ${
                comprador.gasto - ticket > 0
                ? debeMsg + (comprador.gasto - ticket) + '$' 
                  : pagaMsg + (ticket - comprador.gasto) + '$' 
              }
              `}
        />
      ))}
    </ul>
  );
};
