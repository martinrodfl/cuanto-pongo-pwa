import React, { useState } from 'react';
import './EditParticipantes.css'

export const EditParticipantes = (props) => {
  const [value, setValue] = useState(props.totalParticipantes);
  return (
    <div className='edit-participantes '>
      <input
        required
        type="number"
        className='input-edit'
        id="name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button
        className='btn-guardar'
        onClick={() => props.handleSaveClick(value)}
      >
        Guardar
      </button>
    </div>
  );
};
