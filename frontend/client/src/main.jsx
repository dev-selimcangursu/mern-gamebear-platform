import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoutes from './routes';

createRoot(document.getElementById('root')).render(
  <AppRoutes>
    <App />
  </AppRoutes>,
)
