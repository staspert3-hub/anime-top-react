import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import Snowfall from 'react-snowfall'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      {/* Снежинки накладываются поверх контента */}
      <Snowfall 
        color="white" 
        snowflakeCount={200} 
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 900 // Чтобы снег был поверх всего
        }}
      />
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StrictMode>,
)
