import React, { useState } from 'react'
import { useToDo } from '../Context';
import './App.css';

function TodoForm() {
    const [todo, setTodo] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { addTodo } = useToDo();
    
    const add = async (e) => {
        e.preventDefault()
        
        if (!todo.trim()) return;
        
        setIsLoading(true);
        
        // Simulate loading for better UX
        setTimeout(() => {
            addTodo({ todo: todo.trim(), completed: false });
            setTodo("");
            setIsLoading(false);
        }, 200);
    }

    return (
        <form onSubmit={add} className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="What needs to be done? ✍️"
                        className="w-full px-6 py-4 text-lg bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-2xl 
                                 focus:outline-none focus:ring-4 focus:ring-purple-500/30 focus:border-purple-400
                                 placeholder-gray-500 text-gray-800 shadow-lg transition-all duration-300
                                 hover:bg-white hover:shadow-xl"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                        disabled={isLoading}
                    />
                    {todo && (
                        <button
                            type="button"
                            onClick={() => setTodo("")}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                        >
                            ✕
                        </button>
                    )}
                </div>
                
                <button 
                    type="submit" 
                    disabled={!todo.trim() || isLoading}
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl 
                             shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105
                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                             focus:outline-none focus:ring-4 focus:ring-purple-500/30 whitespace-nowrap"
                >
                    {isLoading ? (
                        <span className="flex items-center gap-2">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Adding...
                        </span>
                    ) : (
                        <span className="flex items-center gap-2">
                            ➕ Add Task
                        </span>
                    )}
                </button>
            </div>
        </form>
    );
}

export default TodoForm;
