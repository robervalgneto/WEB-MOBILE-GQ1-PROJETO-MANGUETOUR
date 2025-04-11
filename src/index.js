import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import apitarefas from './API/apitarefas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <apitarefas />
  </React.StrictMode>
);

