import React from 'react';
import ReactDOM from 'react-dom';
import { StoreProvider } from 'store';
import {
  BrowserRouter,
} from 'react-router-dom';
import App from 'App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <App />
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);