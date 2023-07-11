import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TareasContextoProvider} from './contexto/TareasContexto.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <TareasContextoProvider>
   <App />
   </TareasContextoProvider>
  </React.StrictMode>,
)
