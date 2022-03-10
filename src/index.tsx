import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const element = <p className="text">hello react</p>;
// const styleelement = <div style={backgroundcolor}>hello react</div>;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
