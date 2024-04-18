import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyled } from './GlobalAppStyle'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>
)
