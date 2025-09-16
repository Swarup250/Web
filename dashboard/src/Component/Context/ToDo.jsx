import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            toDo:'Checking if it is working',
            completed : false
        }],
        addTodo: (todo) =>{},
        updateTodo: (id,todo) =>{},
        deleteTodo: (id) =>{},
        toggleCompelete: (id) =>{}
});

export const useToDo = () =>{
    return useContext(ToDoContext)
}
