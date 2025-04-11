import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import Apitarefas from './API/Apitarefas';
import APIIP from './APISTACK/APIIP';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Apitarefas />
    <APPIP />
  </React.StrictMode>
);

