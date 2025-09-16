import React,{useState} from "react";
import { ToDoProvider} from "./Context/index";

function ToDoList() {

    const [todos,setTodos] = useState([])
    
    const addTodo = (todo) =>{
        setTodos((perv) => [{id:Date.now() ,...todo},...perv ])
    }

    const updateTodo = (id,todo) =>{
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id) === id ? todo : prevTodo))
    }

    const deleteTodo = (id) =>{
        setTodos((prev) => prev.filter((todo) => todo.id !== todo))
    }

    const toggleCompelete = (id) =>{
        setTodos((prev) => prev.map((prevTodo) => prevTodo === id ? {...prevTodo , completed : !prevTodo.completed}: prevTodo))
    }
    return (
    <ToDoProvider value={{Todos, addTodo, updateTodo, deleteTodo, toggleCompelete }}>
    <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                Manage Your Todos
            </h1>
            <div className="mb-4">
                {/* Todo form goes here */}
            </div>
            <div className="flex flex-wrap gap-y-3">
                {/*Loop and Add TodoItem here */}
            </div>
        </div>
    </div>
    </ToDoProvider>
    );
}

export default ToDoList;
