import { createContext, useReducer } from 'react';

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMPRADOR':
      return {
        ...state,
        compradores: [...state.compradores, action.payload],
      };
    case 'DELETE_COMPRADOR':
      return {
        ...state,
        compradores: state.compradores.filter(
          (comprador) => comprador.id !== action.payload
        ),
      };
    case 'SET_PARTICIPANTES':
      return {
        ...state,
        totalParticipantes: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  totalGastos: 0,
  totalParticipantes: 0,
  compradores: [
    
  ],
};

export const AppContext = createContext();


export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        totalGastos: state.totalGastos,
        totalParticipantes: state.totalParticipantes,
        compradores: state.compradores,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
