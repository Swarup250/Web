import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ToDoList from './Component/ToDo/ToDoList'
import App from './App'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
