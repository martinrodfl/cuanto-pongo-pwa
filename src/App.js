import React from 'react';
import './App.css';

import { AppProvider } from './context/AppContext';
import { Header } from './components/Header';
import { CompradorForm } from './components/CompradorForm';
import { TotalGastos } from './components/TotalGastos';
import { CompradoresLista } from './components/CompradoresLista';
import { TotalParticipantes } from './components/TotalParticipantes';
import { ValorTicket } from './components/ValorTicket';
import { Modal } from './components/Modal';
import { useModal } from './components/customHooks/useModal';
import { PantallaInicio } from './components/PantallaInicio';

function App() {

  const [isOpenModal, openModal, closeModal] = useModal(false);

  return (
    <AppProvider>
    <PantallaInicio />
        <Header />
      <div className='App'>
        <Modal isOpen={isOpenModal} closeModal={closeModal} />
        <TotalParticipantes/>
        <CompradorForm/>
        <CompradoresLista/>
        <TotalGastos/>
        <ValorTicket/>
        <div>
          <button onClick={openModal} className='btn-modal'>Calcular Diferencias</button>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;
