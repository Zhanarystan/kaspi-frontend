import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/grid.css';
import './styles/table.css';
import './styles/button.css';
import './styles/card.css';
import './styles/input.css';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
