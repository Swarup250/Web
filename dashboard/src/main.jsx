import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Timer from './Component/Time/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)
