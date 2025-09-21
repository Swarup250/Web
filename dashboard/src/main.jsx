import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './Component/ToDo/ToDoList'
import App from './App'
import Weather from './Component/Weather/Weather'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weather />
  </StrictMode>,
)
