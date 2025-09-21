import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './Component/ToDo/ToDoList'
import App from './App'
import Weather from './Component/Weather/Weather'
import Timer from './Component/Time/Timer'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Timer />
  </StrictMode>,
)
