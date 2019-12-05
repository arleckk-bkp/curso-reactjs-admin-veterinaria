import React, {Component} from 'react';
import './static/css/bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  
  state = {
    citas : []
  }

  //cuando la aplicación carga
  componentDidMount() {
    const citasStorage = localStorage.getItem('citas');
    if (citasStorage) {
      this.setState({
        citas : JSON.parse(citasStorage)
      })
    }
  }

  //al eliminar o agregar una nueva cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //copiar state actual
    const citas = [...this.state.citas, datos];

    //agregar al state
    this.setState({
        citas
    });
  }

  //eliminar citas del state
  eliminarCita = idCita => {
    console.log("cita a eliminar "+idCita);
    const citasActuales = [...this.state.citas];

    const citas = citasActuales.filter(cita => cita.id !== idCita);

    this.setState({
      citas
    });

  }

  render() {
    return(
        <div className="container">
            <Header titulo = "Administrador pacientes veterinaria"/>
          <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita 
                crearNuevaCita = {this.crearNuevaCita} />
            </div>
          </div>
          
          <div className="row">
              <div className="col-md-10 mx-auto">
                <ListaCitas
                  citas = {this.state.citas}
                  eliminarCita = {this.eliminarCita} />
              </div>
          </div>

        </div>
    );
  }

}

export default App;
