import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './CompradorItem.css';
import trash from '../images/Trash.svg';

export const CompradorItem = (props) => {
  const { dispatch } = useContext(AppContext);

  const handleDeleteComprador = () => {
    dispatch({
      type: 'DELETE_COMPRADOR',
      payload: props.id,
    });
  };
  return (
    <li className='comprador-item'>
      <button className='btn-delete' onClick={handleDeleteComprador}><img src={trash} alt='trash-img'></img></button>
      <h3>
        <span className='comprador-nombre'>{props.nombre}</span>
        <span className='comprador-gasto'>${props.gasto}</span>
      </h3>
    </li>
  );
};
