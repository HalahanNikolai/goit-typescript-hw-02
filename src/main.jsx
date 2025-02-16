import React from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
ReactDOM.createRoot(document.getElementById('root')).render(

  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
