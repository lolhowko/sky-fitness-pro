import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Register
} from './pages/reg/Registration';
import {
  Login
} from './pages/login/login';
import { Profile } from './pages/profile/profile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode >
  <Profile />
  <Register />
  <Login />
  </React.StrictMode>
);