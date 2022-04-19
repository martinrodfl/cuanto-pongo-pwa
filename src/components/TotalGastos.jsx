import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './TotalGastos.css'

export const TotalGastos = () => {
  const { compradores } = useContext(AppContext);

  const totalCompras = compradores.reduce((total, item) => {
    return (total += item.gasto);
  }, 0);

  return (
    <div className='total-gastos'>
      <h2>
      Total Gastos: 
      <span>
       {totalCompras}$
      </span> 
      </h2>
    </div>
  );
};
