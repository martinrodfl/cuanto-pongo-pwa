import React, { useState, useEffect } from 'react';
import './PantallaInicio.css';

export const PantallaInicio = () => {
  const [mostrarPantallaInicio, setmostrarPantallaInicio] = useState(true);
 
  useEffect(() => {
    setTimeout(() => {
      setmostrarPantallaInicio(!mostrarPantallaInicio);
      setmostrarPantallaInicio(false)
    }, 2000);
  },[mostrarPantallaInicio]);

  return (
    <div>
      {mostrarPantallaInicio && (
        <div className="pantalla-inicio">
          <div>
            <h1> Cuanto pongo?</h1>
            <div className="wrapper">
              <div className="border">
                <div className="space">
                  <div className="loading"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
