import React, { useContext } from 'react';
import { useState } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';
import './CompradorForm.css';

export const CompradorForm = () => {
  const { totalParticipantes, dispatch } = useContext(AppContext);

  const [nombre, setNombre] = useState('');
  const [gasto, setGasto] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (totalParticipantes === 0) {
      alert('AGREGUE LA CANTIDAD DE PARTICIPANTES');
    } else {
      const comprador = {
        id: uuidv4(),
        nombre: nombre,
        gasto: parseInt(gasto),
      };

      dispatch({
        type: 'ADD_COMPRADOR',
        payload: comprador,
      });
    }

    setNombre('');
		setGasto('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <h2>Ingresar Compradores</h2>
      </div>
      <div className="inputs">
        <input
          type="text"
          id="nombre"
          className="input"
          placeholder="Nombre"
          autoComplete="off"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="number"
          id="gasto"
          className="input"
          placeholder=" $"
          autoComplete="off"
          value={gasto}
          onChange={(e) => setGasto(e.target.value)}
          required
        />
        <button type="submit" className="btn-agregar">
          +
        </button>
      </div>
    </form>
  );
};
