import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import VehicleContextProvider from './store/VehicleContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VehicleContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </VehicleContextProvider>
);
