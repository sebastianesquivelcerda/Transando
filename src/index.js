import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App';
import Menu from './Componentes/Menu'
import './css/index.css';


ReactDOM.render(
  <App />, document.getElementById('menu')
);

ReactDOM.render(
  <App2 />, document.getElementById('menu2')
);
