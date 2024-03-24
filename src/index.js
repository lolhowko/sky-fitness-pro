import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/main/MainPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/header/header.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MainPage />
    </BrowserRouter>
  </React.StrictMode>
);
