import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import Apitarefas from './API/Apitarefas.js';
import APISTACK from './APISTACK/Api_stack.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Apitarefas />
    <Api_stack />
  </React.StrictMode>
);

