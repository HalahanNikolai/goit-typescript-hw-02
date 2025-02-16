import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import App from './components/App/App';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
