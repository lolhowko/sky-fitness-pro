import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./index.css";
import { Provider } from 'react-redux'
import { store } from './components/store/store.js'
import '../src/components/firebase/firebase.js'
import { AppRoutes } from './routers.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
       <AppRoutes/>
      </Provider>
    </BrowserRouter>
  </>
)
