import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import ToDoList from './Component/ToDo/ToDoList'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
)
