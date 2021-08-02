import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import './css/indexStyle.css';
import Boton from './Componentes/Boton';
//import styles from './WpCrearPlantilla.module.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React</h2>
        </div>

        <p className="App-intro"><h1>Inicio</h1></p>
        <Boton
          boton="boton"
          label="Mi boton"
        />
        <Boton
          boton="boton success"
          label="Mi boton"
        />
        <Boton
          boton="boton warning"
          label="Mi boton"
        />
      </div>
    );
  }
}
export default App;

