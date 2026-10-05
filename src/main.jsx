import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeGoogleTag, installAnalyticsInteractions } from './utils/analytics.js'

initializeGoogleTag()
installAnalyticsInteractions()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
