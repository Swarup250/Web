import { createContext, useContext } from "react";

export const ToDoContext = createContext({});

export const useTodo = () =>{
    return useContext(ToDoContext)
}
