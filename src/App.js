import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './css/indexStyle.css';
import SelectorDeWeones from './MenuIndex';
//import styles from './WpCrearPlantilla.module.scss';
class App extends Component {

  render() {
    return (

      <div className="App">

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome cabro as l</h2>
        </div>

        <p className="App-intro"><h1>Inicio</h1></p>
        <SelectorDeWeones 
        urlNico = "nico.html"
        urlSeba = "seba.html"
        urlTom ="tom.html"
        />




      </div>
    );
  }


}

export default App;
