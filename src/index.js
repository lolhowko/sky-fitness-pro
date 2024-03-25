import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/main/MainPage.jsx';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainPage />
    </BrowserRouter>
  </React.StrictMode>
);
