import React from 'react';
import PropTypes from 'prop-types';

const Cita = ({cita, eliminarCita}) => {
    return ( 
        <div className="card text-white bg-primary mb-3">
            <div className="card-header"> <h3>Cita: <b>{cita.mascota}</b></h3></div>
            <div className="card-body">
                <h4 className="card-title">Dueño: {cita.dueno} <br /> Fecha: {cita.fecha}&emsp;Hora: {cita.hora}</h4>
                <p className="card-text">Sintomas: {cita.sintomas}</p>
                <button type="button" className="btn btn-danger" onClick={() => eliminarCita(cita.id)}>Borrar</button>
            </div>
        </div>
    );
    
}

Cita.propTypes = {
    cita : PropTypes.object.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
 
export default Cita;