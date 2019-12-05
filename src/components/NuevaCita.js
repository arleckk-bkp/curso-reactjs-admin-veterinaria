import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita : {
      mascota : '',
      dueno : '',
      fecha : '', 
      hora : '', 
      sintomas : ''
    },
    error : false
}

class NuevaCita extends Component {
    state = {
        ...stateInicial
    }

    //cuando el usuario escribe en los inputs
    handleChange = e => {
        //console.log("estas escribiendo en "+e.target.name+' '+e.target.value);
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
    }

    //cuando el usuario da clic para enviar el formulario
    handleSubmit = e => {
        e.preventDefault();

        //extraer los valores del state 
        const { mascota, dueno, fecha, hora, sintomas } = this.state.cita;

        //validar que todos los campos esten llenos
        if(mascota === '' || dueno === '' || fecha === '' || hora === '' || sintomas === '') {
            this.setState({
                error: true
            });
            return;
        }

        //generar objeto
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();

        //if OK agregar la cita al API
        this.props.crearNuevaCita(nuevaCita);

        this.setState({
            ...stateInicial
        });
    }

    render() { 

        //extraer valor del state
        const {error} = this.state;

        return ( 
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null }

                    <form
                        onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div> 
                        </div> {/* form group row nombre mascota */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Due&ntilde;o
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Due&ntilde;o"
                                    name="dueno"
                                    onChange={this.handleChange}
                                    value={this.state.cita.dueno}
                                />
                            </div> 
                        </div> {/* form group row nombre dueño */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Fecha
                            </label>
                            <div className="col-sm-4 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div> 
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Hora
                            </label>
                            <div className="col-sm-4 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div> 
                        </div> {/* form group row fecha y hora */}

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                        className="form-control"
                                        name="sintomas" 
                                        placeholder="Describe los sintomas" 
                                        onChange={this.handleChange}
                                        value={this.state.cita.sintomas} />
                            </div> 
                        </div> {/* form group row nombre dueño */}

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />

                    </form>

                </div>
            </div>
         );
    }
}
 
NuevaCita.propTypes = {
    crearNuevaCita : PropTypes.func.isRequired
}

export default NuevaCita;