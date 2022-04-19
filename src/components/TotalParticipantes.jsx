import React, { useContext, useState } from 'react';
import { EditParticipantes } from './EditParticipantes';
import { ViewCantParticipantes } from './ViewCantParticipantes';
import { AppContext } from '../context/AppContext';

export const TotalParticipantes = () => {
  const { totalParticipantes, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: 'SET_PARTICIPANTES',
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditParticipantes
          handleSaveClick={handleSaveClick}
          totalParticipantes={totalParticipantes}
        />
      ) : (
        <ViewCantParticipantes
          handleEditClick={handleEditClick}
          totalParticipantes={totalParticipantes}
        />
      )}
    </>
  );
};
