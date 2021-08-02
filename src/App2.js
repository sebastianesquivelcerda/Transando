import React, { Component } from 'react';
import logo from './img/logo.svg';
import './css/App.css';
import './css/indexStyle.css';
//import styles from './WpCrearPlantilla.module.scss';
class App2 extends Component {

  render() {
    return (

      <div className="App2">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>sdasdas</h2>
        </div>

        <p className="App-intro"><h1>asdasdasd</h1></p>


        {/* componente creado */}
        <SelectorDeWeones 
        urlNico = "nico.html"
        urlSeba = "seba.html"
        urlTom ="tom.html"
        />




      </div>
    );
  }


}

export default App2;