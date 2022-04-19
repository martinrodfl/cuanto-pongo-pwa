import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './DiferenciaItem.css';
import trash from '../images/Trash.svg';

export const DiferenciaItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteComprador = () => {
    dispatch({
      type: 'DELETE_COMPRADOR',
      payload: props.id,
    });
  };
  return (
    <li className='diferencia-item'>
      <button className='btn-delete-diferencia' onClick={handleDeleteComprador}><img src={trash} alt='trash-img'></img></button>
      <h3>
        <span className='diferencia-nombre'>{props.nombre}</span>
        <span className='diferencia-gasto'>{props.gasto}</span>
      </h3>
    </li>
  );
};
