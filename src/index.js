import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import { getAllByAltText } from '@testing-library/dom';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

