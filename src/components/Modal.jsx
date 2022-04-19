import React from 'react';
import { Diferencia } from './Diferencia';

import './Modal.css';

export const Modal = ({ isOpen, closeModal }) => {

  const handleClickClose = e => e.stopPropagation();
  return (
    <div className={`modal ${isOpen && 'is-open'}  animate__animated animate__fadeInDown`} onClick={closeModal} >
      <button onClick={closeModal} className="btn-modal-cerrar ">
        Cerrar
      </button>

      <div onClick={handleClickClose} className="modal-cuerpo animate__animated animate__delay-1s animate__bounce">
        <div>
          <h2>Calculos Finales</h2>
        </div>
        <Diferencia />
      </div>
    </div>
  );
};
