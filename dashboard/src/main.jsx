import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './Component/ToDo/ToDoList'
import App from './App'
import Weather from './Component/Weather/Weather'
import Timer from './Component/Time/Timer'
import Clock from './Component/Time/Clock'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Weather />
    <Clock />
    <Timer />
    <ToDoList />
  </StrictMode>,
)
