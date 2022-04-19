import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './ValorTicket.css';

export const ValorTicket = () => {
  const { totalParticipantes, compradores } = useContext(AppContext);
  const totalCompras = compradores.reduce((total, item) => {
    return (total += item.gasto);
  }, 0);

  const ticket = totalCompras / totalParticipantes;

  return (
    <div className="valor-ticket">
      <h2>
      Debe pagar: 
        <span>{
          ticket > 0
                ? ticket
                : '0'
          }$ c/u</span>
      </h2>
    </div>
  );
};
