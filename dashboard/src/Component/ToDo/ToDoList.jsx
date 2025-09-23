import React,{useEffect, useState} from "react";
import { ToDoProvider} from "../Context/index";
import TodoForm from "./ToDoForm";
import TodoItem from "./ToDoItem";
import './App.css';

function ToDoList() {
    const [todos,setTodos] = useState([])
    
    const addTodo = (todo) =>{
        setTodos((perv) => [{id:Date.now() ,...todo},...perv ])
    }

    const updateTodo = (id,todo) =>{
        setTodos((prev) => prev.map((prevTodo) => (prevTodo.id) === id ? todo : prevTodo))
    }

    const deleteTodo = (id) =>{
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    const toggleCompelete = (id) =>{
        setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo , completed : !prevTodo.completed}: prevTodo))
    }

    useEffect( () =>{
        const todos = JSON.parse(localStorage.getItem("todos"));
        if(todos && todos.length >0){
            setTodos(todos)
        }
    },[])

    useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todos))
    },[todos])
    
    return (
        <ToDoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleCompelete }}>
            <div className="bg-gradient-to-br from-[#172842] via-[#1e3a5f] to-[#2c5282] min-h-screen w-full py-8 px-4">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl px-6 py-8 text-white border border-white/10">
                    <h1 className="text-4xl font-bold text-center mb-12 mt-2 bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-lg">
                        ✨ Manage Your Todos
                    </h1>
                    
                    {/* Stats Section */}
                    <div className="flex justify-center gap-4 mb-8">
                        <div className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                            Total: <span className="text-blue-300 font-bold">{todos.length}</span>
                        </div>
                        <div className="bg-green-500/20 px-4 py-2 rounded-full text-sm font-medium">
                            Done: <span className="text-green-300 font-bold">{todos.filter(todo => todo.completed).length}</span>
                        </div>
                        <div className="bg-orange-500/20 px-4 py-2 rounded-full text-sm font-medium">
                            Pending: <span className="text-orange-300 font-bold">{todos.filter(todo => !todo.completed).length}</span>
                        </div>
                    </div>

                    <div className="mb-8">
                        <TodoForm />
                    </div>
                    
                    <div className="flex flex-wrap gap-y-4">
                        {todos.length === 0 ? (
                            <div className="w-full text-center py-16">
                                <div className="text-6xl mb-4 opacity-50">📝</div>
                                <p className="text-gray-400 text-lg">No tasks yet. Start by adding one above!</p>
                            </div>
                        ) : (
                            todos.map((todo) => (
                                <div key={todo.id} className="w-full flex justify-center transform transition-all duration-300 hover:scale-[1.02]">
                                    <TodoItem todo={todo}/>
                                </div>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </ToDoProvider>
    );
}

export default ToDoList;
