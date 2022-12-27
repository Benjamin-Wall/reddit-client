import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

//* - Import necessary css files
import './index.css';
import './assets/css/css-reset.css';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
