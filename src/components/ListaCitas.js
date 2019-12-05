import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) => {
    return ( 
        <div className="card mt-5 py-5">
            <div className="card-body">
                {citas.length > 0 
                    ? citas.map(cita => (
                        <Cita 
                            key = {cita.id}
                            cita = {cita} 
                            eliminarCita = {eliminarCita} />
                        ))
                    : <h3 className="text-center">No hay citas disponibles</h3> //si no hay citas mostrar texto
                }
            </div>
        </div>
     );
}
 
ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}

export default ListaCitas;