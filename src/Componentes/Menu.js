import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../css/App.css';
import '../css/indexStyle.css';
import SelectorDeWeones from '../Componentes/MenuIndex';
//import styles from './WpCrearPlantilla.module.scss';
class Menu extends Component {

  render() {
    return (

      <div className="Menu">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>menu 2</h2>
        </div>

        <p className="App-intro"><h1>Inicio</h1></p>
        <SelectorDeWeones 
        urlNico = ".\public\nico\index.html"
        urlSeba = "seba.html"
        urlTom ="tom.html"
        />
      </div>
    );
  }


}

export default Menu;
