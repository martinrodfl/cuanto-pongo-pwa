import React from 'react';
import './ViewCantParticipantes.css'

export const ViewCantParticipantes = (props) => {
	return (
		<div className='cant-participantes'>
			<h2>
			Cuanto somos: {props.totalParticipantes}
			</h2>
			<button 
				className='btn-cambiar' 
				onClick={props.handleEditClick}>
				Cambiar
			</button>
		</div>
	);
};
